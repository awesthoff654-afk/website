 'use client';
import {useEffect,useState} from 'react';
import dynamic from 'next/dynamic';
const Gallery=dynamic(()=>import('../components/Gallery'),{ssr:false,loading:()=> <div className="scene-loading"/>});
export default function Page(){
 const [entered,setEntered]=useState(false),[ready,setReady]=useState(false),[requested,setRequested]=useState(false);
 useEffect(()=>{const query=new URLSearchParams(location.search);if(query.has('still')||query.has('enter'))setRequested(true);const timer=window.setTimeout(()=>setRequested(true),3000);return ()=>window.clearTimeout(timer);},[]);
 useEffect(()=>{if(ready&&requested)setEntered(true);},[ready,requested]);
 const requestEntry=()=>setRequested(true);
 return <><div inert={!entered||undefined}><Gallery introActive={!entered} onReady={()=>setReady(true)}/></div>{!entered&&<section className="intro" role="dialog" aria-modal="true" aria-label="VÆST exhibition entrance"><a href="/?enter=1" className="intro-enter" aria-label="Enter exhibition" aria-busy={requested&&!ready} onPointerDown={requestEntry} onClick={event=>{event.preventDefault();requestEntry();}}><span className="intro-wordmark"><img src="/branding/vaest-logo.svg" alt="VÆST"/></span></a></section>}</>;
}
