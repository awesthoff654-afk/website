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
 {name:'connecting-lintel',min:[-1.2,3.1,4.98],max:[1.2,4,5.18]},
 {name:'vestibule-west',min:[-5.18,0,5.18],max:[-4.98,4,8.18]},
 {name:'vestibule-east',min:[4.98,0,5.18],max:[5.18,4,8.18]},
 {name:'vestibule-south-left',min:[-5.18,0,7.98],max:[-1.2,4,8.18]},
 {name:'vestibule-south-right',min:[1.2,0,7.98],max:[5.18,4,8.18]},
 {name:'vestibule-outer-lintel',min:[-1.2,3.1,7.98],max:[1.2,4,8.18]},
 {name:'exhibition-longitudinal',min:[-.12,0,-3.1],max:[.12,3.45,.25]},
 {name:'exhibition-entrance-facing',min:[-2.2,0,1.8],max:[2.2,3.45,2.04]}
];
const at=(x,z)=>[x,1.68,z];
const itinerary=[
 {art:0,via:[at(-3.4,3)],settle:at(-2.4,.42),pan:at(-2.4,-.32),withdraw:at(-1.7,-.32)},
 {art:4,via:[at(-3.35,-1.8)],settle:at(-2.7,-2.7),pan:at(-2.7,-3.25),withdraw:at(-1.95,-3.25)},
 {art:1,via:[at(-3,-3.35)],settle:at(-2.35,-2.4),pan:at(-1.45,-2.4),withdraw:at(-1.45,-1.65)},
 {art:5,via:[at(-1.25,-3.85),at(1.25,-3.85)],settle:at(2.1,-2.4),pan:at(2.8,-2.4),withdraw:at(2.8,-1.65)},
 {art:2,via:[at(3.4,-2.7)],settle:at(2.25,-1.85),pan:at(2.25,-.8),withdraw:at(1.6,-.8)},
 {art:9,via:[at(2.85,-.65)],settle:at(2.3,-1.65),pan:at(2.3,-.95),withdraw:at(3.1,-.95)},
 {art:6,via:[at(3.65,.9),at(3.65,2.4)],settle:at(2.65,2.45),pan:at(2.65,3),withdraw:at(1.9,3)},
 {art:3,via:[at(3.5,4.35)],settle:at(.45,4.55),pan:at(-.45,4.55),withdraw:at(-.6,4.6)},
 {art:7,via:[at(-3.4,3.4)],settle:at(-3.25,2.45),pan:at(-2.9,2.45),withdraw:at(-2.9,1.65)},
 {art:8,via:[at(-2.8,.65)],settle:at(-2.3,-.95),pan:at(-2.3,-1.65),withdraw:at(-3.1,-1.65)}
];
const keys=[[0,at(0,7.4),[0,1.8,.3],-1,'Arrival']];let elapsed=0;
function add(position,target,art,phase,seconds){elapsed+=seconds;keys.push([elapsed,position,target,art,phase]);}
add(at(0,5.7),[0,1.8,.3],-1,'Entrance',7);
add(at(0,4.3),[-1.3,1.8,.3],-1,'Discovery',6);
export const destinations=Array(artworks.length).fill(0);
export const viewingWindows=Array(artworks.length);
for(const step of itinerary){const target=artworks[step.art].position;for(const point of step.via){const previous=keys[keys.length-1][1];const distance=Math.hypot(...point.map((v,j)=>v-previous[j]));add(point,target,step.art,'Approach',Math.max(5,Math.ceil(distance/.48)));}add(step.settle,target,step.art,'Settle',7);destinations[step.art]=elapsed;const start=elapsed;add(step.pan,target,step.art,'Slow pan',9);add(step.pan,target,step.art,'Hold',4);viewingWindows[step.art]=[start,elapsed];add(step.withdraw,target,step.art,'Withdraw',4);}
for(const point of [at(-3.5,2.75),at(-3.5,3.9),at(3.65,3.9),at(0,4.3),at(0,5.7),at(0,7.4)]){const previous=keys[keys.length-1][1];add(point,[.8,1.8,-2],-1,'Return',Math.max(5,Math.ceil(Math.hypot(...point.map((v,j)=>v-previous[j]))/.55)));}add(at(0,7.4),[0,1.8,.3],-1,'Complete',4);
for(let i=1;i<keys.length;i++)if(keys[i][0]<=keys[i-1][0])throw Error('Camera route times must increase');
export const duration=elapsed;
const equal=(a,b)=>a.every((v,i)=>Math.abs(v-b[i])<1e-7);
function velocity(i,field){if(i===0||i===keys.length-1)return [0,0,0];const a=keys[i-1],b=keys[i],c=keys[i+1];if(equal(a[field],b[field])||equal(b[field],c[field]))return [0,0,0];return c[field].map((v,j)=>(v-a[field][j])/(c[0]-a[0])*.8);}
function hermite(a,b,va,vb,u,dt){const u2=u*u,u3=u2*u;return a.map((v,j)=>(2*u3-3*u2+1)*v+(u3-2*u2+u)*dt*va[j]+(-2*u3+3*u2)*b[j]+(u3-u2)*dt*vb[j]);}
export function sampleRoute(time){const t=Math.max(0,Math.min(duration,time));let i=0;while(i<keys.length-2&&keys[i+1][0]<t)i++;const a=keys[i],b=keys[i+1],dt=b[0]-a[0],u=(t-a[0])/dt;return {position:hermite(a[1],b[1],velocity(i,1),velocity(i+1,1),u,dt),target:hermite(a[2],b[2],velocity(i,2),velocity(i+1,2),u,dt),artwork:b[3],phase:t===duration?'Complete':b[4],time:t,complete:t===duration};}
export function collisionAt(p,radius=.22){return walls.filter(w=>p.every((v,i)=>v>w.min[i]-radius&&v<w.max[i]+radius)).map(w=>w.name);}
