"""Iteration13b: spatial denoise of frozen13 maps in linear irradiance, face-isolated."""
from pathlib import Path
import json
import numpy as np
from PIL import Image
root=Path(__file__).resolve().parent.parent
src=root/'public/lightmaps-v13';dst=root/'public/lightmaps-v13b';dst.mkdir(exist_ok=True)
def smooth(a,sigma):
 radius=int(np.ceil(3*sigma));x=np.arange(-radius,radius+1);k=np.exp(-x*x/(2*sigma*sigma));k/=k.sum()
 for axis in (0,1):
  pad=[(0,0)]*a.ndim;pad[axis]=(radius,radius);p=np.pad(a,pad,mode='edge');out=np.zeros_like(a)
  for j,w in enumerate(k):
   sl=[slice(None)]*a.ndim;sl[axis]=slice(j,j+a.shape[axis]);out+=w*p[tuple(sl)]
  a=out
 return a
for p in src.glob('*.png'):
 rgb=np.asarray(Image.open(p).convert('RGB'),dtype=float)/255
 a=np.where(rgb<=.04045,rgb/12.92,((rgb+.055)/1.055)**2.4)
 if a.shape[1]==a.shape[0]*6:a=np.concatenate([smooth(a[:,i*48:(i+1)*48],5) for i in range(6)],axis=1)
 elif p.stem=='ceiling':a=smooth(a,3)
 else:a=smooth(a,2)
 rgb=np.where(a<=.0031308,a*12.92,1.055*a**(1/2.4)-.055)
 Image.fromarray(np.uint8(np.clip(rgb*255,0,255))).save(dst/p.name)
manifest=json.loads((src/'manifest.json').read_text());manifest['postprocess']={'source':'frozen lightmaps-v13','space':'linear irradiance','wallSigma':5,'ceilingSigma':3,'floorSigma':2,'faces':'filtered separately; edge padding'};(dst/'manifest.json').write_text(json.dumps(manifest,indent=2))
print('Denoised15 maps complete')
