'use client'
import { useState, useEffect } from "react";

const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",sand:"#F5F2EC",
  ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";

const COPY={
  en:{
    pageLabel:"Impact",
    pageTitle:"Our Impact",
    pageSub:"As a Società Benefit, our mission goes beyond profit. We create lasting positive impact through sustainability-driven innovation in the construction sector.",
    langSwitch:"IT", bookCTA:"Book a call",
    commitTitle:"Aligned with the UN Sustainable Development Goals",
    commitBody:"Every project we undertake aims to contribute to global sustainability frameworks. As an innovative startup registered as a Società Benefit under Italian law (D.L. 179/2012), we are legally committed to reporting our social and environmental impact annually.",
    metricsTitle:"Our commitment in numbers",
    metrics:[
      {value:"€15M+",label:"EU research projects contributed to"},
      {value:"€700K+",label:"Direct R&D budget managed"},
      {value:"75+",label:"Peer-reviewed publications"},
      {value:"10+",label:"Horizon Europe projects"},
    ],
    sdgs:["SDG 9 — Industry, Innovation and Infrastructure","SDG 11 — Sustainable Cities and Communities","SDG 12 — Responsible Consumption and Production","SDG 13 — Climate Action"],
    reportTitle:"Annual Benefit Report",
    reportSub:"As a Società Benefit, we publish an annual report documenting our social and environmental impact.",
    report2025:"2025 Annual Report",
    report2025note:"Publishing Q2 2026",
    report2024:"2024 Annual Report",
    report2024note:"Download PDF",
    reportSub:"As a Società Benefit, we publish an annual report documenting our social and environmental impact.",
    reportTitle:"Annual Benefit Report",
    ctaTitle:"Work with us on your sustainability goals",
    ctaSub:"LCA, Digital Product Passport, decarbonisation roadmap — we can help.",
    ctaBtn:"Book a call →",
  },
  it:{
    pageLabel:"Impatto",
    pageTitle:"Il nostro impatto",
    pageSub:"Come Società Benefit, la nostra missione va oltre il profitto. Creiamo un impatto positivo duraturo attraverso l'innovazione orientata alla sostenibilità nel settore delle costruzioni.",
    langSwitch:"EN", bookCTA:"Prenota una call",
    commitTitle:"Allineati agli Obiettivi di Sviluppo Sostenibile dell'ONU",
    commitBody:"Ogni progetto che intraprendiamo mira a contribuire ai framework globali di sostenibilità. Come startup innovativa registrata come Società Benefit ai sensi della legge italiana (D.L. 179/2012), siamo legalmente impegnati a rendicontare annualmente il nostro impatto sociale e ambientale.",
    metricsTitle:"Il nostro impegno in numeri",
    metrics:[
      {value:"€15M+",label:"Progetti di ricerca EU a cui abbiamo contribuito"},
      {value:"€700K+",label:"Budget R&D gestito direttamente"},
      {value:"75+",label:"Pubblicazioni peer-reviewed"},
      {value:"10+",label:"Progetti Horizon Europe"},
    ],
    sdgs:["SDG 9 — Industria, Innovazione e Infrastrutture","SDG 11 — Città e Comunità Sostenibili","SDG 12 — Consumo e Produzione Responsabili","SDG 13 — Lotta contro il Cambiamento Climatico"],
    reportTitle:"Relazione Annuale d'Impatto",
    reportSub:"Come Società Benefit, pubblichiamo una relazione annuale che documenta il nostro impatto sociale e ambientale.",
    report2025:"Relazione 2025",
    report2025note:"Pubblicazione prevista Q2 2026",
    report2024:"Relazione 2024",
    report2024note:"Scarica PDF",
    reportSub:"Come Società Benefit, pubblichiamo una relazione annuale che documenta il nostro impatto sociale e ambientale.",
    reportTitle:"Relazione Annuale d'Impatto",
    ctaTitle:"Lavora con noi sui tuoi obiettivi di sostenibilità",
    ctaSub:"LCA, Passaporto Digitale di Prodotto, roadmap di decarbonizzazione — possiamo aiutarti.",
    ctaBtn:"Prenota una call →",
  },
};

const inner={maxWidth:1200,margin:"0 auto",padding:"0 32px"};
const NAV_LINKS=[["Our Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];


function Nav({lang, setLang, currentPath}){
  const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
  const links=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];
  function toggleLang(){
    const nl=lang==="en"?"it":"en";
    setLang(nl);
    if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl);
  }
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
        <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
          {links.map(([label,href])=>(
            <li key={href}><a href={href} style={{color:currentPath===href?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:currentPath===href?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>
          ))}
        </ul>
        <div style={{display:"flex",alignItems:"center",gap:8}}>
          <button onClick={toggleLang} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer"}}>{lang==="en"?"IT":"EN"}</button>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </div>
    </nav>
  );
}


export default function ImpactPage(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const b=typeof navigator!=="undefined"?navigator.language:"en";
    if(b.startsWith("it")){setLang("it");if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang","it");}
  },[]);
  const t=COPY[lang]||COPY["en"];

  function toggleLang(){
    const nl=lang==="en"?"it":"en";
    setLang(nl);
    if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl);
  }

  return(
    <div style={{fontFamily:"'Georgia',serif",color:C.ink,background:C.white,minHeight:"100vh"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-grid{grid-template-columns:1fr!important}}`}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","Lavori","/work"],["Products","Prodotti","/products"],["Insights","Insights","/insights"],["Impact","Impatto","/impact"],["Team","Team","/team"],["Contact","Contatti","/contact"]].map(([en,it,path])=>(
              <li key={path}><a href={path} style={{color:path==="/impact"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:path==="/impact"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}
              >{lang==="it"?it:en}</a></li>
            ))}
          </ul>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer"}}
            >{lang==="en"?"IT":"EN"}</button>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}
            >{lang==="it"?"Prenota una call":"Book a call"}</a>
          </div>
        </div>
      </nav>
      

      {/* HERO */}
      <div style={{background:`linear-gradient(145deg,#1C2D40 0%,${C.brand} 100%)`,padding:"clamp(140px,15vh,200px) 0 80px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{...inner,position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>04</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{t.pageLabel}</span>
          </div>
          <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:"0 0 16px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{t.pageTitle}</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",margin:0,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontStyle:"italic",maxWidth:600,lineHeight:1.7}}>{t.pageSub}</p>
        </div>
      </div>

      {/* SDGs + COMMITMENT */}
      <div style={{background:C.white,padding:"80px 0",borderBottom:`1px solid ${C.rule}`}}>
        <div style={{...inner}}>
          <h2 style={{fontSize:13,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 16px"}}>{t.commitTitle}</h2>
          <p style={{fontSize:16,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:720,margin:"0 0 40px"}}>{t.commitBody}</p>
          <div style={{display:"flex",flexWrap:"wrap",gap:12}}>
            {(t.sdgs||[]).map((sdg,i)=>(
              <span key={i} style={{fontSize:12,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.green,border:`1px solid ${C.green}`,borderRadius:2,padding:"6px 14px"}}>{sdg}</span>
            ))}
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div style={{background:C.sand,padding:"80px 0",borderBottom:`1px solid ${C.rule}`}}>
        <div style={{...inner}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 40px"}}>{t.metricsTitle}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:32}} className="l-grid">
            {(t.metrics||[]).map((m,i)=>(
              <div key={i}>
                <p style={{fontSize:40,fontWeight:400,color:C.brand,fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1}}>{m.value}</p>
                <p style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.5,margin:0}}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

            {/* BENEFIT REPORT */}
      <div style={{background:C.white,padding:"80px 0",borderBottom:`1px solid ${C.rule}`}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <h2 style={{fontSize:13,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 16px"}}>{t.reportTitle||"Annual Benefit Report"}</h2>
          <p style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:600,margin:"0 0 32px"}}>{t.reportSub}</p>
          <div style={{display:"flex",gap:16,flexWrap:"wrap"}}>
            <a href="/docs/levery-benefit-report-2024.pdf" target="_blank" rel="noopener noreferrer"
              style={{padding:"20px 24px",border:`1px solid ${C.green}`,borderRadius:2,minWidth:220,textDecoration:"none",display:"block",cursor:"pointer"}}>
              <p style={{fontSize:14,fontWeight:500,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 6px"}}>{t.report2024||"2024 Annual Report"}</p>
              <p style={{fontSize:12,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{t.report2024note||"Download PDF"} ↓</p>
            </a>
            <div style={{padding:"20px 24px",border:`1px solid ${C.rule}`,borderRadius:2,minWidth:220,opacity:0.5}}>
              <p style={{fontSize:14,fontWeight:500,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 6px"}}>{t.report2025||"2025 Annual Report"}</p>
              <p style={{fontSize:12,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{t.report2025note||"Publishing Q2 2026"}</p>
            </div>
          </div>
          <p style={{fontSize:12,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",marginTop:16}}>
            {lang==="it"?"Il PDF del 2024 sarà disponibile al link dopo il caricamento su GitHub (public/docs/).":"The 2024 PDF will be available after uploading to GitHub (public/docs/)."}
          </p>
        </div>
      </div>

      {/* CTA */}{/* CTA */}
      <div style={{background:C.green,padding:"64px 0"}}>
        <div style={{...inner,textAlign:"center"}}>
          <h2 style={{fontSize:28,fontWeight:400,color:C.white,fontFamily:"'Georgia',serif",margin:"0 0 12px"}}>{t.ctaTitle}</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.75)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{t.ctaSub}</p>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:C.white,color:C.green,padding:"13px 32px",borderRadius:2,fontSize:15,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none"}}>{t.ctaBtn}</a>
        </div>
      </div>

      {/* FOOTER */}
            {/* NEWSLETTER */}
      <div style={{background:"#111820",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4,whiteSpace:"pre-line"}}>{lang==="it"?"Una email al mese.\nR&D e innovazione per il settore delle costruzioni.":"One email per month.\nR&D and innovation news for the construction industry."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-impact" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-impact");
                if(!el||!el.value)return;
                try{
                  await fetch("https://formsubmit.co/ajax/info@levery.it",{
                    method:"POST",
                    headers:{"Content-Type":"application/json","Accept":"application/json"},
                    body:JSON.stringify({email:el.value,_subject:"Newsletter subscription",type:"newsletter"})
                  });
                  el.value="";
                  el.placeholder=lang==="it"?"✓ Iscritto":"✓ Subscribed";
                }catch(e){
                  el.placeholder=lang==="it"?"Riprova":"Try again";
                }
              }}>
              {lang==="it"?"Iscriviti":"Subscribe"}
            </button>
          </div>
        </div>
      </div>

      <footer style={{background:"#111820",padding:"48px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px 32px",display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div>
            <img src="/logo-white.svg" alt="Levery" height="36" style={{display:"block"}}/>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>{lang==="it"?"R&D specializzato, costruito intorno al tuo team.":"Specialist R&D, built around your team."}</p>
            <a href="/impact" style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:16,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",borderRadius:2,padding:"4px 10px"}}>
              <span style={{fontSize:9,color:"#A8E6CF",fontFamily:"monospace"}}>⬡</span>
              <span style={{fontSize:10,color:"rgba(255,255,255,0.35)",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"0.06em"}}>{lang==="it"?"Società Benefit · Il nostro impatto →":"Società Benefit · Our impact →"}</span>
            </a>
          </div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Legal</p>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>Via Pisino 66, 47814 Bellaria Igea Marina (RN)</span>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>VAT 04730050400</span>
            <a href="/privacy" style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Privacy & Cookie Policy</a>
          </div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Contact</p>
            <a href="mailto:info@levery.it" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>info@levery.it</a>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 32px"}}>
          <span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · {lang==="it"?"Tutti i diritti riservati":"All rights reserved"}</span>
        </div>
      </footer>
    </div>
  );
}
