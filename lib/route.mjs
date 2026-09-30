export const artworks = [
 {title:'Sediment / 01',year:'2026',medium:'Mineral pigment on linen',position:[-4.87,1.8,0],rotation:[0,Math.PI/2,0],size:[1.7,2.15],color:'#786e61'},
 {title:'After the rain',year:'2026',medium:'Oil and graphite on linen',position:[-1.9,1.85,-4.87],rotation:[0,0,0],size:[2.3,1.8],color:'#657f86'},
 {title:'Warm silence',year:'2026',medium:'Pigment and wax on panel',position:[4.87,1.8,-1.3],rotation:[0,-Math.PI/2,0],size:[1.7,2.15],color:'#a35e43'},
 {title:'A field of light',year:'2026',medium:'Acrylic on cotton canvas',position:[0,1.8,2.12],rotation:[0,0,0],size:[1.7,1.95],color:'#a39975'}
];
export const walls = [
 {name:'west',min:[-5.18,0,-5.18],max:[-4.98,4,5.18]},
 {name:'east',min:[4.98,0,-5.18],max:[5.18,4,5.18]},
 {name:'north',min:[-5.18,0,-5.18],max:[5.18,4,-4.98]},
 {name:'entrance-left',min:[-5.18,0,4.98],max:[-1.15,4,5.18]},
 {name:'entrance-right',min:[1.15,0,4.98],max:[5.18,4,5.18]},
 {name:'exhibition-longitudinal',min:[-.12,0,-3.1],max:[.12,3.45,.25]},
 {name:'exhibition-entrance-facing',min:[-2.2,0,1.8],max:[2.2,3.45,2.04]}
];
const keys=[
 [0,[0,1.68,4.65],[0,1.8,2.12],-1,'Arrival'],
 [7,[-3.3,1.68,2.5],[-4.87,1.8,0],0,'Approach'],
 [14,[-2.4,1.68,.42],[-4.87,1.8,0],0,'Settle'],
 [22,[-2.4,1.68,-.32],[-4.87,1.8,0],0,'Slow pan'],
 [26,[-2.4,1.68,-.32],[-4.87,1.8,0],0,'Hold'],
 [30,[-3.45,1.68,-.35],[-1.9,1.85,-4.87],1,'Withdraw'],
 [34,[-3.45,1.68,-3.1],[-1.9,1.85,-4.87],1,'Transition'],
 [40,[-2.35,1.68,-2.4],[-1.9,1.85,-4.87],1,'Settle'],
 [48,[-1.45,1.68,-2.4],[-1.9,1.85,-4.87],1,'Slow pan'],
 [52,[-1.45,1.68,-2.4],[-1.9,1.85,-4.87],1,'Hold'],
 [58,[-1.25,1.68,-3.8],[-1.9,1.85,-4.87],1,'Withdraw'],
 [64,[1.25,1.68,-3.8],[4.87,1.8,-1.3],2,'Transition'],
 [69,[3.4,1.68,-3.05],[4.87,1.8,-1.3],2,'Transition'],
 [75,[2.25,1.68,-1.85],[4.87,1.8,-1.3],2,'Settle'],
 [83,[2.25,1.68,-.8],[4.87,1.8,-1.3],2,'Slow pan'],
 [87,[2.25,1.68,-.8],[4.87,1.8,-1.3],2,'Hold'],
 [91,[3.65,1.68,.1],[0,1.8,2.12],3,'Withdraw'],
 [97,[3.65,1.68,3.45],[0,1.8,2.12],3,'Transition'],
 [103,[.45,1.68,4.55],[0,1.8,2.12],3,'Settle'],
 [111,[-.45,1.68,4.55],[0,1.8,2.12],3,'Slow pan'],
 [115,[-.45,1.68,4.55],[0,1.8,2.12],3,'Hold'],
 [123,[0,1.68,4.65],[0,1.8,2.12],-1,'Complete']
];
export const duration=123;
export const destinations=[14,40,75,103];
const equal=(a,b)=>a.every((v,i)=>Math.abs(v-b[i])<1e-7);
function velocity(i,field){if(i===0||i===keys.length-1)return [0,0,0];const a=keys[i-1],b=keys[i],c=keys[i+1];if(equal(a[field],b[field])||equal(b[field],c[field]))return [0,0,0];return c[field].map((v,j)=>(v-a[field][j])/(c[0]-a[0])*.8);}
function hermite(a,b,va,vb,u,dt){const u2=u*u,u3=u2*u;return a.map((v,j)=>(2*u3-3*u2+1)*v+(u3-2*u2+u)*dt*va[j]+(-2*u3+3*u2)*b[j]+(u3-u2)*dt*vb[j]);}
export function sampleRoute(time){
 const t=Math.max(0,Math.min(duration,time));let i=0;while(i<keys.length-2&&keys[i+1][0]<t)i++;
 const a=keys[i],b=keys[i+1],dt=b[0]-a[0],u=(t-a[0])/dt;
 const position=hermite(a[1],b[1],velocity(i,1),velocity(i+1,1),u,dt);
 const target=hermite(a[2],b[2],velocity(i,2),velocity(i+1,2),u,dt);
 return {position,target,artwork:b[3],phase:t===duration?'Complete':b[4],time:t,complete:t===duration};
}
export function collisionAt(p,radius=.22){return walls.filter(w=>p.every((v,i)=>v>w.min[i]-radius&&v<w.max[i]+radius)).map(w=>w.name);}
