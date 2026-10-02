import {walls} from './route.mjs';
export const floorBounds={min:[-14.2,0,-5.2],max:[14.2,0,9.2]};
export const inFootprint=(x,z)=>z>=-5.2&&z<=9.2&&Math.abs(x)<=(z<4.98?5.2:14.2);
export const fins=[];const pitch=.95,width=.81,rise=.12;
for(let i=-5;i<=5;i++){const x=i*pitch;if(Math.abs(x)+width/2<4.93)fins.push({x,width,rise,min:[x-width/2,4,-4.93],max:[x+width/2,4.2,4.93]});}
export const rooflights=[];
for(let i=-5;i<5;i++){const x=(i+.5)*pitch;if(Math.abs(x)+.035<4.93)rooflights.push({x,z:0,width:.07,depth:9.76,height:4.18,radiance:15});}
for(let i=-9;i<=9;i++)rooflights.push({x:i*1.4,z:7.08,width:.055,depth:3.25,height:3.985,radiance:10});
export function backLevel(x,z){if(!inFootprint(x,z))return null;for(const w of walls.filter(w=>w.max[1]===4)){const dx=Math.max(w.min[0]-x,0,x-w.max[0]),dz=Math.max(w.min[2]-z,0,z-w.max[2]);if(dx<.05&&dz<.05)return 4.075;}return 4.22;}
export function ceilingLevel(x,z){if(!inFootprint(x,z))return null;const fin=fins.find(f=>x>=f.min[0]&&x<=f.max[0]&&z>=f.min[2]&&z<=f.max[2]);return fin?4+(x-fin.min[0])/fin.width*fin.rise:backLevel(x,z);}
const xs=new Set([-14.2,-5.2,5.2,14.2]),zs=new Set([-5.2,4.98,9.2]);for(const w of walls.filter(w=>w.max[1]===4)){for(const v of [w.min[0]-.05,w.min[0],w.max[0],w.max[0]+.05])xs.add(v);for(const v of [w.min[2]-.05,w.min[2],w.max[2],w.max[2]+.05])zs.add(v);}
const X=[...xs].filter(v=>v>=-14.2&&v<=14.2).sort((a,b)=>a-b),Z=[...zs].filter(v=>v>=-5.2&&v<=9.2).sort((a,b)=>a-b);export const ceilingBackParts=[];
for(let j=0;j<Z.length-1;j++){let start=null,level=null;for(let i=0;i<X.length;i++){const h=i<X.length-1?backLevel((X[i]+X[i+1])/2,(Z[j]+Z[j+1])/2):null;if(h!==level){if(start!==null)ceilingBackParts.push({min:[start,level,Z[j]],max:[X[i],4.3,Z[j+1]]});start=h===null?null:X[i];level=h;}}}
export const ceilingParts=[...fins,...ceilingBackParts];
export function wallParts(w){return [{min:[w.min[0]+.025,w.min[1],w.min[2]+.025],max:[w.max[0]-.025,.025,w.max[2]-.025]},{min:[w.min[0],.025,w.min[2]],max:[...w.max]}];}
