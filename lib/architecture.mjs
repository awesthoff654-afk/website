import {walls} from './route.mjs';
export const floorBounds={min:[-22.2,0,-5.2],max:[22.2,0,9.2]};
export const inFootprint=(x,z)=>z>=-5.2&&z<=9.2&&Math.abs(x)<=(z<4.98?5.2:22.2);
export const fins=[];const pitch=1.4,width=1.27,rise=.18;
for(let i=-3;i<=3;i++){const z=i*pitch;fins.push({x:0,z,width,rise,axis:2,min:[-4.98,4,z-width/2],max:[4.98,4.24,z+width/2]});}
export const rooflights=[];
for(let i=-3;i<3;i++)rooflights.push({x:0,z:(i+.5)*pitch,width:9.76,depth:.08,height:4.025,radiance:18});
for(let i=-8;i<=8;i++)for(const z of [6.1,8])rooflights.push({x:i*1.6,z,width:.13,depth:.13,height:3.82,radiance:30});
export function backLevel(x,z){if(!inFootprint(x,z))return null;if(z>5.2)return 4.075;for(const w of walls.filter(w=>w.max[1]===4)){const dx=Math.max(w.min[0]-x,0,x-w.max[0]),dz=Math.max(w.min[2]-z,0,z-w.max[2]);if(dx<.05&&dz<.05)return 4.0;}return 4.285;}
export function ceilingLevel(x,z){if(!inFootprint(x,z))return null;const fin=fins.find(f=>x>=f.min[0]&&x<=f.max[0]&&z>=f.min[2]&&z<=f.max[2]);return fin?4.0+(z-fin.min[2])/fin.width*fin.rise:backLevel(x,z);}
const xs=new Set([-22.2,-5.2,5.2,22.2]),zs=new Set([-5.2,4.98,5.2,6.05,6.15,7.95,8.05,9.2]);for(const w of walls.filter(w=>w.max[1]===4)){for(const v of [w.min[0]-.05,w.min[0],w.max[0],w.max[0]+.05])xs.add(v);for(const v of [w.min[2]-.05,w.min[2],w.max[2],w.max[2]+.05])zs.add(v);}
const X=[...xs].filter(v=>v>=-22.2&&v<=22.2).sort((a,b)=>a-b),Z=[...zs].filter(v=>v>=-5.2&&v<=9.2).sort((a,b)=>a-b);export const ceilingBackParts=[];
for(let j=0;j<Z.length-1;j++){let start=null,level=null;for(let i=0;i<X.length;i++){const h=i<X.length-1?backLevel((X[i]+X[i+1])/2,(Z[j]+Z[j+1])/2):null;if(h!==level){if(start!==null)ceilingBackParts.push({min:[start,level,Z[j]],max:[X[i],4.365,Z[j+1]]});start=h===null?null:X[i];level=h;}}}
export const ceilingParts=[...fins,...ceilingBackParts];
export function wallParts(w){return [{min:[w.min[0]+.025,w.min[1],w.min[2]+.025],max:[w.max[0]-.025,.025,w.max[2]-.025]},{min:[w.min[0],.025,w.min[2]],max:[...w.max]}];}
