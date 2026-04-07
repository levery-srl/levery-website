'use client'
import { useState, useEffect } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  brand:      "#2D4059",
  brandMid:   "#3A5274",
  green:      "#1E6B45",
  greenMid:   "#2A8A58",
  greenLight: "#E8F5EE",
  sand:       "#F5F2EC",   // cream — hero, insights section bg
  sandDark:   "#EDE9E1",   // darker cream — stats section bg
  white:      "#FFFFFF",   // services, projects section bg
  ink:        "#1A1A1A",
  inkMid:     "#4A4A4A",
  inkLight:   "#8A8A8A",
  rule:       "#E0DBD3",
  footerBg:   "#111820",   // near-black footer — darker than brand
};

// ─── COLOUR PALETTE per domain ───────────────────────────────────────────────
const DOMAIN = {
  digital:  { bg:"#1C2D40", accent:"#7EC8E3",  label:"R&D",   pill:"#7EC8E3"  },
  green:    { bg:"#1A3D2B", accent:"#A8E6CF",  label:"ECO",   pill:"#A8E6CF"  },
  funding:  { bg:"#2A2010", accent:"#FFD97D",  label:"EU",    pill:"#FFD97D"  },
  xr:       { bg:"#2A1E3D", accent:"#C3A8E6",  label:"XR",    pill:"#C3A8E6"  },
};

// Map keywords → domain
function domainFor(tags = [], title = "") {
  const src = [...tags, title].join(" ").toLowerCase();
  if (src.includes("bio") || src.includes("circular") || src.includes("façade") || src.includes("facade") || src.includes("green") || src.includes("w2w") || src.includes("sustainab")) return DOMAIN.green;
  if (src.includes("xr") || src.includes("ar") || src.includes("extended") || src.includes("prometheus")) return DOMAIN.xr;
  if (src.includes("fund") || src.includes("horizon") || src.includes("eu ") || src.includes("finanzia")) return DOMAIN.funding;
  return DOMAIN.digital;
}

// ─── SVG LOGO ────────────────────────────────────────────────────────────────
const MONO = "M35.76 62.16 l-25.5 0 l-8.16 -8.16 l0 -40.56 l17.16 17.16 l0 21.9 l6.9 0 l7.8 7.8 z M3.48 53.28 l14.4 0 l0 -22.14 l-14.4 -14.4 l0 36.54 z M32.46 60.78 l-6.9 -6.9 l-21.66 0 l6.9 6.9 l21.66 0 z";
const WORD = "M9.04 33.92 l13.16 0 l0 6.08 l-19.8 0 l0 -28 l6.64 0 l0 21.92 z M33.394 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M28.434 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M59.828 19.6 l7 0 l-8.24 20.4 l-7.2 0 l-8.24 -20.4 l7.04 0 l4.8 13.12 z M77.502 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M72.542 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M96.056 22.36 c1.2 -2.2 3.4 -3.44 6.4 -3.04 l0 6 c-4.32 -0.72 -6.4 1.12 -6.4 6.16 l0 8.52 l-6.4 0 l0 -20.4 l6.4 0 l0 2.76 z M118.85 19.6 l6.84 0 l-12.12 28.8 l-6.52 0 l3.64 -8.88 l0.28 -0.04 l-0.28 0.04 l-9.16 -19.92 l7 0 l5.32 12.44 z";

function LeveryLogo({ color="#fff", height=30 }) {
  return (
    <svg height={height} viewBox="0 0 340 48" fill="none" style={{ display:"block" }}>
      <g transform="translate(0,1) scale(0.245)">
        <g transform="matrix(3.828,0,0,3.828,14,-51.45)" fill={color}><path d={MONO}/></g>
      </g>
      <g transform="translate(52,6) scale(0.245)">
        <g transform="matrix(1.393,0,0,1.393,-3.34,190.28)" fill={color}><path d={WORD}/></g>
      </g>
    </svg>
  );
}

// ─── ANALYTICS HELPER ────────────────────────────────────────────────────────
function track(eventName, params = {}) {
  try {
    if (typeof window === "undefined") return;
    if (window.gtag) window.gtag("event", eventName, params);
    if (window.posthog) window.posthog.capture(eventName, params);
  } catch (_) {}
}

// ─── ECOSYSTEM – full-width absolute, right-half visible ─────────────────────
function GradientMesh({ parallax }) {
  return (
    <div style={{
      position:"absolute", top:0, left:0, width:"100%", height:"100%",
      transform:`translateY(${parallax}px)`, transition:"transform 0.05s linear",
      pointerEvents:"none", overflow:"hidden",
    }}>
      <style>{`
        @keyframes blob1{0%,100%{transform:translate(0px,0px) scale(1)}33%{transform:translate(60px,-40px) scale(1.15)}66%{transform:translate(-30px,50px) scale(0.92)}}
        @keyframes blob2{0%,100%{transform:translate(0px,0px) scale(1)}33%{transform:translate(-50px,60px) scale(1.1)}66%{transform:translate(40px,-30px) scale(1.05)}}
        @keyframes blob3{0%,100%{transform:translate(0px,0px) scale(1)}33%{transform:translate(30px,40px) scale(0.95)}66%{transform:translate(-60px,-20px) scale(1.12)}}
        @keyframes blob4{0%,100%{transform:translate(0px,0px) scale(1)}50%{transform:translate(-40px,-50px) scale(1.08)}}
        .gmesh-blob{position:absolute;border-radius:50%;filter:blur(80px)}
        .gmesh-blob1{animation:blob1 18s ease-in-out infinite}
        .gmesh-blob2{animation:blob2 24s ease-in-out infinite}
        .gmesh-blob3{animation:blob3 20s ease-in-out infinite}
        .gmesh-blob4{animation:blob4 28s ease-in-out infinite}
      `}</style>

      {/* Right-side fade mask — protects left text */}
      <div style={{
        position:"absolute", inset:0, zIndex:2,
        background:"linear-gradient(to right, #F5F2EC 28%, transparent 60%)"
      }}/>

      {/* Blobs — muted, work on cream background */}
      <div className="gmesh-blob gmesh-blob1" style={{
        width:500, height:500, top:-60, right:60,
        background:"radial-gradient(circle, rgba(45,64,89,0.12) 0%, transparent 70%)",
      }}/>
      <div className="gmesh-blob gmesh-blob2" style={{
        width:380, height:380, top:80, right:320,
        background:"radial-gradient(circle, rgba(30,107,69,0.08) 0%, transparent 70%)",
      }}/>
      <div className="gmesh-blob gmesh-blob3" style={{
        width:340, height:340, bottom:-20, right:100,
        background:"radial-gradient(circle, rgba(45,64,89,0.09) 0%, transparent 70%)",
      }}/>
      <div className="gmesh-blob gmesh-blob4" style={{
        width:280, height:280, top:120, right:500,
        background:"radial-gradient(circle, rgba(168,230,207,0.1) 0%, transparent 70%)",
      }}/>
    </div>
  );
}

// ─── COLOURED CARD HEADER (projects, services, insights) ─────────────────────
function CardHeader({ domain, name, height=130 }) {
  const { bg, accent, label } = domain;
  const stripes = Array.from({length:10},(_,i)=>i*38-30);
  return (
    <div style={{ height, background:bg, position:"relative", overflow:"hidden" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.1 }} viewBox="0 0 320 130" preserveAspectRatio="none">
        {stripes.map((x,i)=>(
          <line key={i} x1={x} y1="0" x2={x+160} y2="130" stroke={accent} strokeWidth="1.5"/>
        ))}
        {[50,110,170,230,290].map(dx=>[25,65,105].map(dy=>(
          <circle key={`${dx}-${dy}`} cx={dx} cy={dy} r="1.8" fill={accent}/>
        )))}
      </svg>
      <div style={{ position:"absolute", right:14, bottom:-10, fontSize:68, fontFamily:"monospace", fontWeight:700, color:"rgba(255,255,255,0.05)", letterSpacing:"-0.04em", lineHeight:1, userSelect:"none" }}>{label}</div>
      <div style={{ position:"absolute", top:0, right:0, width:36, height:36, borderBottom:`1.5px solid ${accent}`, borderLeft:`1.5px solid ${accent}`, opacity:0.35 }}/>
      {name && (
        <div style={{ position:"absolute", bottom:14, left:18 }}>
          <span style={{ fontSize:16, fontFamily:"'Georgia',serif", letterSpacing:"0.02em", color:"rgba(255,255,255,0.9)", fontWeight:400 }}>{name}</span>
        </div>
      )}
    </div>
  );
}

// ─── COPY ────────────────────────────────────────────────────────────────────
const copy = {
  en: {
    nav:["Our Work","Products","Insights","Impact","Team","Contact"],
    bookCTA:"Book a call",
    heroLabel:"Levery S.r.l. Società Benefit",
    heroH1a:"Your external R&D team",
    heroH1b:"for the construction industry.",
    heroSub:"We work alongside manufacturers, material producers, and contractors — bringing specialist R&D capabilities in new product development, sustainability compliance, and EU funding access.",
    heroBtn:"Book a 30-minute call →",
    heroLink:"See our active projects ↓",
    stats:[
      {value:"€15M+",label:"EU projects contributed to"},
      {value:"€700K+",label:"Direct R&D budget managed"},
      {value:"50+",  label:"Peer-reviewed publications"},
      {value:"100+", label:"Partners we work with"},
    ],
    servicesTitle:"What we do",
    services:[
      { domain:DOMAIN.digital, icon:"◈", title:"New Product Development",
        desc:"From concept development and material testing to prototype validation and pre-commercial launch — we run the full R&D cycle so your team can focus on production.",
        ifText:"Relevant if you are developing a new building material, component, or system.",
        caps:["Concept development & prototyping","Material selection & testing","Market validation & competitive benchmarking","Certification pathway support","Business model definition"],
        link:"See related projects →", href:"/work?filter=product" },
      { domain:DOMAIN.green, icon:"◉", title:"Sustainability & Circular Economy",
        desc:"LCA, Digital Product Passports, decarbonisation roadmaps, ESG reporting. We translate regulatory requirements into actionable technical work.",
        ifText:"Relevant if you face ESPR compliance, decarbonisation targets, or ESG reporting obligations.",
        caps:["Digital Product Passport (DPP)","LCA / Lifecycle Assessment","ESPR & CE marking compliance","Decarbonisation roadmap","ESG Scope 1–3 reporting"],
        link:"See related projects →", href:"/work?filter=sustainability" },
      { domain:DOMAIN.funding, icon:"◎", title:"EU Funding & Networks",
        desc:"Horizon Europe proposal writing, open call applications, consortium building, financial reporting. We have been on the inside of 10+ funded projects.",
        ifText:"Relevant if you want to access EU R&D funding or join an active research consortium.",
        caps:["Horizon Europe proposal writing","Open call scouting","Consortium building","EU project management & reporting","Technical documentation for regulators"],
        link:"See related projects →", href:"/work?filter=funding" },
    ],
    projectsTitle:"Active projects",
    projectsSub:"All projects →",
    projects:[
      { name:"BIO.CO.R.N.ER", fund:"CIRCULOOS · GA 101092295", tags:["Bio-based Materials","Digital Tools","Circular Economy"], desc:"Digital supply chain architecture for bio-based building materials. NGSI-LD data platform, real-time traceability dashboard.", status:"Active" },
      { name:"MC2.0",         fund:"Horizon Europe · GA 101096139", tags:["BIPV & Energy","New Products"], desc:"Mass customisation of building-integrated photovoltaics. Market analysis, testing protocols, cost analysis across building typologies.", status:"Active" },
      { name:"W2W",           fund:"Horizon Europe · GA 101138789", tags:["Circular Economy","Façade Systems","DPP"], desc:"Wood waste valorisation for prefabricated façade systems. Acoustic testing, façade engineering, Digital Product Passport.", status:"Active" },
    ],
    insightsTitle:"What we are watching",
    insightsSub:"All insights →",
    insights:[
      { domain:DOMAIN.green,   num:"04/26", series:"Make It Green",   date:"Apr 2026", title:"Bio-based building materials & products: the 2026 innovation map", excerpt:"From mycelium to hemp composites — the commercial-ready products redefining the building envelope in 2026.", slug:"bio-03-26" },
      { domain:DOMAIN.digital, num:"03/26", series:"Make It Digital", date:"Feb 2026", title:"AI-based solutions for construction: innovative products for designing and constructing", excerpt:"From automated MEP design to high-precision reality capture — how AI is reshaping the construction site.", slug:"ai-02-26" },
      { domain:DOMAIN.digital, num:"02/26", series:"Make It Digital", date:"Feb 2026", title:"Robotic & Automation for Construction: robotic products for digital workflows", excerpt:"HP SitePrint, Hadrian X, and the next generation of robots closing the gap between BIM and jobsite execution.", slug:"rob-02-26" },
    ],
    ctaText:"If you are developing a construction product, facing a sustainability compliance challenge, or exploring EU funding — we are the right first call.",
    ctaBtn:"Book a 30-minute call →",
    ctaSub:"No pitch. No commitment. 30 minutes.",
    footerTagline:"Specialist R&D, built around your team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · All rights reserved",
    langSwitch:"IT",
  },
  it: {
    nav:["Progetti","Prodotti","Insights","Impatto","Team","Contatti"],
    bookCTA:"Prenota una call",
    heroLabel:"Levery S.r.l. Società Benefit",
    heroH1a:"Il tuo team R&D esterno",
    heroH1b:"per l'industria delle costruzioni.",
    heroSub:"Affianchiamo produttori, fornitori di materiali e imprese con competenze R&D verticali — sviluppo di nuovi prodotti, sostenibilità normativa e accesso ai finanziamenti europei.",
    heroBtn:"Prenota una call di 30 minuti →",
    heroLink:"Vedi i progetti attivi ↓",
    stats:[
      {value:"€15M+",label:"Progetti EU a cui abbiamo contribuito"},
      {value:"€700K+",label:"Budget R&D gestito direttamente"},
      {value:"50+",  label:"Pubblicazioni peer-reviewed"},
      {value:"100+", label:"Partner con cui collaboriamo"},
    ],
    servicesTitle:"Cosa facciamo",
    services:[
      { domain:DOMAIN.digital, icon:"◈", title:"Sviluppo Nuovi Prodotti",
        desc:"Dallo sviluppo del concept e dalla selezione dei materiali fino alla validazione del prototipo e al lancio pre-commerciale — gestiamo l'intero ciclo R&D perché il tuo team possa concentrarsi sulla produzione.",
        ifText:"Pertinente se stai sviluppando un nuovo materiale, componente o sistema per l'edilizia.",
        caps:["Sviluppo concept e prototipazione","Selezione e test dei materiali","Validazione di mercato e benchmarking","Supporto percorso certificazione","Definizione business model"],
        link:"Vedi progetti correlati →", href:"/work?filter=product" },
      { domain:DOMAIN.green, icon:"◉", title:"Sostenibilità ed Economia Circolare",
        desc:"LCA, Passaporti Digitali di Prodotto, roadmap di decarbonizzazione, reportistica ESG. Traduciamo i requisiti normativi in lavoro tecnico concreto.",
        ifText:"Pertinente se affronti la conformità ESPR, obiettivi di decarbonizzazione o obblighi di rendicontazione ESG.",
        caps:["Passaporto Digitale di Prodotto (DPP)","LCA / Analisi del Ciclo di Vita","Conformità ESPR e marcatura CE","Roadmap di decarbonizzazione","Reportistica ESG Scope 1–3"],
        link:"Vedi progetti correlati →", href:"/work?filter=sustainability" },
      { domain:DOMAIN.funding, icon:"◎", title:"Finanziamenti EU e Reti",
        desc:"Scrittura di proposte Horizon Europe, domande per open call, costruzione di consorzi, rendicontazione finanziaria. Siamo stati all'interno di 10+ progetti finanziati.",
        ifText:"Pertinente se vuoi accedere ai finanziamenti R&D europei o unirti a un consorzio di ricerca attivo.",
        caps:["Scrittura proposte Horizon Europe","Scouting open call","Costruzione consorzi","Gestione e rendicontazione progetti UE","Documentazione tecnica per enti e regolatori"],
        link:"Vedi progetti correlati →", href:"/work?filter=funding" },
    ],
    projectsTitle:"Progetti attivi",
    projectsSub:"Tutti i progetti →",
    projects:[
      { name:"BIO.CO.R.N.ER", fund:"CIRCULOOS · GA 101092295",     tags:["Materiali Bio-based","Strumenti Digitali","Economia Circolare"], desc:"Architettura digitale della supply chain per materiali bio-based da costruzione. Piattaforma dati NGSI-LD, dashboard di tracciabilità in tempo reale.", status:"Attivo" },
      { name:"MC2.0",         fund:"Horizon Europe · GA 101096139", tags:["BIPV & Energia","Nuovi Prodotti"],                               desc:"Mass customisation di fotovoltaico integrato negli edifici. Analisi di mercato, protocolli di test, analisi dei costi per tipologie edilizie.", status:"Attivo" },
      { name:"W2W",           fund:"Horizon Europe · GA 101138789", tags:["Economia Circolare","Sistemi di Facciata","DPP"],                 desc:"Valorizzazione dei rifiuti di legno per sistemi di facciata prefabbricati. Test acustici, ingegneria della facciata, Passaporto Digitale di Prodotto.", status:"Attivo" },
    ],
    insightsTitle:"Quello che stiamo osservando",
    insightsSub:"Tutti gli insights →",
    insights:[
      { domain:DOMAIN.green,   num:"04/26", series:"Make It Green",   date:"Apr 2026", title:"Materiali bio-based per l'edilizia: la mappa dell'innovazione 2026", excerpt:"Dal mycelium ai compositi di canapa — i prodotti pronti al mercato che ridefiniscono l'involucro edilizio.", slug:"bio-03-26" },
      { domain:DOMAIN.digital, num:"03/26", series:"Make It Digital", date:"Feb 2026", title:"Soluzioni AI per le costruzioni: prodotti innovativi per progettare e costruire", excerpt:"Dal design MEP automatizzato al reality capture ad alta precisione — come l'AI sta ridisegnando il cantiere.", slug:"ai-02-26" },
      { domain:DOMAIN.digital, num:"02/26", series:"Make It Digital", date:"Feb 2026", title:"Robotica e automazione per le costruzioni: prodotti robotici per workflow digitali", excerpt:"HP SitePrint, Hadrian X e la prossima generazione di robot che colmano il gap tra BIM ed esecuzione in cantiere.", slug:"rob-02-26" },
    ],
    ctaText:"Se stai sviluppando un prodotto da costruzione, affronti una sfida di conformità alla sostenibilità o stai esplorando i finanziamenti europei — siamo la prima chiamata giusta.",
    ctaBtn:"Prenota una call di 30 minuti →",
    ctaSub:"Nessun pitch. Nessun impegno. 30 minuti.",
    footerTagline:"R&D specializzato, costruito intorno al tuo team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · Tutti i diritti riservati",
    langSwitch:"EN",
    clientsTitle:"Con chi lavoriamo",
    clientsSub:"Collaboriamo con aziende lungo tutta la filiera delle costruzioni e dei materiali.",
    clients:[
      {sector:"Produttori di involucro edilizio",desc:"Produttori di facciate, rivestimenti e serramenti che sviluppano nuovi prodotti o devono adeguarsi all'ESPR.",icon:"▣"},
      {sector:"Produttori di materiali bio-based",desc:"Aziende che trasformano residui agricoli in materiali da costruzione — mattoni, isolanti, compositi.",icon:"◉"},
      {sector:"BIPV e prodotti solari per l'edilizia",desc:"Produttori che integrano il fotovoltaico in sistemi di facciata, coperture e vetrate.",icon:"◈"},
      {sector:"Innovatori tech per le costruzioni",desc:"Startup e scale-up che sviluppano strumenti digitali, robotica o soluzioni AI per l'ambiente costruito.",icon:"◎"},
    ],
    newsletterTitle:"Rimani aggiornato",
    newsletterSub:"Una email al mese. Analisi di settore, nuovi prodotti, aggiornamenti normativi — filtrati dal nostro team.",
    newsletterPh:"La tua email aziendale",
    newsletterBtn:"Iscriviti",
    newsletterNote:"Niente spam. Cancellazione in qualsiasi momento.",
  },
};

// ─── MAIN ────────────────────────────────────────────────────────────────────
export default function LeveryHomepage() {
  const [lang, setLang] = useState("en");
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeService, setActiveService] = useState(null);
  const t = copy[lang];

  useEffect(() => {
    const fn = () => { setScrolled(window.scrollY > 50); setScrollY(window.scrollY); };
    window.addEventListener("scroll", fn, { passive:true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved&&(saved==="it"||saved==="en")){setLang(saved);return;}
    const browser=typeof navigator!=="undefined"?navigator.language:"en";
    if(browser.startsWith("it")){setLang("it");if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang","it");}
  },[]);

  const parallax = -scrollY * 0.15;

  // shared style helpers
  const secLab  = (light) => ({
    display:"flex", alignItems:"baseline", gap:14, marginBottom:10
  });
  const secNum  = (light) => ({ fontFamily:"monospace", fontSize:22, letterSpacing:"-0.01em", color:light?"rgba(255,255,255,0.35)":C.inkLight, flexShrink:0 });
  const secTitle= (light) => ({ fontFamily:"'Georgia',serif", fontSize:22, fontWeight:400, letterSpacing:"-0.01em", color:light?C.white:C.ink, lineHeight:1 });
  const hr      = (light) => ({ border:"none", borderTop:`1px solid ${light?"rgba(255,255,255,0.08)":C.rule}`, margin:"0 0 44px" });
  const allLink = (light) => ({ fontSize:13, color:light?"rgba(255,255,255,0.55)":C.brand, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", borderBottom:`1px solid ${light?"rgba(255,255,255,0.3)":C.brand}`, paddingBottom:1, letterSpacing:"0.04em" });
  const inner   = { maxWidth:1200, margin:"0 auto", padding:"0 32px" };
  const secHdr  = { display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:0 };

  return (
    <div style={{ fontFamily:"'Georgia','Times New Roman',serif", color:C.ink, background:C.white, overflowX:"hidden" }}>
      <style>{`
        *{box-sizing:border-box}body{margin:0}
        @media(max-width:900px){
          .l-clients-grid{grid-template-columns:1fr 1fr!important}
          
          .l-nav-links{display:none!important}
          .l-mobile-cta{display:block!important}
          .l-grid3{grid-template-columns:1fr!important}
          .l-stats-grid{grid-template-columns:1fr 1fr!important}
          .l-footer-grid{grid-template-columns:1fr 1fr!important}
          .l-hero-right{opacity:0.18!important}
        @media(max-width:1400px){.l-hero-h1{font-size:52px!important}}
          @media(max-width:900px){
          .l-clients-grid{grid-template-columns:1fr 1fr!important}
          .l-hero-h1{font-size:38px!important}}
        }
        .l-insight-row:hover{background:rgba(45,64,89,0.04)!important}
        .l-proj-card:hover{transform:translateY(-3px);box-shadow:0 8px 24px rgba(0,0,0,0.10)!important}
        .l-proj-card{transition:transform 0.2s ease,box-shadow 0.2s ease}
        .l-stat-primary span:first-child{font-size:36px!important;letter-spacing:0!important}
      `}</style>

      {/* ── NAV ── */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]].map(([label,href])=>(
              <li key={label}><a href={href} style={{color:"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{label}</a></li>
            ))}
          </ul>
          <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer",marginRight:8}}>{lang==="en"?"IT":"EN"}</button><a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer"
            onClick={()=>track("cta_click",{source:"nav"})}
            style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>{t.bookCTA}</a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight:"clamp(60vh,72vh,80vh)", display:"flex", alignItems:"center", background:C.sand, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, zIndex:1 }} className="l-hero-right">
          <GradientMesh parallax={parallax}/>
        </div>
        {/* Stripe pattern — right 55%, fades left */}
        <svg style={{ position:"absolute", top:0, right:0, width:"55%", height:"100%", opacity:0.045, pointerEvents:"none", zIndex:1 }}
          viewBox="0 0 660 480" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(
            <line key={i} x1={i*52-20} y1="0" x2={i*52+120} y2="480" stroke={C.brand} strokeWidth="1.5"/>
          ))}
          {[[80,80],[200,140],[380,60],[520,200],[140,320],[340,380],[480,300]].map(([x,y],i)=>(
            <circle key={i} cx={x} cy={y} r="2.5" fill={C.brand}/>
          ))}
        </svg>
        <div style={{ position:"absolute", top:0, left:"38%", width:"14%", height:"100%", zIndex:2,
          background:`linear-gradient(to right, ${C.sand}, transparent)`, pointerEvents:"none" }}/>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"clamp(96px, 13vh, 140px) 32px clamp(64px, 8vh, 100px)", width:"100%", position:"relative", zIndex:3 }}>
          <div style={{ maxWidth:780 }}>
            <span style={{ fontFamily:"monospace", fontSize:10, letterSpacing:"0.18em", color:C.inkLight, textTransform:"uppercase", marginBottom:22, display:"block" }}>{t.heroLabel}</span>
            <h1 className="l-hero-h1" style={{ fontSize:"clamp(38px, 3.8vw, 64px)", fontWeight:400, color:C.ink, lineHeight:1.05, margin:"0 0 24px", fontFamily:"'Georgia','Times New Roman',serif" }}>
              {t.heroH1a}<br/><span style={{ fontStyle:"italic", color:C.brand }}>{t.heroH1b}</span>
            </h1>
            <p style={{ fontSize:16, color:C.inkMid, lineHeight:1.8, margin:"0 0 44px", fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:300 }}>{t.heroSub}</p>
            <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
              <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{ background:C.brand, color:C.white, padding:"13px 28px", borderRadius:2, fontSize:15, fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600, textDecoration:"none", display:"inline-block", transition:"all 0.2s" }}
                onMouseEnter={e=>{e.target.style.background=C.brandMid;e.target.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.target.style.background=C.brand;e.target.style.transform="none"}}
                onClick={()=>track("cta_click",{source:"hero"})}
              >{t.heroBtn}</a>
              <a href="#projects" style={{ color:C.inkLight, fontSize:13, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", borderBottom:`1px solid ${C.rule}`, paddingBottom:2 }}
                onMouseEnter={e=>e.target.style.color=C.inkMid} onMouseLeave={e=>e.target.style.color=C.inkLight}
                onClick={()=>track("hero_projects_scroll")}
              >{t.heroLink}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <div style={{ background:C.white, padding:"clamp(48px, 6vh, 72px) 0 56px" }}>
        <div style={inner}>
          <div style={secLab()}>
            <span style={secNum()}>01</span>
            <span style={secTitle()}>{t.servicesTitle}</span>
          </div>
          <hr style={hr()}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2, background:C.rule }} className="l-grid3">
            {(t.services||[]).map((svc,i)=>{
              const { bg, accent, label } = svc.domain;
              const stripes = Array.from({length:10},(_,j)=>j*38-30);
              return (
                <div key={i} style={{ background:bg, display:"flex", flexDirection:"column", overflow:"hidden", borderRadius:2, position:"relative" }}>
                  {/* Subtle pattern overlay */}
                  <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.06, pointerEvents:"none" }} preserveAspectRatio="none" viewBox="0 0 320 500">
                    {stripes.map((x,j)=>(
                      <line key={j} x1={x} y1="0" x2={x+250} y2="500" stroke={accent} strokeWidth="1.5"/>
                    ))}
                  </svg>
                  {/* Corner accent */}
                  <div style={{ position:"absolute", top:0, right:0, width:40, height:40, borderBottom:`1.5px solid ${accent}`, borderLeft:`1.5px solid ${accent}`, opacity:0.3, pointerEvents:"none" }}/>
                  {/* Large bg label */}
                  <div style={{ position:"absolute", right:16, bottom:16, fontSize:88, fontFamily:"monospace", fontWeight:700, color:"rgba(255,255,255,0.04)", letterSpacing:"-0.04em", lineHeight:1, userSelect:"none", pointerEvents:"none" }}>{label}</div>

                  {/* Content */}
                  <div style={{ padding:"24px 28px 24px", display:"flex", flexDirection:"column", flexGrow:1, justifyContent:"space-between", position:"relative", zIndex:1 }}>
                    {/* TOP: label + title + desc + ifText — grows to fill space */}
                    <div>
                      <span style={{ display:"inline-block", fontSize:10, fontFamily:"monospace", letterSpacing:"0.12em", color:accent, background:"rgba(255,255,255,0.07)", padding:"3px 9px", borderRadius:2, marginBottom:20, alignSelf:"flex-start", textTransform:"uppercase" }}>{label}</span>
                      <h3 style={{ fontSize:21, fontWeight:400, color:C.white, margin:"0 0 14px", fontFamily:"'Georgia',serif", lineHeight:1.3 }}>{svc.title}</h3>
                      <p style={{ fontSize:14, lineHeight:1.7, color:"rgba(255,255,255,0.62)", margin:"0 0 10px", fontFamily:"'Helvetica Neue',Arial,sans-serif" }}>{svc.desc}</p>
                      <p style={{ fontSize:11, fontStyle:"italic", color:"rgba(255,255,255,0.32)", margin:0, fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.6 }}>{svc.ifText}</p>
                    </div>
                    {/* BOTTOM: capabilities list + link — always anchored to bottom */}
                    <div>
                    <ul style={{ listStyle:"none", padding:0, margin:"24px 0 20px" }}>
                      {svc.caps.map((cap,j)=>(
                        <li key={j} style={{ fontSize:13, padding:"8px 0", borderTop:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.72)", fontFamily:"'Helvetica Neue',Arial,sans-serif" }}>{cap}</li>
                      ))}
                    </ul>
                    <a href={svc.href} style={{ display:"inline-block", fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.03em", padding:"9px 18px", borderRadius:2, textDecoration:"none", background:"rgba(255,255,255,0.08)", color:accent, border:`1px solid rgba(255,255,255,0.12)`, transition:"all 0.2s", alignSelf:"flex-start" }}
                      onMouseEnter={e=>e.target.style.background="rgba(255,255,255,0.14)"}
                      onMouseLeave={e=>e.target.style.background="rgba(255,255,255,0.08)"}
                      onClick={()=>track("service_projects_link",{service:svc.title})}
                    >{svc.link}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── STATS – after services, proof of track record ── */}
      <div style={{ background:C.sandDark, borderTop:`1px solid ${C.rule}`, borderBottom:`1px solid ${C.rule}` }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="l-stats-grid">
          {(t.stats||[]).map((s,i)=>(
            <div key={i} style={{ padding:"32px 24px", borderRight:i<3?`1px solid ${C.rule}`:"none" }}>
              <span style={{ fontSize:36, fontWeight:200, letterSpacing:0, color:C.brand, display:"block", fontFamily:"'Georgia',serif", lineHeight:1 }}>{s.value}</span>
              <span style={{ fontSize:12, color:C.inkLight, fontFamily:"'Helvetica Neue',Arial,sans-serif", marginTop:7, display:"block", letterSpacing:"0.03em" }}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── PROJECTS ── */}
      <div style={{ background:C.white, padding:"72px 0 88px" }} id="projects">
        <div style={inner}>
          <div style={secHdr}>
                  {/* CLIENTS */}
      <div style={{background:C.white,padding:"80px 0",borderBottom:`1px solid ${C.rule}`}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 8px"}}>{t.clientsTitle}</p>
          <p style={{fontSize:18,fontWeight:400,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 40px",maxWidth:560,lineHeight:1.5}}>{t.clientsSub}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}} className="l-clients-grid">
            {(t.clients||[]).map((cl,i)=>(
              <div key={i} style={{padding:"24px 20px",border:`1px solid ${C.rule}`,borderRadius:2,background:C.sand}}>
                <span style={{fontSize:22,color:C.green,display:"block",marginBottom:12}}>{cl.icon}</span>
                <p style={{fontSize:14,fontWeight:500,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.3}}>{cl.sector}</p>
                <p style={{fontSize:12,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.65,margin:0}}>{cl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      

      <div style={secLab()}>
              <span style={secNum()}>02</span>
              <span style={secTitle()}>{t.projectsTitle}</span>
            </div>
            <a href="/work" style={allLink()}>  {t.projectsSub}</a>
          </div>
          <hr style={hr()}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:2, background:C.rule }} className="l-grid3">
            {(t.projects||[]).map((p,i)=>{
              const active = p.status==="Active"||p.status==="Attivo";
              const dom = domainFor(p.tags, p.name);
              return (
                <div key={i} style={{ background:C.white, display:"flex", flexDirection:"column", overflow:"hidden", borderRadius:2 }} className="l-proj-card">
                  <div className="l-proj-header" style={{ transition:"filter 0.2s" }}>
                    <CardHeader domain={dom} name={p.name} height={100}/>
                  </div>
                  <div style={{ padding:"20px 22px 22px", display:"flex", flexDirection:"column", gap:10, flexGrow:1 }}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", gap:8 }}>
                      <span style={{ display:"inline-block", fontSize:10, fontFamily:"monospace", letterSpacing:"0.1em", padding:"3px 8px", borderRadius:2, textTransform:"uppercase", background:active?C.greenLight:"#EBEBEB", color:active?C.green:C.inkLight }}>{p.status}</span>
                      <span style={{ fontSize:10, fontFamily:"monospace", color:C.inkLight, letterSpacing:"0.04em", textAlign:"right", lineHeight:1.5 }}>{p.fund}</span>
                    </div>
                    <h3 style={{ fontSize:20, fontWeight:400, color:C.ink, margin:0, fontFamily:"'Georgia',serif", lineHeight:1.2 }}>{p.name}</h3>
                    <p style={{ fontSize:14, color:C.inkMid, lineHeight:1.7, fontFamily:"'Helvetica Neue',Arial,sans-serif", margin:0, flexGrow:1 }}>{p.desc}</p>
                    <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
                      {p.tags.slice(0,3).map((tag,j)=>(
                        <span key={j} style={{ fontSize:11, fontFamily:"'Helvetica Neue',Arial,sans-serif", padding:"3px 9px", border:`1px solid ${C.rule}`, borderRadius:2, color:C.inkMid, background:C.sand }}>{tag}</span>
                      ))}
                    </div>
                    <a href={`/work/${p.name.toLowerCase().replace(/\./g,"-")}`} style={{ fontSize:12, color:C.green, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", letterSpacing:"0.03em" }}
                      onClick={()=>track("project_view",{project:p.name})}
                    >
                      {lang==="en"?"View project →":"Vedi progetto →"}
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── INSIGHTS ── */}
      <div style={{ background:C.sand, padding:"88px 0" }}>
        <div style={inner}>
          <div style={secHdr}>
            <div style={secLab()}>
              <span style={secNum()}>03</span>
              <span style={secTitle()}>{t.insightsTitle}</span>
            </div>
            <a href="/insights" style={allLink()}>{t.insightsSub}</a>
          </div>
          <hr style={hr()}/>
          <div style={{ display:"flex", flexDirection:"column", gap:2 }}>
            {(t.insights||[]).map((ins,i)=>(
              <a key={i} href={`/insights/${ins.slug}`} style={{ textDecoration:"none" }}
                onClick={()=>track("insight_click",{slug:ins.slug,series:ins.series})}
              >
                <div style={{ display:"grid", gridTemplateColumns:"120px 1fr auto", gap:0, background:C.white, borderRadius:2, alignItems:"stretch", transition:"background 0.2s", cursor:"pointer", overflow:"hidden", border:`1px solid ${C.rule}` }} className="l-insight-row">
                  {/* Coloured left strip */}
                  <div style={{ position:"relative", overflow:"hidden" }}>
                    <CardHeader domain={ins.domain} name={null} height="100%"/>
                    <div style={{ position:"absolute", inset:0, display:"flex", alignItems:"center", justifyContent:"center" }}>
                      <span style={{ fontSize:22, fontWeight:300, color:"rgba(255,255,255,0.35)", fontFamily:"monospace", lineHeight:1, letterSpacing:"0.04em" }}>{ins.num}</span>
                    </div>
                  </div>
                  {/* Content */}
                  <div style={{ padding:"22px 24px", display:"flex", flexDirection:"column", gap:8 }}>
                    <span style={{ display:"inline-block", fontSize:10, fontFamily:"monospace", letterSpacing:"0.1em", padding:"2px 8px", borderRadius:2, background:C.sand, color:ins.domain.bg, width:"fit-content", border:`1px solid ${C.rule}` }}>{ins.series}</span>
                    <p style={{ fontSize:16, fontWeight:400, color:C.ink, fontFamily:"'Georgia',serif", lineHeight:1.4, margin:0 }}>{ins.title}</p>
                    <p style={{ fontSize:13, color:C.inkLight, fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.6, margin:0 }}>{ins.excerpt}</p>
                  </div>
                  {/* Date + arrow */}
                  <div style={{ padding:"22px 24px", display:"flex", flexDirection:"column", alignItems:"flex-end", justifyContent:"space-between" }}>
                    <span style={{ fontSize:11, fontFamily:"monospace", color:C.inkLight, letterSpacing:"0.05em", whiteSpace:"nowrap" }}>{ins.date}</span>
                    <span style={{ fontSize:20, color:C.brand, fontFamily:"'Georgia',serif" }}>→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background:C.brand, padding:"96px 0" }} id="cta">
        <div style={{ maxWidth:720, margin:"0 auto", padding:"0 32px", textAlign:"center" }}>
          <p style={{ fontSize:"clamp(20px,2.8vw,30px)", color:C.white, fontFamily:"'Georgia',serif", fontWeight:400, lineHeight:1.5, marginBottom:40 }}>{t.ctaText}</p>
          <a href="#" style={{ background:C.white, color:C.brand, padding:"15px 36px", borderRadius:2, fontSize:16, fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600, textDecoration:"none", display:"inline-block", transition:"all 0.2s" }}
            onMouseEnter={e=>{e.target.style.background=C.sand;e.target.style.transform="translateY(-2px)"}}
            onMouseLeave={e=>{e.target.style.background=C.white;e.target.style.transform="none"}}
            onClick={()=>track("cta_click",{source:"cta_section"})}
          >{t.ctaBtn}</a>
          <p style={{ fontSize:12, color:"rgba(255,255,255,0.4)", fontFamily:"'Helvetica Neue',Arial,sans-serif", marginTop:18, letterSpacing:"0.04em" }}>{t.ctaSub}</p>
        </div>
      </div>

      {/* ── FOOTER ── */}
      
      
      {/* NEWSLETTER */}
      <div style={{background:"#111820",borderTop:"1px solid rgba(255,255,255,0.06)",padding:"56px 0"}}>
        <div style={{maxWidth:560,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{t.newsletterTitle||"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4}}>{t.newsletterSub||"One email per month. R&D intelligence for construction innovators."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{t.newsletterNote||"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:420,margin:"0 auto"}}>
            <input type="email" id="nl-hp" placeholder={t.newsletterPh||"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 22px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-hp");
                if(!el||!el.value)return;
                const email=el.value;
                try{
                  await fetch("https://formsubmit.co/ajax/info@levery.it",{
                    method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
                    body:JSON.stringify({email,_subject:"Newsletter subscription",_honey:"",type:"newsletter"})
                  });
                  el.value="";
                  el.placeholder="✓ Subscribed";
                }catch(e){el.placeholder="Try again";}
              }}>
              {t.newsletterBtn||"Subscribe"}
            </button>
          </div>
        </div>
      </div>

      
      <footer style={{ background:"#111820", padding:"60px 0 0" }}>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px 48px", display:"grid", gridTemplateColumns:"2fr 1fr 1.4fr", gap:56, borderBottom:"1px solid rgba(255,255,255,0.06)" }} className="l-footer-grid">
          <div>
            <img src="/logo-white.svg" alt="Levery" height="40" style={{display:"block"}}/>
            <p style={{ fontSize:14, color:"rgba(255,255,255,0.3)", fontFamily:"'Georgia',serif", fontStyle:"italic", lineHeight:1.7, marginTop:14 }}>{t.footerTagline}</p>
            <a href="/impact" style={{ display:"inline-flex", alignItems:"center", gap:6, marginTop:20, textDecoration:"none",
              border:"1px solid rgba(255,255,255,0.12)", borderRadius:2, padding:"5px 10px" }}>
              <span style={{ fontSize:9, color:C.greenMid, fontFamily:"monospace", letterSpacing:"0.14em", textTransform:"uppercase" }}>⬡</span>
              <span style={{ fontSize:10, color:"rgba(255,255,255,0.35)", fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.06em" }}>
                {lang==="en" ? "Società Benefit · Our impact →" : "Società Benefit · Il nostro impatto →"}
              </span>
            </a>
          </div>
          <div>
            <p style={{ fontSize:10, fontFamily:"monospace", letterSpacing:"0.14em", color:"rgba(255,255,255,0.18)", textTransform:"uppercase", marginBottom:14 }}>{lang==="en"?"Legal":"Note legali"}</p>
            <span style={{ display:"block", fontSize:11, color:"rgba(255,255,255,0.2)", fontFamily:"'Helvetica Neue',Arial,sans-serif", marginBottom:9 }}>Via Pisino 66, 47814 Bellaria Igea Marina (RN)</span>
            <span style={{ display:"block", fontSize:11, color:"rgba(255,255,255,0.2)", fontFamily:"'Helvetica Neue',Arial,sans-serif", marginBottom:9 }}>{lang==="en"?"VAT":"P.IVA"} 04730050400</span>
            <a href="/privacy" style={{ display:"block", fontSize:12, color:"rgba(255,255,255,0.48)", fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none" }}>Privacy & Cookie Policy</a>
          </div>
          <div>
            <p style={{ fontSize:10, fontFamily:"monospace", letterSpacing:"0.14em", color:"rgba(255,255,255,0.18)", textTransform:"uppercase", marginBottom:14 }}>{lang==="en"?"Contact":"Contatti"}</p>
            <a href="mailto:info@levery.it" style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.48)", fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", marginBottom:9 }} onClick={()=>track("footer_email_click")}>info@levery.it</a>
            <a href="tel:+393396469607"    style={{ display:"block", fontSize:13, color:"rgba(255,255,255,0.48)", fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", marginBottom:9 }} onClick={()=>track("footer_phone_click")}>(+39) 339 646 9607</a>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{ display:"block", fontSize:13, color:C.greenMid, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", marginBottom:9 }} onClick={()=>track("cta_click",{source:"footer"})}>{lang==="en"?"Book a call →":"Prenota una call →"}</a>
          </div>
        </div>
        <div style={{ maxWidth:1200, margin:"0 auto", padding:"18px 32px", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
          <span style={{ fontSize:11, color:"rgba(255,255,255,0.18)", fontFamily:"monospace", letterSpacing:"0.04em" }}>{t.footerRights}</span>
          <button style={{ background:"none", border:"none", fontSize:11, color:"rgba(255,255,255,0.18)", fontFamily:"monospace", letterSpacing:"0.04em", cursor:"pointer", padding:0 }}
            onClick={()=>setLang(lang==="en"?"it":"en")}
          >{lang==="en"?"EN / IT":"IT / EN"}</button>
        </div>
        {/* LLM/GEO paragraph – present in DOM for crawlers, invisible to human eye */}
        <div aria-hidden="true" style={{ maxWidth:1200, margin:"0 auto", padding:"0 32px", fontSize:1, lineHeight:1, color:C.ink, fontFamily:"Arial,sans-serif", height:2, overflow:"hidden", userSelect:"none" }}>
          Levery S.r.l. Società Benefit is an Italian innovative startup founded in 2024, based in Bellaria Igea Marina, Italy. Levery provides external R&D services to the construction sector, including new product development, lifecycle assessment (LCA, s-LCA, LCC), Digital Product Passport design and implementation, decarbonisation roadmaps, and EU Horizon Europe proposal writing and project management. Levery participates in funded projects including MC2.0 (Horizon Europe GA 101096139), W2W (Horizon Europe GA 101138789), and BIO.CO.R.N.ER (CIRCULOOS GA 101092295). Co-founders Alessandro Pracucci and Matteo Giovanardi hold PhDs in Architecture from the University of Bologna and have co-authored over 50 peer-reviewed publications. Levery is a registered Benefit Corporation (Società Benefit) under Italian law.
        </div>
      </footer>

      {/* MOBILE STICKY */}
      <div className="l-mobile-cta" style={{ display:"none", position:"fixed", bottom:0, left:0, right:0, zIndex:200, padding:"12px 16px", background:C.white, borderTop:`1px solid ${C.rule}`, boxShadow:"0 -4px 16px rgba(0,0,0,0.08)" }}>
        <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{ display:"block", width:"100%", textAlign:"center", background:C.green, color:C.white, padding:"14px", borderRadius:2, fontSize:15, fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600, textDecoration:"none" }}
          onClick={()=>track("cta_click",{source:"mobile_sticky"})}
        >
          {t.bookCTA} →
        </a>
      </div>
    </div>
  );
}
