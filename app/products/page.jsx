'use client'
import { useState, useEffect } from "react";

const C = {
  brand:"#2D4059", green:"#1E6B45", greenMid:"#2A8A58",
  sand:"#F5F2EC", white:"#FFFFFF", ink:"#1A1A1A",
  inkMid:"#4A4A4A", inkLight:"#8A8A8A", rule:"#E0DBD3",
};

const MONO = "M35.76 62.16 l-25.5 0 l-8.16 -8.16 l0 -40.56 l17.16 17.16 l0 21.9 l6.9 0 l7.8 7.8 z M3.48 53.28 l14.4 0 l0 -22.14 l-14.4 -14.4 l0 36.54 z M32.46 60.78 l-6.9 -6.9 l-21.66 0 l6.9 6.9 l21.66 0 z";
const WORD  = "M9.04 33.92 l13.16 0 l0 6.08 l-19.8 0 l0 -28 l6.64 0 l0 21.92 z M33.394 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M28.434 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M59.828 19.6 l7 0 l-8.24 20.4 l-7.2 0 l-8.24 -20.4 l7.04 0 l4.8 13.12 z M77.502 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M72.542 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M96.056 22.36 c1.2 -2.2 3.4 -3.44 6.4 -3.04 l0 6 c-4.32 -0.72 -6.4 1.12 -6.4 6.16 l0 8.52 l-6.4 0 l0 -20.4 l6.4 0 l0 2.76 z M118.85 19.6 l6.84 0 l-12.12 28.8 l-6.52 0 l3.64 -8.88 l0.28 -0.04 l-0.28 0.04 l-9.16 -19.92 l7 0 l5.32 12.44 z";

function LeveryLogo({ color="#fff", height=30 }) {
  return (
    <svg height={height} viewBox="0 0 340 48" fill="none" style={{display:"block"}}>
      <g transform="translate(0,1) scale(0.245)">
        <g transform="matrix(3.828,0,0,3.828,14,-51.45)" fill={color}><path d={MONO}/></g>
      </g>
      <g transform="translate(52,6) scale(0.245)">
        <g transform="matrix(1.393,0,0,1.393,-3.34,190.28)" fill={color}><path d={WORD}/></g>
      </g>
    </svg>
  );
}

function track(e,p={}){try{if(typeof window==="undefined")return;if(window.gtag)window.gtag("event",e,p);if(window.posthog)window.posthog.capture(e,p);}catch(_){}}

function PatternBg({accent}){
  return(
    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}}
      viewBox="0 0 400 600" preserveAspectRatio="xMidYMid slice">
      {Array.from({length:7},(_,i)=>(
        <line key={i} x1={i*70-30} y1="0" x2={i*70+120} y2="600" stroke={accent} strokeWidth="1"/>
      ))}
      {[[60,100],[180,200],[320,140],[80,380],[260,420],[350,300]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2" fill={accent}/>
      ))}
    </svg>
  );
}

const copy = {
  en:{
    langSwitch:"IT", bookCTA:"Book a call",
    pageLabel:"Products",
    pageTitle:"Digital tools for the construction industry.",
    pageSub:"Two tools that solve specific problems for manufacturers, building owners, and facility teams.",
    selectorQ:"What are you looking for?",
    selectorA:{label:"Building O&M management", anchor:"#aryze"},
    selectorB:{label:"ESPR / DPP compliance", anchor:"#deeppy"},
    aryze:{
      id:"aryze", label:"XR Platform", name:"ARyze",
      sector:"Building O&M · Facility Management", status:"Available",
      tagline:"Your maintenance team, always in the right place with the right information.",
      description:"Maintenance technicians spend too much time searching for documentation, waiting for remote support, and filling in reports manually. ARyze puts manuals, procedures, live building data and remote expert assistance directly in their field of view — via AR on smartphone, tablet or smart glasses.",
      bullets:[
        {head:"Find it instantly", body:"Documentation, procedures and BIM data overlaid on the actual equipment — no more searching through folders."},
        {head:"Fix it faster", body:"Step-by-step AR guidance reduces errors and downtime, even for less experienced technicians."},
        {head:"Report automatically", body:"Every intervention is logged and timestamped. No manual input, no missing records."},
      ],
      badge:"Joint venture · Levery + Exvirience",
      eu:"Co-funded by the EU Single Market Programme",
      cta:"Go to ARyze →", ctaUrl:"https://www.aryze.it/en/",
      accent:"#C3A8E6", bg:"#1C2230",
    },
    deeppy:{
      id:"deeppy", label:"Compliance Platform", name:"DeePPy",
      sector:"Construction Products · ESPR Compliance", status:"Early access",
      tagline:"ESPR is coming. DeePPy gets your products ready.",
      description:"The EU's ESPR regulation will require Digital Product Passports for construction materials from 2027. DeePPy automates data collection, structuring and DPP generation — so your compliance team is not building spreadsheets from scratch.",
      bullets:[
        {head:"Structured from day one", body:"Bill of materials, supplier data and environmental declarations — collected and organised automatically."},
        {head:"Regulation-ready output", body:"DPPs generated in machine-readable format, aligned with current ESPR and EPD standards."},
        {head:"Supply chain transparency", body:"Track data across your supplier network without chasing emails."},
      ],
      badge:"Built by Levery for ESPR compliance",
      eu:"Validated across Horizon Europe construction projects",
      cta:"Go to DeePPy →", ctaUrl:"https://deeppy.eu/",
      accent:"#A8E6CF", bg:"#152C1E",
    },
    ctaTitle:"Need both, or neither?",
    ctaSub:"Tell us what you are working on — we will point you to the right tool or scope a solution from scratch.",
    footerTagline:"Specialist R&D, built around your team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · All rights reserved",
    benefitBadge:"Società Benefit · Our impact →",
  },
  it:{
    langSwitch:"EN", bookCTA:"Prenota una call",
    pageLabel:"Prodotti",
    pageTitle:"Strumenti digitali per il settore delle costruzioni.",
    pageSub:"Due strumenti che risolvono problemi specifici per produttori, gestori di edifici e team di manutenzione.",
    selectorQ:"Cosa stai cercando?",
    selectorA:{label:"Gestire O&M dell'edificio", anchor:"#aryze"},
    selectorB:{label:"Compliance ESPR / DPP", anchor:"#deeppy"},
    aryze:{
      id:"aryze", label:"Piattaforma XR", name:"ARyze",
      sector:"Building O&M · Facility Management", status:"Disponibile",
      tagline:"Il tuo team di manutenzione, sempre nel posto giusto con le informazioni giuste.",
      description:"I tecnici perdono troppo tempo a cercare documentazione, aspettare supporto da remoto e compilare report a mano. ARyze porta manuali, procedure, dati dell'edificio in tempo reale e assistenza esperta direttamente nel campo visivo — via AR su smartphone, tablet o occhiali smart.",
      bullets:[
        {head:"Trovalo subito", body:"Documentazione, procedure e dati BIM sovrapposti all'impianto reale — niente più ricerche tra cartelle."},
        {head:"Intervieni più veloce", body:"La guida AR passo passo riduce errori e tempi di fermo, anche per tecnici meno esperti."},
        {head:"Report automatici", body:"Ogni intervento viene registrato e marcato temporalmente. Zero inserimento manuale."},
      ],
      badge:"Joint venture · Levery + Exvirience",
      eu:"Co-finanziato dal Programma Mercato Unico UE",
      cta:"Vai su ARyze →", ctaUrl:"https://www.aryze.it/",
      accent:"#C3A8E6", bg:"#1C2230",
    },
    deeppy:{
      id:"deeppy", label:"Piattaforma Compliance", name:"DeePPy",
      sector:"Prodotti da costruzione · Compliance ESPR", status:"Early access",
      tagline:"L'ESPR arriva. DeePPy prepara i tuoi prodotti.",
      description:"Il regolamento ESPR richiederà il Passaporto Digitale di Prodotto per i materiali da costruzione dal 2027. DeePPy automatizza raccolta dati, strutturazione e generazione del DPP — così il tuo team di compliance non costruisce fogli Excel da zero.",
      bullets:[
        {head:"Strutturato dal primo giorno", body:"Distinta base, dati fornitori e dichiarazioni ambientali — raccolti e organizzati automaticamente."},
        {head:"Output pronto per la normativa", body:"DPP generati in formato machine-readable, allineati agli standard ESPR ed EPD vigenti."},
        {head:"Trasparenza supply chain", body:"Traccia i dati lungo la rete fornitori senza inseguire email."},
      ],
      badge:"Sviluppato da Levery per la compliance ESPR",
      eu:"Validato in progetti Horizon Europe nel settore costruzioni",
      cta:"Vai su DeePPy →", ctaUrl:"https://deeppy.eu/",
      accent:"#A8E6CF", bg:"#152C1E",
    },
    ctaTitle:"Ti servono entrambi, o nessuno dei due?",
    ctaSub:"Raccontaci su cosa stai lavorando — ti indichiamo lo strumento giusto o definiamo una soluzione da zero.",
    footerTagline:"R&D specializzato, costruito intorno al tuo team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · Tutti i diritti riservati",
    benefitBadge:"Società Benefit · Il nostro impatto →",
  },
};

function ProductCard({p, dimmed=false}){
  const [hov,setHov]=useState(false);
  return(
    <div id={p.id} style={{background:p.bg,position:"relative",overflow:"hidden",
      display:"flex",flexDirection:"column",minHeight:600,
      opacity: dimmed ? 0.35 : 1,
      transition:"opacity 0.25s ease",
    }}>
      <PatternBg accent={p.accent}/>
      <div style={{position:"absolute",top:0,right:0,width:40,height:40,
        borderBottom:`1.5px solid ${p.accent}`,borderLeft:`1.5px solid ${p.accent}`,opacity:0.3}}/>
      <div style={{position:"absolute",right:16,bottom:-12,fontSize:88,fontFamily:"monospace",
        fontWeight:700,color:"rgba(255,255,255,0.03)",lineHeight:1,userSelect:"none",
        letterSpacing:"-0.04em"}}>{p.name.toUpperCase()}</div>

      <div style={{padding:"48px 40px 52px",display:"flex",flexDirection:"column",
        flexGrow:1,position:"relative",zIndex:1}}>

        <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:24}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.16em",
            color:p.accent,background:"rgba(255,255,255,0.07)",
            padding:"3px 9px",borderRadius:2,textTransform:"uppercase"}}>{p.label}</span>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.12em",
            color:"rgba(255,255,255,0.28)",textTransform:"uppercase"}}>{p.status}</span>
        </div>

        <h2 style={{fontSize:40,fontWeight:400,color:C.white,margin:"0 0 4px",
          fontFamily:"'Georgia',serif",lineHeight:1.05}}>{p.name}</h2>
        <p style={{fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.25)",
          letterSpacing:"0.1em",margin:"0 0 18px",textTransform:"uppercase"}}>{p.sector}</p>
        <p style={{fontSize:15,color:p.accent,margin:"0 0 18px",
          fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.5}}>{p.tagline}</p>
        <p style={{fontSize:14,color:"rgba(255,255,255,0.55)",lineHeight:1.8,
          margin:"0 0 32px",fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{p.description}</p>

        <div style={{display:"flex",flexDirection:"column",gap:16,marginBottom:36,
          borderTop:`1px solid rgba(255,255,255,0.07)`,paddingTop:24}}>
          {p.bullets.map((b,i)=>(
            <div key={i} style={{display:"flex",gap:10}}>
              <span style={{color:p.accent,fontSize:9,marginTop:4,flexShrink:0}}>◆</span>
              <p style={{fontSize:13,color:"rgba(255,255,255,0.68)",lineHeight:1.7,
                fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>
                <strong style={{color:C.white,fontWeight:500}}>{b.head}. </strong>{b.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{flexGrow:1}}/>

        <div style={{borderTop:`1px solid rgba(255,255,255,0.07)`,paddingTop:24}}>
          <a href={p.ctaUrl} target="_blank" rel="noopener noreferrer"
            style={{display:"inline-block",padding:"10px 24px",borderRadius:2,
              background:hov?p.accent:"transparent",
              color:hov?p.bg:p.accent,
              border:`1.5px solid ${p.accent}`,
              fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",
              fontWeight:500,textDecoration:"none",transition:"all 0.18s",
              letterSpacing:"0.03em",marginBottom:14}}
            onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
            onClick={()=>track("product_cta",{product:p.name})}
          >{p.cta}</a>
          <p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.2)",
            letterSpacing:"0.1em",margin:0,textTransform:"uppercase",lineHeight:1.8}}>
            {p.badge}<br/>
            <span style={{color:"rgba(255,255,255,0.13)"}}>{p.eu}</span>
          </p>
        </div>
      </div>
    </div>
  );
}



export default function LeveryProducts(){
  const [lang,setLang]=useState("en");
  const [scrolled,setScrolled]=useState(false);
  const [active,setActive]=useState(null); // null | "aryze" | "deeppy"
  const t=copy[lang]||copy["en"];

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
  },[]);

  useEffect(()=>{
    // Auto-detect language from browser, with localStorage preference
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const browser=typeof navigator!=="undefined"?navigator.language:"en";
    if(browser.startsWith("it")){setLang("it");localStorage.setItem("levery_lang","it");}
  },[]);

  const inner={maxWidth:1200,margin:"0 auto",padding:"0 32px"};
  const navLinks=[["Work","/work"],["Products","/products"],["Insights","/insights"],
    ["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,
      background:C.white,overflowX:"hidden"}}>
      <style>{`
        *{box-sizing:border-box}body{margin:0}
        @media(max-width:900px){
          .l-nav-links{display:none!important}
          .l-prod-grid{grid-template-columns:1fr!important}
        }
        .l-prod-cta:hover{opacity:0.85}
      `}</style>
      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","Lavori","/work"],["Products","Prodotti","/products"],["Insights","Insights","/insights"],["Impact","Impatto","/impact"],["Team","Team","/team"],["Contact","Contatti","/contact"]].map(([en,it,path])=>(
              <li key={path}><a href={path} style={{color:path==="/products"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:path==="/products"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}
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

      {/* PAGE HEADER */}
      <div style={{background:`linear-gradient(145deg,#1C2D40 0%,${C.brand} 100%)`,
        height:"450px",overflow:"hidden",position:"relative",paddingTop:"120px"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",
          opacity:0.04,pointerEvents:"none"}}
          viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:12},(_,i)=>(
            <line key={i} x1={i*110-40} y1="0" x2={i*110+180} y2="280"
              stroke="#7EC8E3" strokeWidth="1"/>
          ))}
        </svg>
        <div style={{...inner,position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>02</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{t.pageLabel}</span>
          </div>
          <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:"0 0 14px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{t.pageTitle}</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.48)",margin:"0 0 40px",
            fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:500,
            lineHeight:1.7,fontStyle:"italic"}}>{t.pageSub}</p>
          {/* Filter tags */}
          <div style={{display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"}}>
            <span style={{fontSize:12,color:"rgba(255,255,255,0.32)",
              fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{t.selectorQ}</span>
            {[
              {id:"aryze", ...t.selectorA},
              {id:"deeppy", ...t.selectorB},
            ].map((opt)=>{
              const isActive = active===opt.id;
              return(
                <button key={opt.id}
                  onClick={()=>setActive(active===opt.id ? null : opt.id)}
                  style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,padding:"9px 22px",borderRadius:2,cursor:"pointer",transition:"all 0.2s",border:"1px solid",borderColor:isActive?"#fff":"rgba(255,255,255,0.35)",background:isActive?"#fff":"transparent",color:isActive?"#1C2D40":"rgba(255,255,255,0.75)"}}
                >{opt.label}</button>
              );
            })}
            {active && (
              <button onClick={()=>setActive(null)}
                style={{fontSize:11,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",
                  background:"none",border:"none",cursor:"pointer",
                  letterSpacing:"0.08em",padding:0}}>
                ✕ clear
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 50/50 CARDS — same pattern as homepage service cards */}
      <div style={{ background:C.white, padding:"72px 0 88px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:2, background:C.rule }}
            className="l-prod-grid">
            <ProductCard p={t.aryze} dimmed={active && active!=="aryze"}/>
            <ProductCard p={t.deeppy} dimmed={active && active!=="deeppy"}/>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{background:C.green,padding:"72px 0"}}>
        <div style={{...inner,textAlign:"center"}}>
          <h2 style={{fontSize:30,fontWeight:400,color:C.white,margin:"0 0 10px",
            fontFamily:"'Georgia',serif"}}>{t.ctaTitle}</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.6)",
            margin:"0 auto 32px",maxWidth:460,
            fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.7}}>{t.ctaSub}</p>
          <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:C.white,color:C.green,
            padding:"12px 32px",borderRadius:2,fontSize:14,
            fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,
            textDecoration:"none",display:"inline-block"}}
            onClick={()=>track("cta_click",{source:"products_page"})}
          >{t.bookCTA}</a>
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
            <input type="email" id="nl-products" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-products");
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
            <img src="/logo-levery-vertical.svg" alt="Levery" height="72" style={{display:"block"}}/>
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
