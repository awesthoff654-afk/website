import {walls} from './route.mjs';
export const floorBounds={min:[-14.2,0,-5.2],max:[14.2,0,9.2]};
export const rooflights=[...[-2.3,2.3].flatMap(x=>[-3,0,3].map(z=>({x,z,width:2.748,depth:1.848}))),...[-11.5,-6.9,-2.3,2.3,6.9,11.5].map(x=>({x,z:7,width:2.748,depth:1.848}))];
export const inFootprint=(x,z)=>z>=-5.2&&z<=9.2&&Math.abs(x)<=(z<4.98?5.2:14.2);
export function ceilingLevel(x,z){if(!inFootprint(x,z))return null;for(const r of rooflights){const dx=Math.abs(x-r.x)-r.width/2,dz=Math.abs(z-r.z)-r.depth/2;if(dx<0&&dz<0)return null;if(dx<.025&&dz<.025)return 4.025;}
 for(const w of walls.filter(w=>w.max[1]===4)){const dx=Math.max(w.min[0]-x,0,x-w.max[0]),dz=Math.max(w.min[2]-z,0,z-w.max[2]);if(dx<.05&&dz<.05)return 4.075;}
 return 4;}
// Cell edges follow every physical aperture/recess. Adjacent identical cells merge along X.
const xs=new Set([-14.2,-5.2,5.2,14.2]),zs=new Set([-5.2,4.98,9.2]);
for(const r of rooflights){for(const sign of [-1,1]){xs.add(r.x+sign*r.width/2);xs.add(r.x+sign*(r.width/2+.025));zs.add(r.z+sign*r.depth/2);zs.add(r.z+sign*(r.depth/2+.025));}}
for(const w of walls.filter(w=>w.max[1]===4)){for(const value of [w.min[0]-.05,w.min[0],w.max[0],w.max[0]+.05])xs.add(value);for(const value of [w.min[2]-.05,w.min[2],w.max[2],w.max[2]+.05])zs.add(value);}
const X=[...xs].filter(v=>v>=-14.2&&v<=14.2).sort((a,b)=>a-b),Z=[...zs].filter(v=>v>=-5.2&&v<=9.2).sort((a,b)=>a-b);
export const ceilingParts=[];
for(let j=0;j<Z.length-1;j++){let start=null,level=null;for(let i=0;i<X.length;i++){const h=i<X.length-1?ceilingLevel((X[i]+X[i+1])/2,(Z[j]+Z[j+1])/2):null;if(h!==level){if(start!==null)ceilingParts.push({min:[start,level,Z[j]],max:[X[i],4.16,Z[j+1]]});start=h===null?null:X[i];level=h;}}}
export function wallParts(w){return [{min:[w.min[0]+.025,w.min[1],w.min[2]+.025],max:[w.max[0]-.025,.025,w.max[2]-.025]},{min:[w.min[0],.025,w.min[2]],max:[...w.max]}];}
