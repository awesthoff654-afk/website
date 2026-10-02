"""Deterministic static cosine-weighted diffuse transport, current two-room shell.
Reads current route.mjs geometry through Node. Requires NumPy/Pillow only offline.
Atlases follow Three BoxGeometry face/UV ordering; values encode E/(8*pi) in sRGB.
"""
import json, math, subprocess
from pathlib import Path
import numpy as np
from PIL import Image, ImageFilter
ROOT=Path(__file__).resolve().parent.parent
scene=json.loads(subprocess.check_output(['node','--input-type=module','-e',"import {walls} from './lib/route.mjs';import {rooflights,wallParts,fins} from './lib/architecture.mjs'; console.log(JSON.stringify({walls,rooflights,fins,wallParts:walls.flatMap(wallParts)}));"],cwd=ROOT,text=True))
walls=scene['walls'];rooflights=scene['rooflights'];fins=scene['fins']
N=48; SAMPLES=128; BOUNCES=4; SCALE=2*math.pi
rng=np.random.default_rng(260111)
boxes=[dict(w,albedo=.88) for w in scene['wallParts']]
emitters=[(r['x'],r['z']) for r in rooflights]
def footprint(p):return (p[:,2]>=-5.2)&(p[:,2]<=9.2)&(abs(p[:,0])<=np.where(p[:,2]<4.98,5.2,14.2))
def levels(p):
 result=np.full(len(p),4.22)
 for w in walls:
  if w['max'][1]!=4:continue
  dx=np.maximum.reduce([w['min'][0]-p[:,0],np.zeros(len(p)),p[:,0]-w['max'][0]])
  dz=np.maximum.reduce([w['min'][2]-p[:,2],np.zeros(len(p)),p[:,2]-w['max'][2]])
  result[(dx<.05)&(dz<.05)]=4.075
 return result
def intersect(o,d):
 count=len(o); best=np.full(count,np.inf); normal=np.zeros_like(o); alb=np.zeros(count); emitted=np.zeros(count)
 for b in boxes:
  lo=np.array(b['min']);hi=np.array(b['max']); inv=1/np.where(abs(d)>1e-9,d,1e-9)
  t0=(lo-o)*inv;t1=(hi-o)*inv;enter=np.maximum.reduce(np.minimum(t0,t1),axis=1);leave=np.minimum.reduce(np.maximum(t0,t1),axis=1)
  valid=(enter>1e-4)&(leave>=enter)&(enter<best)
  ids=np.where(valid)[0];best[ids]=enter[ids];alb[ids]=b['albedo'];emitted[ids]=0
  axes=np.argmax(np.minimum(t0,t1)[ids],axis=1);normal[ids]=0;normal[ids,axes]=-np.sign(d[ids,axes])
 # Exact convex fin prisms: axis-aligned bounds clipped by the sloping underside plane.
 for f in fins:
  lo=np.array(f['min']);hi=np.array(f['max']);slope=f['rise']/f['width'];inv=1/np.where(abs(d)>1e-9,d,1e-9)
  t0=(lo-o)*inv;t1=(hi-o)*inv;mins=np.minimum(t0,t1);enter=np.maximum.reduce(mins,axis=1);leave=np.minimum.reduce(np.maximum(t0,t1),axis=1)
  a=o[:,1]-4-slope*(o[:,0]-lo[0]);b=d[:,1]-slope*d[:,0];plane=-a/np.where(abs(b)>1e-9,b,1e-9)
  sloped=(b>0)&(plane>enter);enter=np.where(sloped,plane,enter);leave=np.where(b<0,np.minimum(leave,plane),leave)
  valid=(enter>1e-4)&(leave>=enter)&(enter<best)&((abs(b)>1e-9)|(a>=0))
  ids=np.where(valid)[0];best[ids]=enter[ids];alb[ids]=.88;emitted[ids]=0;axes=np.argmax(mins[ids],axis=1);normal[ids]=0;normal[ids,axes]=-np.sign(d[ids,axes]);normal[ids[sloped[ids]]]=np.array([slope,-1,0])/math.sqrt(1+slope*slope)
 # True T-shaped floor and stepped opaque ceiling horizontal surfaces.
 for height,normalY,albedo in [(0,1,.3),(4.22,-1,.88),(4.075,-1,.88)]:
  t=(height-o[:,1])/np.where(abs(d[:,1])>1e-9,d[:,1],1e-9);p=o+d*t[:,None]
  valid=(t>1e-4)&(t<best)&(d[:,1]*normalY<0)&footprint(p)
  if height>0:valid&=abs(levels(p)-height)<1e-6
  best[valid]=t[valid];alb[valid]=np.where(p[valid,2]>=4.98,.08,albedo) if height>0 else albedo;emitted[valid]=0;normal[valid]=[0,normalY,0]
 for r in rooflights:
  t=(r['height']-o[:,1])/np.where(abs(d[:,1])>1e-9,d[:,1],1e-9);p=o+d*t[:,None]
  valid=(d[:,1]>0)&(t>1e-4)&(t<best)&(abs(p[:,0]-r['x'])<r['width']/2)&(abs(p[:,2]-r['z'])<r['depth']/2)
  best[valid]=t[valid];emitted[valid]=r['radiance'];alb[valid]=0;normal[valid]=[0,-1,0]
 return best,normal,alb,emitted

def cosine(n):
 u=rng.random((len(n),2));r=np.sqrt(u[:,0]);phi=2*np.pi*u[:,1]
 axis=np.tile([0.,1.,0.],(len(n),1));axis[abs(n[:,1])>.9]=[1,0,0]
 tangent=np.cross(axis,n);tangent/=np.maximum(np.linalg.norm(tangent,axis=1)[:,None],1e-8);bitangent=np.cross(n,tangent)
 return tangent*(r*np.cos(phi))[:,None]+bitangent*(r*np.sin(phi))[:,None]+n*np.sqrt(1-u[:,0])[:,None]

def irradiance(points,normals):
 total=np.zeros(len(points))
 # Batch samples limits memory; all rays use actual visibility and multiple diffuse bounces.
 for batch in range(SAMPLES//16):
  o=np.repeat(points,16,axis=0)+np.repeat(normals,16,axis=0)*.001;n=np.repeat(normals,16,axis=0);d=cosine(n);weight=np.ones(len(o));value=np.zeros(len(o))
  for bounce in range(BOUNCES):
   distance,n,albedo,emission=intersect(o,d);value+=weight*emission
   alive=np.isfinite(distance)&(albedo>0)&(weight>.015)
   weight*=albedo;weight[~alive]=0
   o=o+d*np.where(alive,distance,0)[:,None]+n*.001;d=cosine(n)
  total+=value.reshape(-1,16).sum(axis=1)
 return total/SAMPLES/8

def smooth(values,sigma):
 radius=math.ceil(3*sigma);x=np.arange(-radius,radius+1);kernel=np.exp(-x*x/(2*sigma*sigma));kernel/=kernel.sum()
 result=values.copy()
 for axis in (0,1):
  pad=[(0,0),(0,0)];pad[axis]=(radius,radius);padded=np.pad(result,pad,mode='edge');filtered=np.zeros_like(result)
  for j,weight in enumerate(kernel):
   sl=[slice(None),slice(None)];sl[axis]=slice(j,j+values.shape[axis]);filtered+=weight*padded[tuple(sl)]
  result=filtered
 return result

def save(path,values):
 # Each atlas face is filtered independently: unlit external faces must never bleed into room corners.
 if values.shape[1]==6*N:linear=np.concatenate([smooth(values[:,i*N:(i+1)*N],2.5) for i in range(6)],axis=1)
 else:linear=smooth(values,2)
 linear=np.clip(linear,0,1);srgb=np.where(linear<=.0031308,12.92*linear,1.055*linear**(1/2.4)-.055)
 gray=np.uint8(np.round(srgb*255));Image.fromarray(np.repeat(gray[:,:,None],3,axis=2)).save(path)

out=ROOT/'public/lightmaps-v13';out.mkdir(exist_ok=True)
u,v=np.meshgrid((np.arange(N)+.5)/N,(np.arange(N)+.5)/N);u=u.ravel();v=v.ravel()
# image top corresponds UV v=1. Face coordinates exactly match Three's buildPlane convention.
for w in walls:
 lo=np.array(w['min']);hi=np.array(w['max']);c=(lo+hi)/2;s=hi-lo;faces=[]
 for face in range(6):
  p=np.tile(c,(N*N,1));normal=np.zeros_like(p)
  if face in (0,1):
   sign=1 if face==0 else -1;p[:,0]=c[0]+sign*s[0]/2;p[:,2]=c[2]+(u-.5)*s[2]*(-sign);p[:,1]=c[1]+(.5-v)*s[1];normal[:,0]=sign
  elif face in (2,3):
   sign=1 if face==2 else -1;p[:,1]=c[1]+sign*s[1]/2;p[:,0]=c[0]+(u-.5)*s[0];p[:,2]=c[2]+(v-.5)*s[2]*sign;normal[:,1]=sign
  else:
   sign=1 if face==4 else -1;p[:,2]=c[2]+sign*s[2]/2;p[:,0]=c[0]+(u-.5)*s[0]*sign;p[:,1]=c[1]+(.5-v)*s[1];normal[:,2]=sign
  faces.append(irradiance(p,normal).reshape(N,N))
 save(out/(w['name']+'.png'),np.concatenate(faces,axis=1));print(w['name'],flush=True)
F=160;u,v=np.meshgrid((np.arange(F)+.5)/F,(np.arange(F)+.5)/F)
p=np.column_stack(((u.ravel()-.5)*28.4,np.zeros(F*F),-5.2+v.ravel()*14.4));n=np.tile([0,1,0],(len(p),1));save(out/'floor.png',irradiance(p,n).reshape(F,F))
p[:,1]=levels(p)-.001;n=np.tile([0.,-1.,0.],(len(p),1));
for f in fins:
 mask=(p[:,0]>=f['min'][0])&(p[:,0]<=f['max'][0])&(p[:,2]>=f['min'][2])&(p[:,2]<=f['max'][2]);slope=f['rise']/f['width'];p[mask,1]=4+slope*(p[mask,0]-f['min'][0])-.001;n[mask]=np.array([slope,-1,0])/math.sqrt(1+slope*slope)
save(out/'ceiling.png',irradiance(p,n).reshape(F,F))
(out/'manifest.json').write_text(json.dumps(dict(method='cosine-weighted diffuse path tracing, direct + indirect; static shell only',samples=SAMPLES,bounces=BOUNCES,wallFaceSize=N,floorSize=F,wallAtlas='6x1 +X -X +Y -Y +Z -Z standard Three BoxGeometry UV',encoding='sRGB E/(8*pi), base lightMapIntensity=8*pi',walls=walls,emitters=emitters,radiance=15,excluded='Artwork occlusion, 2-3mm bevels and exterior daylight are not baked',filter='Independent face filtering in LINEAR irradiance with edge padding: 2.5 wall texels, 2 floor/ceiling. Runtime analytic slot visibility on physical recess surfaces.',referenceCalibration={'walls':2.6,'ceiling':2.8,'floor':2.2},ceilingSize=160,footprint='10x10m main + 28x4m entrance'),indent=2))
print('Bake complete',flush=True)
