export const artworks = [
 {title:'Sediment / 01',year:'2026',medium:'Mineral pigment on linen',position:[-4.87,1.8,0],rotation:[0,Math.PI/2,0],size:[1.7,2.15],color:'#786e61'},
 {title:'After the rain',year:'2026',medium:'Oil and graphite on linen',position:[-1.9,1.85,-4.87],rotation:[0,0,0],size:[2.3,1.8],color:'#657f86'},
 {title:'Warm silence',year:'2026',medium:'Pigment and wax on panel',position:[4.87,1.8,-1.3],rotation:[0,-Math.PI/2,0],size:[1.7,2.15],color:'#a35e43'},
 {title:'A field of light',year:'2026',medium:'Acrylic on cotton canvas',position:[0,1.8,2.12],rotation:[0,0,0],size:[1.7,1.95],color:'#a39975'},
 {title:'Weather / 02',year:'2026',medium:'Oil and chalk on linen',position:[-4.87,1.75,-3],rotation:[0,Math.PI/2,0],size:[1.3,1.7],color:'#b1a895'},
 {title:'Blue interval',year:'2026',medium:'Oil on cotton canvas',position:[2.5,1.75,-4.87],rotation:[0,0,0],size:[1.6,1.8],color:'#68818a'},
 {title:'Late warmth',year:'2026',medium:'Pigment and wax on linen',position:[4.87,1.75,2.7],rotation:[0,-Math.PI/2,0],size:[1.35,1.7],color:'#ae795b'},
 {title:'The quiet edge',year:'2026',medium:'Graphite and pigment on linen',position:[-3.3,1.75,4.87],rotation:[0,Math.PI,0],size:[1.3,1.65],color:'#9da18b'},
 {title:'Negative space',year:'2026',medium:'Mineral pigment on linen',position:[-.2,1.75,-1.3],rotation:[0,-Math.PI/2,0],size:[1.25,1.7],color:'#a49b86'},
 {title:'A second horizon',year:'2026',medium:'Oil and graphite on linen',position:[.2,1.75,-1.3],rotation:[0,Math.PI/2,0],size:[1.25,1.7],color:'#789193'}
];
export const walls = [
 {name:'west',min:[-5.18,0,-5.18],max:[-4.98,4,5.18]},
 {name:'east',min:[4.98,0,-5.18],max:[5.18,4,5.18]},
 {name:'north',min:[-5.18,0,-5.18],max:[5.18,4,-4.98]},
 {name:'entrance-left',min:[-5.18,0,4.98],max:[-1.2,4,5.18]},
 {name:'entrance-right',min:[1.2,0,4.98],max:[5.18,4,5.18]},
 {name:'vestibule-north-left',min:[-22.18,0,4.98],max:[-5.18,4,5.18]},
 {name:'vestibule-north-right',min:[5.18,0,4.98],max:[22.18,4,5.18]},
 {name:'vestibule-west',min:[-22.18,0,5.18],max:[-21.98,4,9.18]},
 {name:'vestibule-east',min:[21.98,0,5.18],max:[22.18,4,9.18]},
 {name:'vestibule-south-left',min:[-22.18,0,8.98],max:[-1.2,4,9.18]},
 {name:'vestibule-south-center',min:[-1.2,0,8.98],max:[1.2,4,9.18]},
 {name:'vestibule-south-right',min:[1.2,0,8.98],max:[22.18,4,9.18]},
 {name:'exhibition-longitudinal',min:[-.12,0,-3.1],max:[.12,3,.25]},
 {name:'exhibition-entrance-facing',min:[-2.2,0,1.8],max:[2.2,3,2.04]}
];
for(const artwork of artworks)artwork.position[1]-=.18;
artworks[3].size=artworks[3].size.map(v=>v*.78);
const suppliedArtworks=[{"routeIndex":3,"file":"Artpiece- 90x120.png","url":"/artworks/originals/painting-01.avif","size":[0.9,1.2]},{"routeIndex":0,"file":"90x90 Painting nr.3.jpeg","url":"/artworks/originals/painting-02.avif","size":[0.9,0.9]},{"routeIndex":4,"file":"100x100 Painting nr.1.png","url":"/artworks/originals/painting-03.avif","size":[1,1]},{"routeIndex":1,"file":"100x100 Painting nr.2.png","url":"/artworks/originals/painting-04.avif","size":[1,1]},{"routeIndex":5,"file":"Art_120x150_nr.2.png","url":"/artworks/originals/painting-05.avif","size":[1.2,1.5]},{"routeIndex":2,"file":"Art_120x150 Kopie.png","url":"/artworks/originals/painting-06.avif","size":[1.2,1.5]},{"routeIndex":9,"file":"Bild_60x80.png","url":"/artworks/originals/painting-07.avif","size":[0.6,0.8]},{"routeIndex":6,"file":"BIld-30x40.saatchi Kopie.png","url":"/artworks/originals/painting-08.avif","size":[0.3,0.4]},{"routeIndex":7,"file":"Blank canvas 09","size":[0.9,1.2],"blank":true},{"routeIndex":8,"file":"Blank canvas 10","size":[0.9,1.2],"blank":true}];
for(const [number,work] of suppliedArtworks.entries()){const a=artworks[work.routeIndex];a.title=`Artwork ${String(number+1).padStart(2,"0")}`;a.year="";a.medium=`${Math.round(work.size[0]*100)} × ${Math.round(work.size[1]*100)} cm`;a.size=work.size;a.url=work.url;a.blank=!!work.blank;}
for(const index of [4,1,5]){artworks[index].blank=true;artworks[index].url=undefined;}
for(const index of [5,7]){artworks[index].size=[1.5,2];artworks[index].medium="150 × 200 cm";}
artworks[4].size=[.3,.4];artworks[4].medium="30 × 40 cm";
artworks[3].position[1]-=.3;
const at=(x,z)=>[x,1.5,z];
const view=(art,x,z)=>at(x,z);
const itinerary=[
 {art:3,via:[],settle:view(3,0,4.92),pan:view(3,.2,4.92),withdraw:at(0,5.62)},
 {art:0,via:[at(0,4.35),at(-3.4,3)],settle:view(0,-1.87,0),pan:view(0,-1.87,.2),withdraw:at(-1.17,.2)},
 {art:4,via:[at(-3.35,-1.8)],settle:view(4,-2.07,-3),pan:view(4,-2.07,-2.8),withdraw:at(-1.45,-2.8)},
 {art:1,via:[at(-3,-3.35)],settle:view(1,-1.9,-1.67),pan:view(1,-1.7,-1.67),withdraw:at(-1.7,-.97)},
 {art:5,via:[at(-1.25,-3.85),at(1.25,-3.85)],settle:view(5,2.5,-1.67),pan:view(5,2.7,-1.67),withdraw:at(2.7,-.97)},
 {art:2,via:[at(3.4,-2.7)],settle:view(2,1.87,-1.3),pan:view(2,1.87,-1.1),withdraw:at(1.17,-1.1)},
 {art:9,via:[at(2.85,-.65)],settle:view(9,3.1,-1.3),pan:view(9,3.1,-1.1),withdraw:at(3.65,-1.1)},
 {art:6,via:[at(3.65,.9),at(3.65,2.4)],settle:view(6,2.07,2.7),pan:view(6,2.07,2.9),withdraw:at(1.37,2.9)},
 {art:7,via:[at(0,3.6),at(-3.4,3.4)],settle:view(7,-3.3,2.07),pan:view(7,-3.1,2.07),withdraw:at(-3.1,1.37)},
 {art:8,via:[at(-2.8,.65)],settle:view(8,-3.1,-1.3),pan:view(8,-3.1,-1.1),withdraw:at(-3.7,-1.1)}
];
const keys=[[0,at(0,8.2),[0,1.8,.3],-1,'Arrival']];let elapsed=0;
function add(position,target,art,phase,seconds){elapsed+=seconds;keys.push([elapsed,position,target,art,phase]);}
add(at(0,5.7),[0,1.8,.3],-1,'Entrance',7);
add(view(3,0,5.4),artworks[3].position,3,'Discovery',6);
export const destinations=Array(artworks.length).fill(0);
export const viewingWindows=Array(artworks.length);
for(const step of itinerary){const target=artworks[step.art].position;for(const [number,point] of step.via.entries()){const previous=keys[keys.length-1][1];const distance=Math.hypot(...point.map((v,j)=>v-previous[j]));const leftTurn=step.art===7&&number===0;add(point,target,step.art,'Approach',Math.max(leftTurn?10:5,Math.ceil(distance/.48)));}add(step.settle,target,step.art,'Front view',7);destinations[step.art]=elapsed;const start=elapsed;const normal=[Math.sin(artworks[step.art].rotation[1]),Math.cos(artworks[step.art].rotation[1])];const withdrawal=at(step.settle[0]+normal[0]*.4,step.settle[2]+normal[1]*.4);add(withdrawal,target,step.art,'Slow withdrawal',6);viewingWindows[step.art]=[start,elapsed];}

const closingTarget=artworks[3].position;
for(const point of [view(3,-3.5,2.75),view(3,-3.5,3.9),view(3,0,3.9)]){const previous=keys[keys.length-1][1];add(point,closingTarget,3,'Return',Math.max(5,Math.ceil(Math.hypot(...point.map((v,j)=>v-previous[j]))/.55)));}
const closingPosition=view(3,0,4.92);add(closingPosition,closingTarget,3,'Final alignment',7);
export const closingView={align:elapsed,start:elapsed,end:elapsed+18,position:closingPosition,target:closingTarget};
add(keys[0][1],keys[0][2],3,'Straight withdrawal',18);
for(let i=1;i<keys.length;i++)if(keys[i][0]<=keys[i-1][0])throw Error('Camera route times must increase');
export const duration=elapsed;
const equal=(a,b)=>a.every((v,i)=>Math.abs(v-b[i])<1e-7);
function velocity(i,field){if(i===0||i===keys.length-1)return [0,0,0];const a=keys[i-1],b=keys[i],c=keys[i+1];if(field===1&&b[4]==="Front view")return [0,0,0];if(field===1&&b[4]==="Slow withdrawal")return b[1].map((v,j)=>(v-a[1][j])/(b[0]-a[0])*.8);if(equal(a[field],b[field])||equal(b[field],c[field]))return [0,0,0];return c[field].map((v,j)=>(v-a[field][j])/(c[0]-a[0])*.8);}
function hermite(a,b,va,vb,u,dt){const u2=u*u,u3=u2*u;return a.map((v,j)=>(2*u3-3*u2+1)*v+(u3-2*u2+u)*dt*va[j]+(-2*u3+3*u2)*b[j]+(u3-u2)*dt*vb[j]);}
export function sampleRoute(time){const t=Math.max(0,Math.min(duration,time));let i=0;while(i<keys.length-2&&keys[i+1][0]<t)i++;const a=keys[i],b=keys[i+1],dt=b[0]-a[0],u=(t-a[0])/dt;const position=hermite(a[1],b[1],velocity(i,1),velocity(i+1,1),u,dt),target=hermite(a[2],b[2],velocity(i,2),velocity(i+1,2),u,dt);// Blend viewing angles across the 06 → 07 and 08 → 09 turns.
// Interpolating their focus points sweeps them too close to the camera.
if(a[3]!==b[3]){
 const direction=k=>{const d=k[2].map((v,j)=>v-k[1][j]);return [Math.atan2(d[0],d[2]),Math.atan2(d[1],Math.hypot(d[0],d[2]))];};
 const from=direction(a),to=direction(b),blend=u*u*u*(u*(u*6-15)+10);
 let turn=Math.atan2(Math.sin(to[0]-from[0]),Math.cos(to[0]-from[0]));if(a[3]===6&&b[3]===7&&turn<0)turn+=Math.PI*2;
 const yaw=from[0]+turn*blend,pitch=from[1]+(to[1]-from[1])*blend;
 target[0]=position[0]+5*Math.sin(yaw)*Math.cos(pitch);target[1]=position[1]+5*Math.sin(pitch);target[2]=position[2]+5*Math.cos(yaw)*Math.cos(pitch);
}
position[1]=1.5;target[1]=1.5;return {position,target,artwork:b[3],phase:t===duration?'Complete':b[4],time:t,complete:t===duration};}
export function collisionAt(p,radius=.22){return walls.filter(w=>p.every((v,i)=>v>w.min[i]-radius&&v<w.max[i]+radius)).map(w=>w.name);}

// Phone visitors read the wall text for three seconds before entering the exhibition.
export const phoneIntroDuration=4;
const phoneKeys=[
 [0,at(1.95,8.5),at(1.95,5.18)],
 [3,at(1.95,8.5),at(1.95,5.18)],
 [11,at(0,5.7),at(0,.3)]
];
export function samplePhoneRoute(time){
 if(time>=11){const view=sampleRoute(time-phoneIntroDuration);return {...view,time};}
 const t=Math.max(0,time);let i=0;while(i<phoneKeys.length-2&&phoneKeys[i+1][0]<t)i++;
 const a=phoneKeys[i],b=phoneKeys[i+1],u=(t-a[0])/(b[0]-a[0]),blend=u*u*(3-2*u);
 const lerp=(from,to)=>from.map((v,j)=>v+(to[j]-v)*blend);
 return {position:lerp(a[1],b[1]),target:lerp(a[2],b[2]),artwork:-1,phase:t<=3?'Exhibition introduction':'Entering exhibition',time:t,complete:false};
}
