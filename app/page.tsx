'use client';
import dynamic from 'next/dynamic';
const Gallery = dynamic(()=>import('../components/Gallery'), {ssr:false,loading:()=> <div className="loading" aria-label="VÆST"><div className="brand"><img src="/branding/vaest-logo.png" alt="VÆST"/></div></div>});
export default function Page(){return <Gallery/>;}
