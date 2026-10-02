'use client';
import {useEffect,useState} from 'react';
import dynamic from 'next/dynamic';
const Gallery=dynamic(()=>import('../components/Gallery'),{ssr:false,loading:()=> <div className="scene-loading" aria-label="Gallery loading"/>});
export default function Page(){const [intro,setIntro]=useState(true);useEffect(()=>{const timer=window.setTimeout(()=>setIntro(false),4000);return ()=>window.clearTimeout(timer);},[]);return <><div inert={intro||undefined}><Gallery introActive={intro}/></div>{intro&&<section className="intro" role="dialog" aria-modal="true" aria-label="VÆST exhibition entrance"><div className="intro-wordmark"><img src="/branding/vaest-logo.png" alt="VÆST"/></div><button autoFocus onClick={()=>setIntro(false)}>Enter exhibition</button></section>}</>;}
