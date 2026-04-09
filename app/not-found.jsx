'use client'
import { useState, useEffect } from "react";

const C = {brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",ink:"#1A1A1A",inkMid:"#4A4A4A",sand:"#F5F2EC",rule:"#E0DBD3"};
const BOOKING = "https://outlook.office.com/book/InfoLevert@levery.it/";

export default function NotFound(){
  const [lang, setLang] = useState("en");
  useEffect(()=>{
    const saved = typeof localStorage !== "undefined" ? localStorage.getItem("levery_lang") : null;
    if(saved){ setLang(saved); }
    else {
      const b = typeof navigator !== "undefined" ? navigator.language : "en";
      if(b.startsWith("it")) setLang("it");
    }
  },[]);

  const t = {
    en:{
      code:"404",
      title:"Page not found.",
      sub:"The page you're looking for doesn't exist — but we might be able to help.",
      cta1:"Go back home",
      cta2:"Book a call",
      links:[
        {label:"Our Work", href:"/work"},
        {label:"Products", href:"/products"},
        {label:"Insights", href:"/insights"},
        {label:"Contact", href:"/contact"},
      ],
      linksTitle:"Or explore",
    },
    it:{
      code:"404",
      title:"Pagina non trovata.",
      sub:"La pagina che cerchi non esiste — ma forse possiamo aiutarti.",
      cta1:"Torna alla home",
      cta2:"Prenota una call",
      links:[
        {label:"I nostri progetti", href:"/work"},
        {label:"Prodotti", href:"/products"},
        {label:"Insights", href:"/insights"},
        {label:"Contatti", href:"/contact"},
      ],
      linksTitle:"Oppure esplora",
    },
  };
  const copy = t[lang]||t["en"];

  return(
    <div style={{minHeight:"100vh",background:C.brand,display:"flex",flexDirection:"column",fontFamily:"'Georgia','Times New Roman',serif"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}`}</style>

      {/* NAV */}
      <nav style={{padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between",borderBottom:"1px solid rgba(255,255,255,0.08)"}}>
        <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:9}}><img src="/logo-icon.svg" alt="" height="28" style={{display:"block"}}/><span style={{fontFamily:"'Gilmer',sans-serif",fontWeight:800,fontSize:19,color:"#fff",letterSpacing:"-0.01em",lineHeight:1,userSelect:"none"}}>Levery</span></a>
        <div style={{display:"flex",gap:8,alignItems:"center"}}>
          <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}}
            style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.5)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer"}}>
            {lang==="en"?"IT":"EN"}
          </button>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer"
            style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>
            {copy.cta2}
          </a>
        </div>
      </nav>

      {/* MAIN */}
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",padding:"64px 32px"}}>
        <div style={{maxWidth:600,textAlign:"center"}}>
          {/* Diagonal lines background */}
          <div style={{position:"relative",marginBottom:48}}>
            <svg style={{position:"absolute",top:-40,left:"50%",transform:"translateX(-50%)",width:200,height:120,opacity:0.08,pointerEvents:"none"}} viewBox="0 0 200 120">
              {Array.from({length:8},(_,i)=>(
                <line key={i} x1={i*30-20} y1="0" x2={i*30+60} y2="120" stroke="#7EC8E3" strokeWidth="1"/>
              ))}
            </svg>
            <p style={{fontSize:120,fontWeight:300,color:"rgba(255,255,255,0.08)",fontFamily:"monospace",lineHeight:1,margin:0,letterSpacing:"-0.04em"}}>
              {copy.code}
            </p>
          </div>

          <h1 style={{fontSize:"clamp(28px,3vw,44px)",fontWeight:400,color:C.white,margin:"0 0 16px",lineHeight:1.1}}>
            {copy.title}
          </h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.5)",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontStyle:"italic",margin:"0 0 40px",lineHeight:1.6}}>
            {copy.sub}
          </p>

          {/* CTAs */}
          <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap",marginBottom:48}}>
            <a href="/" style={{background:C.white,color:C.brand,padding:"13px 28px",borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none"}}>
              {copy.cta1} →
            </a>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer"
              style={{background:C.green,color:C.white,padding:"13px 28px",borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>
              {copy.cta2} →
            </a>
          </div>

          {/* Quick links */}
          <p style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 16px"}}>
            {copy.linksTitle}
          </p>
          <div style={{display:"flex",gap:8,justifyContent:"center",flexWrap:"wrap"}}>
            {copy.links.map((l,i)=>(
              <a key={i} href={l.href} style={{fontSize:13,color:"rgba(255,255,255,0.55)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",padding:"6px 14px",border:"1px solid rgba(255,255,255,0.15)",borderRadius:2}}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div style={{padding:"20px 32px",borderTop:"1px solid rgba(255,255,255,0.08)",textAlign:"center"}}>
        <span style={{fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit</span>
      </div>
    </div>
  );
}
