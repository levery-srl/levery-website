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

// ─── PHOTO PLACEHOLDER ───────────────────────────────────────────────────────
// Geometric avatar using person's initials + domain color pattern
function PhotoPlaceholder({ initials, bg, accent, size=280 }) {
  const seed = (n,s) => Math.abs(Math.sin(n*9301+s*49297+233)) % 1;
  const lines = Array.from({length:6},(_,i)=>({
    x1: seed(i,1)*size, y1: seed(i,2)*size,
    x2: seed(i,3)*size, y2: seed(i,4)*size,
  }));
  const dots = Array.from({length:8},(_,i)=>({
    cx: seed(i+10,1)*size*0.8 + size*0.1,
    cy: seed(i+10,2)*size*0.8 + size*0.1,
    r:  seed(i+10,3)*3+1.5,
  }));
  return (
    <div style={{width:size,height:size,background:bg,position:"relative",
      overflow:"hidden",borderRadius:2,flexShrink:0}}>
      <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.12}}
        viewBox={`0 0 ${size} ${size}`}>
        {lines.map((l,i)=>(
          <line key={i} x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2}
            stroke={accent} strokeWidth="1"/>
        ))}
        {dots.map((d,i)=>(
          <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill={accent}/>
        ))}
        {/* Corner accent */}
        <rect x={size-32} y={0} width={32} height={2} fill={accent} opacity={0.4}/>
        <rect x={size-2} y={0} width={2} height={32} fill={accent} opacity={0.4}/>
      </svg>
      {/* Initials */}
      <div style={{position:"absolute",inset:0,display:"flex",
        alignItems:"center",justifyContent:"center"}}>
        <span style={{fontSize:56,fontFamily:"'Georgia',serif",fontWeight:400,
          color:"rgba(255,255,255,0.18)",letterSpacing:"0.05em",lineHeight:1}}>
          {initials}
        </span>
      </div>
      {/* Bottom gradient */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,height:80,
        background:`linear-gradient(to top, ${bg}, transparent)`}}/>
    </div>
  );
}

// ─── COPY ─────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    langSwitch:"IT", bookCTA:"Book a call",
    pageLabel:"Team",
    pageTitle:"The people behind Levery.",
    pageSub:"A focused team of senior specialists — PhD-level expertise across R&D, sustainability and EU funding.",
    ctaTitle:"Work with us.",
    ctaSub:"If you have a project in mind or want to explore a collaboration, we are easy to reach.",
    footerTagline:"Specialist R&D, built around your team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · All rights reserved",
    benefitBadge:"Società Benefit · Our impact →",
    members:[
      {
        initials:"AP",
        bg:"#1C2D40", accent:"#7EC8E3",
        photo:"/team/alessandro.jpg",
        role:"Co-founder & Director",
        name:"Alessandro Pracucci",
        credentials:"Arch, PhD",
        bio:"Over a decade leading innovation in the construction sector — from building envelope systems and bio-based materials to digital transformation and EU-funded research. He holds a PhD, the National Scientific Qualification as Associate Professor, and teaches Building Technology at the University of Bologna. Author of 50+ peer-reviewed publications (h-index 10). Track record across 15+ European research projects with €65M+ in secured funding and direct management of €3.5M+ in project budgets. At Levery he leads strategy, client relationships, and product development.",
        tags:["Building Envelope","EU Funding","Digital Products","Sustainability Strategy"],
        linkedin:"https://it.linkedin.com/in/alessandropracucci",
        orcid:"https://orcid.org/0000-0003-0877-1283",
      },
      {
        initials:"MG",
        bg:"#1A3D2B", accent:"#A8E6CF",
        photo:"/team/matteo.jpg",
        role:"Co-founder",
        name:"Matteo Giovanardi",
        credentials:"Arch, PhD",
        bio:"Architect and researcher with a PhD from Politecnico di Torino. Specialised in environmental sustainability, circular economy, and lifecycle assessment applied to construction materials and building systems. Co-founder and strategic partner at Levery, bridging academic rigour with market-ready solutions for industrial partners.",
        tags:["LCA","Circular Economy","Bio-based Materials","Applied Research"],
        linkedin:"https://it.linkedin.com/in/matteo-giovanardi-b36ba1117",
        orcid:"https://orcid.org/0000-0001-8037-3381",
      },
      {
        initials:"FP",
        bg:"#2A1E3D", accent:"#C3A8E6",
        photo:"/team/francesca.jpg",
        role:"Researcher",
        name:"Francesca Pollet",
        credentials:"PhD Student · University of Ferrara",
        bio:"PhD student in Architecture at the University of Ferrara. Specialised in bio-based materials, Digital Product Passport, and environmental assessment methodologies. At Levery she supports active research projects, scientific output, and EU project deliverables.",
        tags:["Bio-based Materials","Digital Product Passport","Environmental Assessment"],
        linkedin:"https://it.linkedin.com/in/francesca-pollet-42a345355",
        orcid:"https://orcid.org/0009-0002-1086-1296",
      },
    ],
  },
  it: {
    langSwitch:"EN", bookCTA:"Prenota una call",
    pageLabel:"Team",
    pageTitle:"Le persone dietro Levery.",
    pageSub:"Un team di specialisti senior — competenze a livello di dottorato in R&D, sostenibilità e finanziamenti europei.",
    ctaTitle:"Lavora con noi.",
    ctaSub:"Se hai un progetto in mente o vuoi esplorare una collaborazione, siamo facili da raggiungere.",
    footerTagline:"R&D specializzato, costruito intorno al tuo team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · Tutti i diritti riservati",
    benefitBadge:"Società Benefit · Il nostro impatto →",
    members:[
      {
        initials:"AP",
        bg:"#1C2D40", accent:"#7EC8E3",
        photo:"/team/alessandro.jpg",
        role:"Co-fondatore & Direttore",
        name:"Alessandro Pracucci",
        credentials:"Arch, PhD",
        bio:"Oltre un decennio alla guida dell'innovazione nel settore delle costruzioni — dai sistemi di involucro edilizio e materiali bio-based alla trasformazione digitale e alla ricerca finanziata dall'UE. È PhD, abilitato come Professore Associato e insegna Tecnologia dell'Architettura all'Università di Bologna. Autore di 50+ pubblicazioni peer-reviewed (h-index 10). Track record su 15+ progetti europei con €65M+ di finanziamenti ottenuti e gestione diretta di €3.5M+. In Levery guida strategia, relazioni con i clienti e sviluppo dei prodotti.",
        tags:["Involucro Edilizio","Finanziamenti EU","Prodotti Digitali","Strategia Sostenibilità"],
        linkedin:"https://it.linkedin.com/in/alessandropracucci",
        orcid:"https://orcid.org/0000-0003-0877-1283",
      },
      {
        initials:"MG",
        bg:"#1A3D2B", accent:"#A8E6CF",
        photo:"/team/matteo.jpg",
        role:"Co-fondatore",
        name:"Matteo Giovanardi",
        credentials:"Arch, PhD",
        bio:"Architetto e ricercatore con PhD dal Politecnico di Torino. Specializzato in sostenibilità ambientale, economia circolare e analisi del ciclo di vita applicata a materiali da costruzione e sistemi edilizi. Co-fondatore e partner strategico di Levery, collega il rigore accademico con soluzioni pronte per il mercato per i partner industriali.",
        tags:["LCA","Economia Circolare","Materiali Bio-based","Ricerca Applicata"],
        linkedin:"https://it.linkedin.com/in/matteo-giovanardi-b36ba1117",
        orcid:"https://orcid.org/0000-0001-8037-3381",
      },
      {
        initials:"FP",
        bg:"#2A1E3D", accent:"#C3A8E6",
        photo:"/team/francesca.jpg",
        role:"Ricercatrice",
        name:"Francesca Pollet",
        credentials:"PhD Student · Università di Ferrara",
        bio:"PhD student in Architettura all'Università di Ferrara. Specializzata in materiali bio-based, Passaporto Digitale di Prodotto e metodologie di valutazione ambientale. In Levery supporta i progetti di ricerca attivi, la produzione scientifica e le deliverable dei progetti europei.",
        tags:["Materiali Bio-based","Passaporto Digitale","Valutazione Ambientale"],
        linkedin:"https://it.linkedin.com/in/francesca-pollet-42a345355",
        orcid:"https://orcid.org/0009-0002-1086-1296",
      },
    ],
  },
};

// ─── MEMBER CARD ─────────────────────────────────────────────────────────────
function MemberCard({ m }) {
  const [photoHov, setPhotoHov] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <div style={{display:"flex",flexDirection:"column",height:"100%", background:C.white, borderRadius:2, overflow:"hidden",
      border:`1px solid ${C.rule}`, display:"flex", flexDirection:"column" }}>

      {/* Photo — cover with center/center crop, bio overlay on hover */}
      <div
        style={{ position:"relative", height:360, background:m.bg,
          overflow:"hidden", flexShrink:0, cursor:"pointer" }}
        onMouseEnter={()=>setPhotoHov(true)}
        onMouseLeave={()=>setPhotoHov(false)}
      >
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          opacity:0.08, pointerEvents:"none" }}
          viewBox="0 0 400 360" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:8},(_,i)=>(<line key={i} x1={i*60-20} y1="0" x2={i*60+100} y2="360" stroke={m.accent} strokeWidth="1"/>))}
        </svg>

        {m.photo && !imgError ? (
          <img src={m.photo} alt={m.name} onError={()=>setImgError(true)}
            style={{ position:"absolute", inset:0, width:"100%", height:"100%",
              objectFit:"cover", objectPosition:"center center" }}/>
        ) : (
          <div style={{ position:"absolute", inset:0, display:"flex",
            alignItems:"center", justifyContent:"center" }}>
            <span style={{ fontSize:80, fontFamily:"'Georgia',serif",
              color:"rgba(255,255,255,0.12)" }}>{m.initials}</span>
          </div>
        )}

        {/* Gradient at bottom */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:80,
          background:`linear-gradient(to top, ${m.bg}, transparent)`, zIndex:1 }}/>

        {/* Role badge */}
        <div style={{ position:"absolute", bottom:14, left:18, zIndex:2 }}>
          <span style={{ fontSize:9, fontFamily:"monospace", letterSpacing:"0.14em",
            color:m.accent, background:"rgba(0,0,0,0.5)",
            padding:"4px 10px", borderRadius:2, textTransform:"uppercase" }}>
            {m.role}
          </span>
        </div>

        {/* Bio overlay — appears on photo hover */}
        <div style={{
          position:"absolute", inset:0,
          background:`${m.bg}f0`,
          padding:"28px 24px",
          opacity: photoHov ? 1 : 0,
          transform: photoHov ? "translateY(0)" : "translateY(10px)",
          transition:"all 0.25s ease",
          zIndex:10,
          overflowY:"auto",
          display:"flex", flexDirection:"column", justifyContent:"center",
          pointerEvents: photoHov ? "auto" : "none",
        }}>
          <p style={{ fontSize:9, fontFamily:"monospace", letterSpacing:"0.14em",
            color:m.accent, textTransform:"uppercase", margin:"0 0 12px" }}>
            {m.role}
          </p>
          <p style={{ fontSize:13, color:"rgba(255,255,255,0.82)", lineHeight:1.8,
            fontFamily:"'Helvetica Neue',Arial,sans-serif", margin:0 }}>
            {m.bio}
          </p>
        </div>
      </div>

      {/* Info — always visible, links always clickable */}
      <div style={{ padding:"22px 24px 26px", flexGrow:1, display:"flex", flexDirection:"column" }}>
        <h3 style={{ fontSize:20, fontWeight:400, color:C.ink, margin:"0 0 4px",
          fontFamily:"'Georgia',serif" }}>{m.name}</h3>
        <p style={{ fontSize:10, fontFamily:"monospace", color:C.inkLight,
          letterSpacing:"0.08em", margin:"0 0 16px", textTransform:"uppercase" }}>
          {m.credentials}
        </p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:5, marginBottom:18 }}>
          {m.tags.map((tag,i)=>(
            <span key={i} style={{ fontSize:11,
              fontFamily:"'Helvetica Neue',Arial,sans-serif",
              padding:"3px 8px", border:`1px solid ${C.rule}`,
              borderRadius:2, color:C.inkLight, background:C.sand }}>
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display:"flex", gap:16, marginTop:"auto",borderTop:`1px solid ${C.rule}`,
          paddingTop:16, alignItems:"center" }}>
          <a href={m.linkedin} target="_blank" rel="noopener noreferrer"
            style={{ fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif",
              color:C.green, textDecoration:"none", display:"flex",
              alignItems:"center", gap:6 }}
            onClick={()=>track("team_linkedin",{name:m.name})}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill={C.green}>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
          {m.orcid && <a href={m.orcid} target="_blank" rel="noopener noreferrer"
            style={{ fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif",
              color:C.inkLight, textDecoration:"none" }}
            onClick={()=>track("team_orcid",{name:m.name})}>
            ORCiD →
          </a>}
        </div>
      </div>
    </div>
  );
}


export default function LeveryTeam() {
  const [lang, setLang] = useState("en");
  const [ready, setReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = copy[lang];

  useEffect(()=>{
    const h=()=>setScrolled(window.scrollY>40);
    window.addEventListener("scroll",h);
    return()=>window.removeEventListener("scroll",h);
    setReady(true);
  },[]);

  useEffect(()=>{
    // Auto-detect language from browser, with localStorage preference
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const browser=typeof navigator!=="undefined"?navigator.language:"en";
    if(browser.startsWith("it")){setLang("it");localStorage.setItem("levery_lang","it");}
  },[]);

  const inner = { maxWidth:1200, margin:"0 auto", padding:"0 32px" };
  const navLinks=[["Work","/work"],["Products","/products"],["Insights","/insights"],
    ["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

  return (
    <div style={{opacity:ready?1:0,transition:"opacity 0.15s ease", fontFamily:"'Georgia','Times New Roman',serif", color:C.ink,
      background:C.white, overflowX:"hidden" }}>
      <style>{`
        *{box-sizing:border-box}body{margin:0}
        @media(max-width:900px){
          .l-nav-links{display:none!important}
          .l-team-grid{grid-template-columns:1fr!important}
        }
      `}</style>

      {/* NAV */}
            <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            <li key="Work"><a href="/work" style={{color:"/work"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/work"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Work</a></li><li key="Products"><a href="/products" style={{color:"/products"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/products"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Products</a></li><li key="Insights"><a href="/insights" style={{color:"/insights"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/insights"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Insights</a></li><li key="Impact"><a href="/impact" style={{color:"/impact"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/impact"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Impact</a></li><li key="Team"><a href="/team" style={{color:"/team"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/team"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Team</a></li><li key="Contact"><a href="/contact" style={{color:"/contact"==="/team"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/contact"==="/team"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Contact</a></li>
          </ul>
          <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer",marginRight:8}}>{lang==="en"?"IT":"EN"}</button><a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>


      {/* PAGE HEADER */}
      <div style={{ background:`linear-gradient(145deg,#1C2D40 0%,${C.brand} 100%)`,
        padding:"120px 0 64px", position:"relative", overflow:"hidden" }}>
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          opacity:0.04, pointerEvents:"none" }}
          viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:12},(_,i)=>(
            <line key={i} x1={i*110-40} y1="0" x2={i*110+180} y2="280"
              stroke="#7EC8E3" strokeWidth="1"/>
          ))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>05</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{t.pageLabel}</span>
          </div>
          <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:"0 0 14px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{t.pageTitle}</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.48)",margin:0,fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:480,lineHeight:1.7,fontStyle:"italic"}}>{t.pageSub}</p>
        </div>
      </div>

      {/* TEAM GRID */}
      <div style={{ background:C.white, padding:"72px 0 88px" }}>
        <div style={{ ...inner }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)",
            gap:24 }} className="l-team-grid">
            {(t.members||[]).map((m,i)=>(
              <MemberCard key={i} m={m}/>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:C.green, padding:"72px 0" }}>
        <div style={{ ...inner, textAlign:"center" }}>
          <h2 style={{ fontSize:30, fontWeight:400, color:C.white, margin:"0 0 10px",
            fontFamily:"'Georgia',serif" }}>{t.ctaTitle}</h2>
          <p style={{ fontSize:15, color:"rgba(255,255,255,0.6)",
            margin:"0 auto 32px", maxWidth:440,
            fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.7 }}>
            {t.ctaSub}
          </p>
          <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{ background:C.white, color:C.green,
            padding:"12px 32px", borderRadius:2, fontSize:14,
            fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600,
            textDecoration:"none", display:"inline-block" }}
            onClick={()=>track("cta_click",{source:"team_page"})}
          >{t.bookCTA}</a>
        </div>
      </div>

      {/* FOOTER */}
                  {/* NEWSLETTER */}
      <div style={{background:"#0d1520",borderTop:"1px solid rgba(255,255,255,0.06)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4}}>{lang==="it"?"Una email al mese. R&D intelligence per innovatori del settore costruzioni.":"One email per month. R&D intelligence for construction innovators."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-team" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-team");
                if(!el||!el.value)return;
                try{
                  await fetch("https://formsubmit.co/ajax/info@levery.it",{method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"}},body:JSON.stringify({email:el.value,_subject:"Newsletter subscription",type:"newsletter"})}});
                  el.value="";el.placeholder=lang==="it"?"✓ Iscritto":"✓ Subscribed";
                }catch(e){{el.placeholder=lang==="it"?"Riprova":"Try again";}}
              }}}>
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
