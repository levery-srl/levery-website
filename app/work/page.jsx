'use client'
import { useState, useEffect } from "react";

const C = {
  brand:"#2D4059", green:"#1E6B45", greenMid:"#2A8A58",
  greenLight:"#E8F5EE", sand:"#F5F2EC", white:"#FFFFFF",
  ink:"#1A1A1A", inkMid:"#4A4A4A", inkLight:"#8A8A8A", rule:"#E0DBD3",
};

const DOMAIN = {
  digital: { bg:"#1C2D40", accent:"#7EC8E3",  label:"R&D"  },
  green:   { bg:"#1A3D2B", accent:"#A8E6CF",  label:"ECO"  },
  funding: { bg:"#2A2010", accent:"#FFD97D",  label:"EU"   },
  xr:      { bg:"#2A1E3D", accent:"#C3A8E6",  label:"XR"   },
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

// ─── CARD HEADER (same pattern as homepage) ───────────────────────────────────
function CardHeader({ domain, label, height=120 }) {
  const { bg, accent } = domain;
  const stripes = Array.from({length:10},(_,i)=>i*38-30);
  return (
    <div style={{ height, background:bg, position:"relative", overflow:"hidden" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
        opacity:0.06, pointerEvents:"none" }} viewBox="0 0 320 120" preserveAspectRatio="none">
        {stripes.map((x,i)=>(
          <line key={i} x1={x} y1="0" x2={x+160} y2="120" stroke={accent} strokeWidth="1.5"/>
        ))}
      </svg>
      <div style={{ position:"absolute", top:0, right:0, width:36, height:36,
        borderBottom:`1.5px solid ${accent}`, borderLeft:`1.5px solid ${accent}`,
        opacity:0.35 }}/>
      <div style={{ position:"absolute", right:14, bottom:-8, fontSize:64,
        fontFamily:"monospace", fontWeight:700, color:"rgba(255,255,255,0.04)",
        letterSpacing:"-0.04em", lineHeight:1, userSelect:"none" }}>{label}</div>
    </div>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────
const projects = {
  en: [
    {
      slug:"bio-corner",
      name:"BIO.CO.R.N.ER",
      domain:"rd",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:false,
      status:"Active",
      period:"2023–2026",
      fund:"CIRCULOOS · Horizon Europe",
      tags:["Bio-based Materials", "Circular Economy", "Emilia-Romagna", "Agro-waste", "LCA"],
      desc:"Building a coordinated and regenerative supply chain for eco-sustainable building materials from bio-waste in the Emilia-Romagna region.",
      levery:"Supply chain design, Digital Product Passport development, NGSI-LD data platform.",
    },
    {
      slug:"agro-builder",
      name:"Agro.build.ER",
      domain:"dual",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:true,
      status:"Active",
      period:"2023–2025",
      fund:"Regional · Emilia-Romagna",
      tags:["Agro-waste Valorisation", "Circular Economy", "Bio-based", "Regional Supply Chain"],
      desc:"Developing a circular agro-waste value chain for the sustainable building sector, creating rural-urban synergies across Emilia-Romagna.",
      levery:"Circular business model, material valorisation strategy, stakeholder engagement.",
    },
    {
      slug:"winloop",
      name:"WINLOOP",
      domain:"rd",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:false,
      status:"Active",
      period:"2026–ongoing",
      fund:"Horizon Europe",
      tags:["Circular Economy", "Window Lifecycle", "Digital Product Passport", "End-of-Life", "Ecodesign"],
      desc:"Developing technologies, digitisation tools and business models for closing the life cycle of windows — from design to end-of-life recovery.",
      levery:"Digital Product Passport, lifecycle assessment, circular business model definition.",
    },
    {
      slug:"bios-mater",
      name:"BIOS MATER",
      domain:"eco",bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO",isDual:false,
      status:"Active",
      period:"2025–ongoing",
      fund:"Horizon Europe",
      tags:["Bio-based Materials", "ESPR Compliance", "Sustainable Products", "LCA", "Market Validation"],
      desc:"Re-designing the construction sector through sustainable and functional bio-based construction products with competitive market performance.",
      levery:"Product development support, LCA, market analysis and pre-commercial validation.",
    },
    {
      slug:"w2w",
      name:"W2W",
      domain:"dual",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:true,
      status:"Active",
      period:"2024–ongoing",
      fund:"Horizon Europe · GA 101138789",
      tags:["Wood Waste", "Circular Economy", "C&D Waste", "Façade Systems", "Digital Twin"],
      desc:"Transforming wood waste into a valuable resource for a greener future — developing upcycling technologies and circular business models for the construction sector.",
      levery:"Prefabricated façade system development, DPP design, scientific dissemination.",
    },
    {
      slug:"digi4bio",
      name:"Digi4BioMat",
      domain:"dual",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:true,
      status:"Completed",
      period:"2025",
      fund:"Horizon Europe",
      tags:["Digital Product Passport", "DPP", "Bio-based", "ESPR", "Circular Business Model"],
      desc:"Developing Digital Product Passport infrastructure to upscale circular business models for bio-based construction materials across EU supply chains.",
      levery:"DPP platform design, data model development, regulatory alignment with ESPR.",
    },
    {
      slug:"prometheus",
      name:"PROMETHEUS",
      domain:"rd",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:false,
      status:"Completed",
      period:"2024–2025",
      fund:"Horizon Europe",
      tags:["Extended Reality", "XR", "Building Maintenance", "Digital Twin", "O&M"],
      desc:"Advancing augmented and virtual reality applications for the construction sector — from design review to on-site maintenance and worker training.",
      levery:"XR use case definition, building O&M workflows, technology transfer to ARyze.",
    },
    {
      slug:"mc20",
      name:"MC2.0",
      domain:"eco",bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO",isDual:false,
      status:"Active",
      period:"2024–2026",
      fund:"Horizon Europe · GA 101096139",
      tags:["BIPV", "Building Integrated PV", "Façade Engineering", "Mass Customisation", "Ecodesign"],
      desc:"Mass Customisation 2.0 for integrated photovoltaic building envelopes — enabling flexible, high-performance BIPV systems for mainstream construction.",
      levery:"Ecodesign MCDA methodology, LCA/LCC analysis, DPP design for BIPV products.",
    },
    {
      slug:"pv-igu",
      name:"PV-IGU",
      domain:"rd",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:false,
      status:"Active",
      period:"2024–ongoing",
      fund:"Direct service · Glass to Power",
      tags:["BIPV", "Building Envelope", "Solar Integration", "Façade Systems", "Technology Transfer"],
      desc:"Supporting Glass to Power in the technological integration of BIPV systems into building envelopes — from product validation to market positioning.",
      levery:"Technical documentation, building envelope integration analysis, market strategy.",
    },
    {
      slug:"belm",
      name:"BELM",
      domain:"rd",bg:"#1C2D40",accent:"#7EC8E3",label:"R&D",isDual:false,
      status:"Active",
      period:"2023–2027",
      fund:"Horizon Europe",
      tags:["Lifecycle Management", "Digital Twin", "ESG Reporting", "Sustainability", "CSRD"],
      desc:"Built Environment Lifecycle Management Assistance — developing digital tools for whole-life assessment and management of building systems and components.",
      levery:"Platform architecture, sustainability assessment modules, data interoperability.",
    },
  ],
  it: [
    {
      slug:"bio-corner",
      name:"BIO.CO.R.N.ER",
      domain:"rd",
      status:"Attivo",
      period:"2023–2026",
      fund:"CIRCULOOS · Horizon Europe",
      tags:["Bio-based Materials", "Circular Economy", "Emilia-Romagna", "Agro-waste", "LCA"],
      desc:"Costruzione di una filiera coordinata e rigenerativa per materiali da costruzione eco-sostenibili da bio-rifiuti in Emilia-Romagna.",
      levery:"Design della supply chain, sviluppo Digital Product Passport, piattaforma dati NGSI-LD.",
    },
    {
      slug:"agro-builder",
      name:"Agro.build.ER",
      domain:"dual",
      status:"Attivo",
      period:"2023–2025",
      fund:"Regionale · Emilia-Romagna",
      tags:["Agro-waste Valorisation", "Circular Economy", "Bio-based", "Regional Supply Chain"],
      desc:"Sviluppo di una filiera circolare per rifiuti agro-industriali nel settore edilizio sostenibile, creando sinergie rurale-urbane in Emilia-Romagna.",
      levery:"Business model circolare, strategia di valorizzazione dei materiali, engagement degli stakeholder.",
    },
    {
      slug:"winloop",
      name:"WINLOOP",
      domain:"rd",
      status:"Attivo",
      period:"2026–ongoing",
      fund:"Horizon Europe",
      tags:["Circular Economy", "Window Lifecycle", "Digital Product Passport", "End-of-Life", "Ecodesign"],
      desc:"Sviluppo di tecnologie, strumenti di digitalizzazione e modelli di business per chiudere il ciclo di vita dei serramenti.",
      levery:"Digital Product Passport, analisi del ciclo di vita, definizione business model circolare.",
    },
    {
      slug:"bios-mater",
      name:"BIOS MATER",
      domain:"eco",
      status:"Attivo",
      period:"2025–ongoing",
      fund:"Horizon Europe",
      tags:["Bio-based Materials", "ESPR Compliance", "Sustainable Products", "LCA", "Market Validation"],
      desc:"Re-design del settore costruzioni attraverso prodotti bio-based sostenibili e funzionali con prestazioni competitive sul mercato.",
      levery:"Supporto sviluppo prodotto, LCA, analisi di mercato e validazione pre-commerciale.",
    },
    {
      slug:"w2w",
      name:"W2W",
      domain:"dual",
      status:"Attivo",
      period:"2024–ongoing",
      fund:"Horizon Europe · GA 101138789",
      tags:["Wood Waste", "Circular Economy", "C&D Waste", "Façade Systems", "Digital Twin"],
      desc:"Trasformazione dei rifiuti di legno in una risorsa di valore — tecnologie di upcycling e modelli di business circolari per il settore costruzioni.",
      levery:"Sistema facciata prefabbricata, design DPP, disseminazione scientifica.",
    },
    {
      slug:"digi4bio",
      name:"Digi4BioMat",
      domain:"dual",
      status:"Completato",
      fund:"Horizon Europe",
      tags:["Digital Product Passport", "DPP", "Bio-based", "ESPR", "Circular Business Model"],
      desc:"Infrastruttura Digital Product Passport per scalare modelli di business circolari per materiali da costruzione bio-based nelle filiere europee.",
      levery:"Design piattaforma DPP, sviluppo modello dati, allineamento normativo ESPR.",
    },
    {
      slug:"prometheus",
      name:"PROMETHEUS",
      domain:"rd",
      status:"Completato",
      period:"2024–2025",
      fund:"Horizon Europe",
      tags:["Extended Reality", "XR", "Building Maintenance", "Digital Twin", "O&M"],
      desc:"Avanzamento delle applicazioni di realtà aumentata e virtuale per il settore costruzioni — dal design review alla manutenzione in loco e alla formazione.",
      levery:"Definizione use case XR, workflow O&M edilizio, trasferimento tecnologico ad ARyze.",
    },
    {
      slug:"mc20",
      name:"MC2.0",
      domain:"eco",
      status:"Attivo",
      fund:"Horizon Europe · GA 101096139",
      tags:["BIPV", "Building Integrated PV", "Façade Engineering", "Mass Customisation", "Ecodesign"],
      desc:"Mass Customisation 2.0 per involucri edilizi fotovoltaici integrati — sistemi BIPV flessibili e ad alte prestazioni per il mercato mainstream.",
      levery:"Metodologia MCDA ecodesign, analisi LCA/LCC, design DPP per prodotti BIPV.",
    },
    {
      slug:"pv-igu",
      name:"PV-IGU",
      domain:"rd",
      status:"Attivo",
      period:"2024–ongoing",
      fund:"Servizio diretto · Glass to Power",
      tags:["BIPV", "Building Envelope", "Solar Integration", "Façade Systems", "Technology Transfer"],
      desc:"Supporto a Glass to Power nell'integrazione tecnologica di sistemi BIPV nell'involucro edilizio — dalla validazione di prodotto al posizionamento di mercato.",
      levery:"Documentazione tecnica, analisi integrazione involucro, strategia di mercato.",
    },
    {
      slug:"belm",
      name:"BELM",
      domain:"rd",
      status:"Attivo",
      period:"2023–2027",
      fund:"Horizon Europe",
      tags:["Lifecycle Management", "Digital Twin", "ESG Reporting", "Sustainability", "CSRD"],
      desc:"Built Environment Lifecycle Management Assistance — strumenti digitali per la valutazione e gestione dell'intero ciclo di vita di sistemi e componenti edilizi.",
      levery:"Architettura piattaforma, moduli di valutazione sostenibilità, interoperabilità dati.",
    },
  ],
};

const copy = {
  en: {
    langSwitch:"IT", bookCTA:"Book a call",
    pageLabel:"Our Work",
    pageTitle:"Projects that shape construction.",
    pageSub:"Applied research and R&D partnerships across bio-based materials, digital tools, building envelopes and EU-funded consortia.",
    filterAll:"All", filterActive:"Active", filterCompleted:"Completed",
    leveryRole:"Levery's role",
    viewProject:"View project →",
    ctaTitle:"Have a project in mind?",
    ctaSub:"We work with manufacturers, research consortia and EU project officers. Tell us what you are building.",
    footerTagline:"Specialist R&D, built around your team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · All rights reserved",
    benefitBadge:"Società Benefit · Our impact →",
  },
  it: {
    langSwitch:"EN", bookCTA:"Prenota una call",
    pageLabel:"Il nostro lavoro",
    pageTitle:"Progetti che trasformano il settore.",
    pageSub:"Ricerca applicata e partnership R&D su materiali bio-based, strumenti digitali, involucri edilizi e consorzi finanziati dall'UE.",
    filterAll:"Tutti", filterActive:"Attivi", filterCompleted:"Completati",
    leveryRole:"Il ruolo di Levery",
    viewProject:"Vedi progetto →",
    ctaTitle:"Hai un progetto in mente?",
    ctaSub:"Lavoriamo con produttori, consorzi di ricerca e project officer europei. Raccontaci cosa stai costruendo.",
    footerTagline:"R&D specializzato, costruito intorno al tuo team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · Tutti i diritti riservati",
    benefitBadge:"Società Benefit · Il nostro impatto →",
  },
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
function ProjectCard({ p, t }) {
  const active = p.status==="Active" || p.status==="Attivo";
  const isDual = p.isDual || false;
  const bg = p.bg || "#1C2D40";
  const accent = p.accent || "#7EC8E3";
  const label = p.label || "R&D";
  const stripes = Array.from({length:10},(_,i)=>i*38-30);

  return (
    <div style={{ background:C.white, display:"flex", flexDirection:"column",
      overflow:"hidden", borderRadius:2, border:`1px solid ${C.rule}` }}
      className="l-proj-card">

      {/* Coloured header */}
      <div style={{ height:110, background:isDual?"linear-gradient(135deg,#1C2D40,#1A3D2B)":bg, position:"relative", overflow:"hidden" }}>
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          opacity:0.06, pointerEvents:"none" }} viewBox="0 0 320 110" preserveAspectRatio="none">
          {stripes.map((x,i)=>(
            <line key={i} x1={x} y1="0" x2={x+160} y2="110" stroke={accent} strokeWidth="1.5"/>
          ))}
        </svg>
        <div style={{ position:"absolute", top:0, right:0, width:36, height:36,
          borderBottom:`1.5px solid ${accent}`, borderLeft:`1.5px solid ${accent}`,
          opacity:0.35 }}/>
        <div style={{ position:"absolute", right:14, bottom:-8, fontSize:60,
          fontFamily:"monospace", fontWeight:700, color:"rgba(255,255,255,0.04)",
          letterSpacing:"-0.04em", lineHeight:1, userSelect:"none" }}>{label}</div>
        {/* Domain pills */}
        <div style={{position:"absolute",top:10,left:14,display:"flex",gap:5}}>
          {isDual ? (<>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:"#7EC8E3",background:"rgba(0,0,0,0.4)",padding:"3px 8px",borderRadius:2,textTransform:"uppercase"}}>R&D</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:"#A8E6CF",background:"rgba(0,0,0,0.4)",padding:"3px 8px",borderRadius:2,textTransform:"uppercase"}}>ECO</span>
          </>) : (
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:accent,background:"rgba(0,0,0,0.3)",padding:"3px 9px",borderRadius:2,textTransform:"uppercase"}}>{label}</span>
          )}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding:"20px 22px 24px", display:"flex",
        flexDirection:"column", flexGrow:1, gap:10 }}>

        {/* Status badge */}
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8}}>
          <span style={{display:"inline-block",fontSize:10,fontFamily:"monospace",
            letterSpacing:"0.1em",padding:"3px 8px",borderRadius:2,textTransform:"uppercase",
            background:active?C.greenLight:"#EBEBEB",color:active?C.green:C.inkLight}}>
            {p.status}
          </span>
          <span style={{fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.4)",
            background:active?"rgba(30,107,69,0.15)":"rgba(0,0,0,0.06)",
            padding:"3px 8px",borderRadius:2,letterSpacing:"0.06em"}}>{p.period}</span>
        </div>

        {/* Name */}
        <h3 style={{fontSize:18,fontWeight:400,color:C.ink,margin:0,
          fontFamily:"'Georgia',serif",lineHeight:1.3}}>{p.name}</h3>

        {/* Description */}
        <p style={{fontSize:13,color:C.inkMid,lineHeight:1.7,
          fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,flexGrow:1}}>
          {p.desc}
        </p>

        {/* SEO tags */}
        <div style={{display:"flex",flexWrap:"wrap",gap:5}}>
          {p.tags.map((tag,i)=>(
            <span key={i} style={{fontSize:10,fontFamily:"'Helvetica Neue',Arial,sans-serif",
              padding:"3px 8px",border:`1px solid ${C.rule}`,borderRadius:2,
              color:C.inkLight,background:C.sand}}>{tag}</span>
          ))}
        </div>

        {/* View project link */}
        <a href={`/work/${p.slug}`}
          style={{fontSize:12,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",
            textDecoration:"none",letterSpacing:"0.03em",
            borderBottom:`1px solid ${C.greenLight}`,paddingBottom:1}}
          onClick={()=>track("project_view",{project:p.name})}
        >{t.viewProject}</a>
      </div>
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function LeveryWork() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState("all");
  const t = copy[lang];
  const allProjects = projects[lang];

  const filtered = filter === "all" ? allProjects
    : filter === "active"
      ? allProjects.filter(p => p.status==="Active" || p.status==="Attivo")
      : allProjects.filter(p => p.status==="Completed" || p.status==="Completato");

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

  const inner = { maxWidth:1200, margin:"0 auto", padding:"0 32px" };
  const navLinks=[["Work","/work"],["Products","/products"],["Insights","/insights"],
    ["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

  const filterBtn = (id, label) => (
    <button key={id} onClick={()=>setFilter(id)} style={{
      fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif",
      padding:"6px 16px", borderRadius:2, cursor:"pointer",
      border: filter===id ? "1px solid rgba(255,255,255,0.6)" : "1px solid rgba(255,255,255,0.18)",
      background: filter===id ? "rgba(255,255,255,0.12)" : "transparent",
      color: filter===id ? C.white : "rgba(255,255,255,0.55)",
      transition:"all 0.15s", fontWeight: filter===id ? 500 : 400,
    }}>{label}</button>
  );

  return (
    <div style={{ fontFamily:"'Georgia','Times New Roman',serif", color:C.ink,
      background:C.white, overflowX:"hidden" }}>
      <style>{`
        *{box-sizing:border-box}body{margin:0}
        @media(max-width:900px){
          .l-nav-links{display:none!important}
          .l-work-grid{grid-template-columns:1fr!important}
        }
        .l-proj-card{transition:transform 0.2s ease,box-shadow 0.2s ease}
        .l-proj-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.08)!important}
      `}</style>

      {/* NAV */}
            <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-icon.svg" alt="Levery" height="28" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","Lavori","/work"],["Products","Prodotti","/products"],["Insights","Insights","/insights"],["Impact","Impatto","/impact"],["Team","Team","/team"],["Contact","Contatti","/contact"]].map(([en,it,path])=>(
              <li key={path}><a href={path} style={{color:path==="/work"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:path==="/work"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}
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
      <div style={{ background:`linear-gradient(145deg,#1C2D40 0%,${C.brand} 100%)`,
        height:"450px",overflow:"hidden",position:"relative",paddingTop:"120px" }}>
        <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%",
          opacity:0.04, pointerEvents:"none" }}
          viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:12},(_,i)=>(
            <line key={i} x1={i*110-40} y1="0" x2={i*110+180} y2="280"
              stroke="#7EC8E3" strokeWidth="1"/>
          ))}
        </svg>
        <div style={{ ...inner, position:"relative", zIndex:1 }}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>01</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{t.pageLabel}</span>
          </div>
          <h1 style={{ fontSize:"clamp(36px,3.5vw,52px)", fontWeight:400, color:C.white, margin:"0 0 14px",
            fontFamily:"'Georgia',serif", lineHeight:1.05 }}>{t.pageTitle}</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.48)",margin:"0 0 32px",fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:520,lineHeight:1.7,fontStyle:"italic"}}>{t.pageSub}</p>

        </div>
      </div>

      {/* PROJECT GRID */}
      <div style={{ background:C.white, padding:"64px 0 88px" }}>
        <div style={{ ...inner }}>
          <div style={{ display:"flex", gap:8, flexWrap:"wrap", marginBottom:24 }}>
            {filterBtn("all", t.filterAll)}
            {filterBtn("active", t.filterActive)}
            {filterBtn("completed", t.filterCompleted)}
          </div>
          {/* Count */}
          <p style={{ fontSize:11, fontFamily:"monospace", color:C.inkLight,
            letterSpacing:"0.1em", textTransform:"uppercase", marginBottom:32 }}>
            {filtered.length} {lang==="en"?"projects":"progetti"}
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)",
            gap:20 }} className="l-work-grid">
            {filtered.map((p,i)=>(
              <ProjectCard key={i} p={p} t={t}/>
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
            onClick={()=>track("cta_click",{source:"work_page"})}
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
            <input type="email" id="nl-work" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-work");
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
            <img src="/logo-color.svg" alt="Levery" height="72" style={{display:"block"}}/>
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
