import fs from 'node:fs';
import path from 'node:path';
import {walls} from '../lib/route.mjs';
const files=['components/Gallery.tsx','app/page.tsx','components/textures.ts','app/bio/page.tsx','lib/route.mjs'];
const required=new Set();
for(const file of files){const source=fs.readFileSync(file,'utf8');for(const match of source.matchAll(/['"]\/(artworks|branding|textures)\/([^'"\s]+\.(?:jpg|png|avif|webp|svg|woff2|json))['"]/g))required.add(match[1]+'/'+match[2]);}
for(const material of ['plaster','concrete'])for(const suffix of ['roughness','normal'])required.add(`textures/${material}-${suffix}.jpg`);
const gallery=fs.readFileSync(files[0],'utf8');
const directory=gallery.match(/useTexture\(['"]\/(lightmaps[^/]+)\//)?.[1];
if(directory)for(const name of [...walls.map(w=>w.name),'floor','ceiling'])required.add(directory+'/'+name+'.png');
const missing=[...required].filter(file=>!fs.existsSync(path.join('public',file)));
if(missing.length)throw Error('Missing runtime assets: '+missing.join(', '));
console.log(JSON.stringify({pass:true,required:[...required].map(file=>'public/'+file)},null,2));
