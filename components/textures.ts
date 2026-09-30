import * as THREE from 'three';
function rng(seed:number){return ()=>{seed=(Math.imul(1664525,seed)+1013904223)|0;return (seed>>>0)/4294967296;};}
export function surface(kind:'plaster'|'concrete'){
 const n=512;const random=rng(kind==='plaster'?52:983);const albedo=new Uint8Array(n*n*4),rough=new Uint8Array(n*n*4),normal=new Uint8Array(n*n*4);
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){const i=(y*n+x)*4;const fine=random()-.5;const broad=Math.sin(x*.035)*Math.sin(y*.025)+Math.sin(x*.087+y*.031)*.3;const base=kind==='plaster'?224:136;const v=base+fine*(kind==='plaster'?4:13)+broad*(kind==='plaster'?1.6:8);albedo.set([v,v+(kind==='concrete'?1:0),v,255],i);const r=kind==='plaster'?225+fine*10:132+fine*25+broad*18;rough.set([r,r,r,255],i);normal.set([128+fine*9,128+(random()-.5)*9,255,255],i);}
 const make=(d:Uint8Array,srgb=false)=>{const t=new THREE.DataTexture(d,n,n);t.wrapS=t.wrapT=THREE.RepeatWrapping;t.repeat.set(kind==='plaster'?4:3,kind==='plaster'?4:3);t.colorSpace=srgb?THREE.SRGBColorSpace:THREE.NoColorSpace;t.magFilter=THREE.LinearFilter;t.minFilter=THREE.LinearMipmapLinearFilter;t.generateMipmaps=true;t.anisotropy=8;t.needsUpdate=true;return t;};
 return {map:make(albedo,true),roughnessMap:make(rough),normalMap:make(normal)};
}
export function artTexture(index:number){
 const c=document.createElement('canvas');c.width=1536;c.height=1920;const ctx=c.getContext('2d')!;const random=rng(index*271+23);
 const palettes=[['#cec2ad','#8e826e','#4b4a3f','#b5aa94'],['#d2d2c4','#88a1a3','#43636d','#bab2a0'],['#d4b797','#b47756','#7c483b','#c99976'],['#dcd5ba','#b0aa83','#747963','#c9c2a4']];const p=palettes[index];ctx.fillStyle=p[0];ctx.fillRect(0,0,c.width,c.height);
 // Broad transparent, soft-edged mineral pigment fields.
 for(let j=0;j<45;j++){const x=random()*c.width,y=random()*c.height,r=220+random()*500;const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,p[1+Math.floor(random()*3)]+'42');g.addColorStop(1,p[1]+'00');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 // Individual organic brush marks: curved fibres, never polygon facets.
 ctx.lineCap='round';for(let j=0;j<6500;j++){const x=random()*c.width,y=random()*c.height;const length=15+random()*150;ctx.strokeStyle=p[1+Math.floor(random()*3)];ctx.globalAlpha=.007+random()*.026;ctx.lineWidth=2+random()*28;ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+length*.3,y+(random()-.5)*15,x+length*.7,y+(random()-.5)*22,x+length,y+(random()-.5)*30);ctx.stroke();}
 ctx.globalAlpha=.45;ctx.fillStyle=p[2];ctx.filter='blur(3px)';
 if(index===0){ctx.beginPath();ctx.moveTo(470,330);ctx.bezierCurveTo(430,680,485,1000,450,1540);ctx.lineTo(965,1520);ctx.bezierCurveTo(930,1110,990,620,950,310);ctx.closePath();ctx.fill();}
 if(index===1){ctx.beginPath();ctx.ellipse(780,1020,490,155,-.09,0,Math.PI*2);ctx.fill();}
 if(index===2){ctx.beginPath();ctx.ellipse(795,990,400,427,.01,0,Math.PI*2);ctx.fill();}
 if(index===3){ctx.beginPath();ctx.moveTo(300,770);ctx.bezierCurveTo(650,745,910,780,1240,755);ctx.lineTo(1230,1010);ctx.bezierCurveTo(900,1000,680,1030,310,1007);ctx.closePath();ctx.fill();}
 ctx.filter='none';ctx.globalAlpha=1;const pixels=ctx.getImageData(0,0,c.width,c.height);for(let y=0;y<c.height;y++)for(let x=0;x<c.width;x++){const i=(y*c.width+x)*4;const weave=((x%4===0?1:0)+(y%4===0?1:0))*1.1;const v=(random()-.5)*4+weave;pixels.data[i]+=v;pixels.data[i+1]+=v;pixels.data[i+2]+=v;}ctx.putImageData(pixels,0,0);
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=16;return texture;
}
