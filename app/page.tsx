'use client';
import dynamic from 'next/dynamic';
const Gallery = dynamic(()=>import('../components/Gallery'), {ssr:false,loading:()=> <div className="loading">VÆST <span>Preparing the exhibition</span></div>});
export default function Page(){return <Gallery/>;}
