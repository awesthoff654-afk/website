'use client';
import {Component,type ReactNode} from 'react';
import {artworks} from '../lib/route.mjs';
export default class GalleryBoundary extends Component<{children:ReactNode;onFailure?:()=>void},{failed:boolean}>{
 state={failed:false};
 static getDerivedStateFromError(){return {failed:true};}
 componentDidCatch(){this.props.onFailure?.();}
 render(){if(!this.state.failed)return this.props.children;return <section className="scene-fallback" role="alert"><h1>The gallery could not load.</h1><p>You can still open the artworks below, or reload to try the gallery again.</p><button onClick={()=>location.reload()}>Reload gallery</button><div className="fallback-works">{artworks.filter(a=>a.url).map(a=><a key={a.title} href={a.url}><img src={a.url} alt={a.title}/><span>{a.title} · {a.medium}</span></a>)}</div><a href="/bio">Artist biography</a></section>;}
}
