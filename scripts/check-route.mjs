import {sampleRoute,collisionAt,duration} from '../lib/route.mjs';
let count=0;for(let t=0;t<=duration;t+=.01){const s=sampleRoute(t);const hit=collisionAt(s.position);if(hit.length)throw Error(`Collision ${t.toFixed(2)}: ${hit}`);count++;}
console.log(JSON.stringify({pass:true,samples:count,duration,clearanceRadius:.22,complete:sampleRoute(duration).complete}));
