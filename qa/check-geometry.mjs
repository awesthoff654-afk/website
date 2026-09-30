// Independent gate: conservative actual scene bounds, not only wall centers.
import {sampleRoute,walls,artworks,duration} from '../lib/route.mjs';
const boxes=[...walls,
 {name:'ceiling',min:[-5.2,4,-5.2],max:[5.2,4.16,5.2]},
 {name:'floor',min:[-5.2,-.01,-5.2],max:[5.2,0,5.2]},
 {name:'bench',min:[2.7,0,3.2],max:[4.1,.5375,3.8]},
 ...artworks.map((a,i)=>{
  // Conservative union of canvas and wood support; artworks rotate by ±90° or 0°.
  const half=a.rotation[1]?[.09,(a.size[1]+.06)/2,(a.size[0]+.06)/2]:[(a.size[0]+.06)/2,(a.size[1]+.06)/2,.09];
  return {name:`artwork-${i+1}`,min:a.position.map((v,j)=>v-half[j]),max:a.position.map((v,j)=>v+half[j])};
 })];
let minimum=Infinity,closest=null;
for(let i=0;i<=duration*1000;i++){
 const time=i/1000,position=sampleRoute(time).position;
 for(const box of boxes){
  const distance=Math.sqrt(position.reduce((sum,v,j)=>sum+Math.max(box.min[j]-v,0,v-box.max[j])**2,0));
  if(distance<minimum){minimum=distance;closest={time,geometry:box.name,position};}
  if(distance<.22)throw Error(JSON.stringify({collision:time,geometry:box.name,distance}));
 }
}
const near=.08,fov=56,clearance=.22;
const tangent=Math.tan(fov/2*Math.PI/180);
const maxSafeAspect=Math.sqrt((clearance/near)**2-1-tangent**2)/tangent;
console.log(JSON.stringify({pass:true,samples:duration*1000+1,minimumSurfaceDistance:minimum,closest,clearanceSphere:clearance,near,fov,maxSafeAspect},null,2));
