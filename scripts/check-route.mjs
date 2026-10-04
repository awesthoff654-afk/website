import {sampleRoute,collisionAt,duration,viewingWindows,destinations} from '../lib/route.mjs';
let count=0;for(let t=0;t<=duration;t+=.01){const s=sampleRoute(t);const hit=collisionAt(s.position);if(hit.length)throw Error(`Collision ${t.toFixed(2)}: ${hit}`);count++;}
console.log(JSON.stringify({pass:true,samples:count,duration,clearanceRadius:.22,complete:sampleRoute(duration).complete}));

// Regression: artwork-to-artwork turns must retain a level view.
for(const [from,to,label] of [[2,9,'06 to 07'],[6,7,'08 to 09']]){
 let maximumPitch=0;
 for(let t=viewingWindows[from][1];t<=destinations[to];t+=.01){
  const {position:p,target:q}=sampleRoute(t);
  const pitch=Math.abs(Math.atan2(q[1]-p[1],Math.hypot(q[0]-p[0],q[2]-p[2]))*180/Math.PI);
  maximumPitch=Math.max(maximumPitch,pitch);
  if(pitch>10)throw Error(`Floor-facing camera between Artwork ${label} at ${t.toFixed(2)}s: ${pitch.toFixed(1)}°`);
 }
 console.log(JSON.stringify({transition:label,pass:true,maximumPitch}));
}
