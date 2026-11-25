'use client'
import { useState, useEffect } from "react";

// ─── DESIGN TOKENS ───────────────────────────────────────────────────────────
const C = {
  brand:      "#2D4059",
  brandMid:   "#3A5274",
  green:      "#1E6B45",
  greenMid:   "#2A8A58",
  greenLight: "#E8F5EE",
  sand:       "#F5F2EC",   // cream – hero, insights section bg
  sandDark:   "#EDE9E1",   // darker cream – stats section bg
  white:      "#FFFFFF",   // services, projects section bg
  ink:        "#1A1A1A",
  inkMid:     "#4A4A4A",
  inkLight:   "#8A8A8A",
  rule:       "#E0DBD3",
  footerBg:   "#111820",   // near-black footer – darker than brand
};

// ─── COLOUR PALETTE per domain ───────────────────────────────────────────────
const DOMAIN = {
  digital:  { bg:"#1C2D40", accent:"#7EC8E3",  label:"R&D",   pill:"#7EC8E3"  },
  green:    { bg:"#1A3D2B", accent:"#A8E6CF",  label:"ECO",   pill:"#A8E6CF"  },
  funding:  { bg:"#2A2010", accent:"#FFD97D",  label:"EU",    pill:"#FFD97D"  },
  xr:       { bg:"#2A1E3D", accent:"#C3A8E6",  label:"XR",    pill:"#C3A8E6"  },
  human:    { bg:"#2A1E3D", accent:"#C3A8E6",  label:"HUMAN", pill:"#C3A8E6"  },
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

function LeveryLogo({ color="#fff", height=28 }) {
  const wordHeight = Math.round(height * 18/28);
  return (
    <div style={{ display:"flex", alignItems:"center", gap:8, flexShrink:0 }}>
      <svg height={height} viewBox="0 0 38 48" fill="none" style={{ display:"block" }}>
        <g transform="translate(0,1) scale(0.245)">
          <g transform="matrix(3.828,0,0,3.828,14,-51.45)" fill={color}><path d={MONO}/></g>
        </g>
      </svg>
      <svg height={wordHeight} viewBox="0 0 43 17" fill="none" style={{ display:"block" }}>
        <g transform="scale(0.245)">
          <g transform="matrix(1.393,0,0,1.393,-3.34,-9.11)" fill={color}><path d={WORD}/></g>
        </g>
      </svg>
    </div>
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

      {/* Right-side fade mask – protects left text */}
      <div style={{
        position:"absolute", inset:0, zIndex:2,
        background:"linear-gradient(to right, #F5F2EC 28%, transparent 60%)"
      }}/>

      {/* Blobs – muted, work on cream background */}
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
    heroH1a:"Your next building envelope product,",
    heroH1b:"from idea to market.",
    heroSub:"From interior finishes to structural, insulating and external layers: we develop your product, make it work with the rest of the envelope and qualify it for Europe, even where no standard exists yet. Get there first, without carrying the R&D alone.",
    heroBtn:"Book a 30-minute call →",
    heroLink:"Where to start ↓",
    stats:[
      {value:"3",   label:"New products co-developed"},
      {value:"€700K+",label:"Direct R&D budget managed"},
      {value:"€15M+",label:"EU projects contributed to"},
      {value:"50+",  label:"Peer-reviewed publications"},
    ],
    servicesTitle:"What we do",
    services:[
      { domain:DOMAIN.digital, icon:"◈", title:"New Product & Process Development",
        desc:"From concept development and material testing to prototype validation and pre-commercial launch, we run the full R&D cycle so your team can focus on production.",
        ifText:"Relevant if: you are developing a new building material, component, system or production process, including robotics and automation.",
        caps:["Concept development & prototyping","Integration with the other envelope layers","Material selection & testing","Market validation & competitive benchmarking","Patent research & IP support","Business model definition"],
        ctaLink:"Start with an envelope integration assessment →", ctaHref:"/contact?topic=envelope-integration",
        link:"See related projects →", href:"/work?filter=product" },
      { domain:DOMAIN.green, icon:"◉", title:"Qualification & Compliance",
        desc:"ETA and CE marking, testing in European laboratories, Digital Product Passport. We turn regulatory requirements into a clear path to market, step by step.",
        ifText:"Relevant if: your product is not covered by a harmonised standard, or your clients are starting to ask for structured product data.",
        caps:["ETA & CE marking pathways","Products not covered by harmonised standards",<a key="bea" href="https://www.buildingenvelopealliance.eu/" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"underline",textUnderlineOffset:3}}>Testing with the BEA laboratory network</a>,"Digital Product Passport (DeePPy)","ESPR & CPR readiness"],
        ctaLink:"Start with an ETA feasibility study →", ctaHref:"/contact?topic=eta-feasibility",
        ctaLink2:"Start with a one-product DPP pilot →", ctaHref2:"/contact?topic=dpp-pilot",
        link:"See related projects →", href:"/work?filter=qualification" },
    ],
    fundingBand:{
      text:"When it makes sense, we fund innovation together. EU and national funding, research partnerships and consortia, to share the cost and the risk of your next product.",
      link:"How we work with EU funding →", href:"/work?filter=funding",
    },
    projectsTitle:"Active projects",
    projectsSub:"All projects →",
    projects:[
      { name:"WINLOOP", slug:"winloop", fund:"Horizon Europe",                     tags:["Circular Economy","Window Lifecycle","DPP"],   desc:"Technologies, digitisation tools and business models for closing the life cycle of windows – from design to end-of-life recovery.", status:"Active" },
      { name:"DeePPy",  slug:"deeppy",  fund:"Internal project · InTransit · RURBANIVE", tags:["DPP","ESPR","SaaS"],                    desc:"SaaS platform for Digital Product Passports in construction – all product technical data in one place, organised and ready to share.", status:"Active" },
      { name:"W2W",     slug:"w2w",     fund:"Horizon Europe · GA 101138789",      tags:["Circular Economy","Façade Systems","DPP"],   desc:"Wood waste valorisation for prefabricated façade systems. Acoustic testing, façade engineering, Digital Product Passport.", status:"Active" },
    ],
    clientsTitle:"Who we work with",
    clientsSub:"We work with companies across the construction and materials supply chain.",
    clients:[
      {sector:"Building envelope manufacturers",desc:"Manufacturers of any envelope layer, from interior finishes and boards to insulation, structural systems, membranes, cladding, windows and facades, developing new products or preparing for ESPR and CPR.",icon:"▣"},
      {sector:"Bio-based material producers",desc:"Companies transforming agricultural residues into construction materials: bricks, insulation, composites.",icon:"◉"},
      {sector:"BIPV and solar building products",desc:"Manufacturers integrating photovoltaics into facade systems, roofing and glazing.",icon:"◈"},
      {sector:"Construction tech innovators",desc:"Startups and scale-ups developing digital tools, robotics or AI solutions for the built environment.",icon:"◎"},
    ],
    insightsTitle:"What we are watching",
    insightsSub:"All insights →",
    insights:[
      { domain:DOMAIN.green,   num:"12/26", series:"Make It Green",   date:"Nov 2026", title:"Materials and building systems designed for circularity", excerpt:"From dry-stacked bricks to compostable acoustic panels: eight European products designed to be taken apart, made from waste or taken back at end of life.", slug:"eco-02-26" },
      { domain:DOMAIN.human,   num:"11/26", series:"Make It Human",   date:"Oct 2026", title:"Designers, engineers, manufacturers and operators: who keeps human ingenuity at the core of AI and robotics", excerpt:"From computational design studios to facility management platforms – mapping the actors making Human-in-the-Loop a structural approach, not a transitional one.", slug:"hitl-01-26" },
      { domain:DOMAIN.digital, num:"10/26", series:"Make It Digital", date:"Oct 2026", title:"Who is turning product knowledge into a competitive advantage", excerpt:"From Cobuilder to DeePPy – the European actors building structured product data infrastructure before DPP regulations become mandatory.", slug:"trk-01-26" },
      ],
    ctaText:"If you are developing a construction product, facing a sustainability compliance challenge, or exploring EU funding – we are the right first call.",
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
    heroH1a:"Il vostro prossimo prodotto per l'involucro,",
    heroH1b:"dall'idea al mercato.",
    heroSub:"Dalla finitura interna agli strati strutturali, isolanti ed esterni: sviluppiamo il vostro prodotto, lo facciamo dialogare con il resto dell'involucro e lo qualifichiamo per l'Europa, anche dove una norma ancora non c'è. Per arrivare primi, senza portare da soli il peso della R&D.",
    heroBtn:"Prenota una call di 30 minuti →",
    heroLink:"Da dove partire ↓",
    stats:[
      {value:"3",   label:"Nuovi prodotti sviluppati insieme ai clienti"},
      {value:"€700K+",label:"Budget R&D gestito direttamente"},
      {value:"€15M+",label:"Progetti europei a cui abbiamo contribuito"},
      {value:"50+",  label:"Pubblicazioni scientifiche"},
    ],
    servicesTitle:"Cosa facciamo",
    services:[
      { domain:DOMAIN.digital, icon:"◈", title:"Sviluppo di nuovi prodotti e processi",
        desc:"Dallo sviluppo del concept e dai test sui materiali fino alla validazione del prototipo e al lancio pre-commerciale, gestiamo l'intero ciclo di R&D, così il vostro team può concentrarsi sulla produzione.",
        ifText:"Utile se: state sviluppando un nuovo materiale, componente, sistema o processo produttivo, anche con robotica e automazione.",
        caps:["Sviluppo del concept e prototipazione","Integrazione con gli altri strati dell'involucro","Scelta e test dei materiali","Validazione di mercato e benchmark con i concorrenti","Ricerca brevettuale e supporto sulla proprietà intellettuale","Definizione del modello di business"],
        ctaLink:"Partite da un'analisi di integrazione nell'involucro →", ctaHref:"/contact?topic=envelope-integration",
        link:"Vedi i progetti collegati →", href:"/work?filter=product" },
      { domain:DOMAIN.green, icon:"◉", title:"Qualifica e conformità",
        desc:"ETA e marcatura CE, test nei laboratori europei, Digital Product Passport. Trasformiamo i requisiti normativi in un percorso chiaro verso il mercato, un passo alla volta.",
        ifText:"Utile se: il vostro prodotto non è coperto da una norma armonizzata, oppure i vostri clienti iniziano a chiedere dati di prodotto strutturati.",
        caps:["Percorsi ETA e marcatura CE","Prodotti non coperti da norme armonizzate",<a key="bea" href="https://www.buildingenvelopealliance.eu/" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"underline",textUnderlineOffset:3}}>Test con la rete di laboratori BEA</a>,"Digital Product Passport (DeePPy)","Preparazione a ESPR e CPR"],
        ctaLink:"Partite da uno studio di fattibilità ETA →", ctaHref:"/contact?topic=eta-feasibility",
        ctaLink2:"Partite da un pilota DPP su un prodotto →", ctaHref2:"/contact?topic=dpp-pilot",
        link:"Vedi i progetti collegati →", href:"/work?filter=qualification" },
    ],
    fundingBand:{
      text:"Quando ha senso, finanziamo insieme l'innovazione. Fondi europei e nazionali, partenariati di ricerca e consorzi, per condividere costi e rischi del vostro prossimo prodotto.",
      link:"Come lavoriamo con i fondi europei →", href:"/work?filter=funding",
    },
    projectsTitle:"Progetti attivi",
    projectsSub:"Tutti i progetti →",
    projects:[
      { name:"WINLOOP", slug:"winloop", fund:"Horizon Europe",                          tags:["Economia Circolare","Ciclo di vita serramenti","DPP"], desc:"Tecnologie, strumenti di digitalizzazione e modelli di business per chiudere il ciclo di vita dei serramenti – dalla progettazione al recupero.", status:"Attivo" },
      { name:"DeePPy",  slug:"deeppy",  fund:"Progetto interno · InTransit · RURBANIVE", tags:["DPP","ESPR","SaaS"],                                  desc:"Piattaforma SaaS per Digital Product Passport nel settore costruzioni – tutte le informazioni tecniche dei prodotti in un unico posto, organizzate e pronte da condividere.", status:"Attivo" },
      { name:"W2W",     slug:"w2w",     fund:"Horizon Europe · GA 101138789",           tags:["Economia Circolare","Sistemi di Facciata","DPP"],      desc:"Valorizzazione dei rifiuti di legno per sistemi di facciata prefabbricati. Test acustici, ingegneria della facciata, Passaporto Digitale di Prodotto.", status:"Attivo" },
    ],
    insightsTitle:"Quello che stiamo osservando",insights:[
      { domain:DOMAIN.green,   num:"12/26", series:"Make It Green",   date:"Nov 2026", title:"Materiali e sistemi costruttivi progettati per la circolarità", excerpt:"Dai mattoni posati a secco ai pannelli acustici compostabili: otto prodotti europei progettati per essere smontati, nati da scarti o ritirati a fine vita.", slug:"eco-02-26" },
      { domain:DOMAIN.human,   num:"11/26", series:"Make It Human",   date:"Ott 2026", title:"Progettisti, ingegneri, produttori e gestori: chi tiene l’ingegno umano al centro di AI e robotica", excerpt:"Dagli studi di progettazione computazionale alle piattaforme di facility management – mappa degli attori che fanno dello Human-in-the-Loop un approccio strutturale, non transitorio.", slug:"hitl-01-26" },
      { domain:DOMAIN.digital, num:"10/26", series:"Make It Digital", date:"Ott 2026", title:"Chi sta trasformando la conoscenza del prodotto in vantaggio competitivo", excerpt:"Da Cobuilder a DeePPy – gli attori europei che costruiscono infrastrutture di dati di prodotto strutturati prima che le normative DPP diventino obbligatorie.", slug:"trk-01-26" },
      ],
    ctaText:"Se stai sviluppando un prodotto da costruzione, affronti una sfida di conformità alla sostenibilità o stai esplorando i finanziamenti europei – siamo la prima chiamata giusta.",
    ctaBtn:"Prenota una call di 30 minuti →",
    ctaSub:"Nessun pitch. Nessun impegno. 30 minuti.",
    footerTagline:"R&D specializzato, costruito intorno al tuo team.",
    footerRights:"© 2026 Levery S.r.l. Società Benefit · Tutti i diritti riservati",
    langSwitch:"EN",
    clientsTitle:"Con chi lavoriamo",
    clientsSub:"Collaboriamo con aziende lungo tutta la filiera delle costruzioni e dei materiali.",
    clients:[
      {sector:"Produttori dell'involucro edilizio",desc:"Produttori di ogni strato dell'involucro, dalle finiture interne e i pannelli a isolanti, sistemi strutturali, membrane, rivestimenti, serramenti e facciate, che sviluppano nuovi prodotti o si preparano a ESPR e CPR.",icon:"▣"},
      {sector:"Produttori di materiali bio-based",desc:"Aziende che trasformano residui agricoli in materiali da costruzione: mattoni, isolanti, compositi.",icon:"◉"},
      {sector:"BIPV e prodotti solari per l'edilizia",desc:"Produttori che integrano il fotovoltaico in sistemi di facciata, coperture e vetrate.",icon:"◈"},
      {sector:"Innovatori tech per le costruzioni",desc:"Startup e scale-up che sviluppano strumenti digitali, robotica o soluzioni AI per l'ambiente costruito.",icon:"◎"},
    ],
    newsletterTitle:"Rimani aggiornato",
    newsletterSub:"Una email al mese. Analisi di settore, nuovi prodotti, aggiornamenti normativi – filtrati dal nostro team.",
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
          .l-grid2{grid-template-columns:1fr!important}
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
          <a href="/" style={{textDecoration:"none",display:"flex",alignItems:"center",gap:9}}><img src="/logo-icon.svg" alt="" height="28" style={{display:"block"}}/><span style={{fontFamily:"'Gilmer Heavy',sans-serif",fontSize:19,color:"#fff",letterSpacing:"-0.01em",lineHeight:1,userSelect:"none"}}>Levery</span></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","Lavori","/work"],["Products","Prodotti","/products"],["Insights","Insights","/insights"],["Impact","Impatto","/impact"],["Team","Team","/team"],["Contact","Contatti","/contact"]].map(([en,it,path])=>(
              <li key={path}><a href={path} style={{color:"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",paddingBottom:2}}
              >{lang==="it"?it:en}</a></li>
            ))}
          </ul>
          <div style={{display:"flex",alignItems:"center",gap:8}}>
            <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer"}}
            >{lang==="en"?"IT":"EN"}</button>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}
              onClick={()=>track("cta_click",{source:"nav"})}
            >{lang==="it"?"Prenota una call":"Book a call"}</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight:"520px", display:"flex", alignItems:"center", background:C.sand, position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0, zIndex:1 }} className="l-hero-right">
          <GradientMesh parallax={parallax}/>
        </div>
        {/* Stripe pattern – right 55%, fades left */}
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
            <h1 className="l-hero-h1" style={{ fontSize:"clamp(36px, 3.5vw, 52px)", fontWeight:400, color:C.ink, lineHeight:1.05, margin:"0 0 16px", fontFamily:"'Georgia','Times New Roman',serif" }}>
              {t.heroH1a}<br/><span style={{ fontStyle:"italic", color:C.brand }}>{t.heroH1b}</span>
            </h1>
            <p style={{ fontSize:16, color:C.inkMid, lineHeight:1.8, margin:"0 0 32px", fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:300 }}>{lang==="it" ? <>Affianchiamo produttori e imprese del settore costruzioni<br/>nello sviluppo di nuovi prodotti e processi, nei percorsi di sostenibilità e nell'accesso ai finanziamenti europei.</> : <>We work alongside manufacturers and construction companies<br/>in the development of new products and processes, in sustainability pathways and in access to European funding.</>}</p>
            <div style={{ display:"flex", alignItems:"center", gap:24, flexWrap:"wrap" }}>
              <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{ background:C.brand, color:C.white, padding:"13px 28px", borderRadius:2, fontSize:15, fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600, textDecoration:"none", display:"inline-block", transition:"all 0.2s" }}
                onMouseEnter={e=>{e.target.style.background=C.brandMid;e.target.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.target.style.background=C.brand;e.target.style.transform="none"}}
                onClick={()=>track("cta_click",{source:"hero"})}
              >{t.heroBtn}</a>
              <a href="#services" style={{ color:C.inkLight, fontSize:13, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", borderBottom:`1px solid ${C.rule}`, paddingBottom:2 }}
                onMouseEnter={e=>e.target.style.color=C.inkMid} onMouseLeave={e=>e.target.style.color=C.inkLight}
                onClick={()=>track("hero_services_scroll")}
              >{t.heroLink}</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <div id="services" style={{ background:C.white, padding:"clamp(48px, 6vh, 72px) 0 0", scrollMarginTop:"80px" }}>
        <div style={inner}>
          <div style={secLab()}>
            <span style={secNum()}>01</span>
            <span style={secTitle()}>{t.servicesTitle}</span>
          </div>
          <hr style={hr()}/>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:2, background:C.rule }} className="l-grid2">
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
                    {/* TOP: label + title + desc + ifText */}
                    <div>
                      <span style={{ display:"inline-block", fontSize:10, fontFamily:"monospace", letterSpacing:"0.12em", color:accent, background:"rgba(255,255,255,0.07)", padding:"3px 9px", borderRadius:2, marginBottom:20, alignSelf:"flex-start", textTransform:"uppercase" }}>{label}</span>
                      <h3 style={{ fontSize:21, fontWeight:400, color:C.white, margin:"0 0 14px", fontFamily:"'Georgia',serif", lineHeight:1.3 }}>{svc.title}</h3>
                      <p style={{ fontSize:14, lineHeight:1.7, color:"rgba(255,255,255,0.62)", margin:"0 0 10px", fontFamily:"'Helvetica Neue',Arial,sans-serif" }}>{svc.desc}</p>
                      <p style={{ fontSize:11, fontStyle:"italic", color:"rgba(255,255,255,0.32)", margin:0, fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.6 }}>{svc.ifText}</p>
                    </div>
                    {/* BOTTOM: capabilities list + CTAs + secondary link */}
                    <div>
                      <ul style={{ listStyle:"none", padding:0, margin:"24px 0 20px" }}>
                        {svc.caps.map((cap,j)=>(
                          <li key={j} style={{ fontSize:13, padding:"8px 0", borderTop:"1px solid rgba(255,255,255,0.08)", color:"rgba(255,255,255,0.72)", fontFamily:"'Helvetica Neue',Arial,sans-serif" }}>{cap}</li>
                        ))}
                      </ul>
                      <div style={{ display:"flex", flexDirection:"column", gap:8, marginBottom:16 }}>
                        <a href={svc.ctaHref} style={{ display:"inline-block", fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.03em", padding:"10px 18px", borderRadius:2, textDecoration:"none", background:accent, color:bg, border:"none", transition:"all 0.2s", alignSelf:"flex-start", fontWeight:500 }}
                          onMouseEnter={e=>e.target.style.opacity="0.88"} onMouseLeave={e=>e.target.style.opacity="1"}
                          onClick={()=>track("service_cta_click",{service:svc.title,cta:svc.ctaHref})}
                        >{svc.ctaLink}</a>
                        {svc.ctaLink2 && (
                          <a href={svc.ctaHref2} style={{ display:"inline-block", fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.03em", padding:"10px 18px", borderRadius:2, textDecoration:"none", background:"rgba(255,255,255,0.08)", color:accent, border:`1px solid rgba(255,255,255,0.12)`, transition:"all 0.2s", alignSelf:"flex-start" }}
                            onMouseEnter={e=>e.target.style.background="rgba(255,255,255,0.14)"} onMouseLeave={e=>e.target.style.background="rgba(255,255,255,0.08)"}
                            onClick={()=>track("service_cta_click",{service:svc.title,cta:svc.ctaHref2})}
                          >{svc.ctaLink2}</a>
                        )}
                      </div>
                      <a href={svc.href} style={{ display:"inline-block", fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif", letterSpacing:"0.03em", color:"rgba(255,255,255,0.4)", textDecoration:"none", borderBottom:"1px solid rgba(255,255,255,0.15)", paddingBottom:1 }}
                        onMouseEnter={e=>e.target.style.color="rgba(255,255,255,0.7)"} onMouseLeave={e=>e.target.style.color="rgba(255,255,255,0.4)"}
                        onClick={()=>track("service_projects_link",{service:svc.title})}
                      >{svc.link}</a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Funding band */}
          {t.fundingBand && (
            <div style={{ background:C.sandDark, borderTop:`1px solid ${C.rule}`, borderBottom:`1px solid ${C.rule}`, padding:"28px 32px" }}>
              <div style={{ maxWidth:1200, margin:"0 auto", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:16 }}>
                <p style={{ fontSize:14, color:C.inkMid, fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.6, margin:0, maxWidth:680 }}>{t.fundingBand.text}</p>
                <a href={t.fundingBand.href} style={{ fontSize:13, color:C.brand, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", borderBottom:`1px solid ${C.brand}`, paddingBottom:1, whiteSpace:"nowrap" }}
                  onMouseEnter={e=>e.target.style.opacity="0.7"} onMouseLeave={e=>e.target.style.opacity="1"}
                  onClick={()=>track("funding_band_click")}
                >{t.fundingBand.link}</a>
              </div>
            </div>
          )}

          {/* White separator */}
          <div style={{ height:32, background:"#fff" }} />

          {/* BEA block – compact horizontal band */}
          <div style={{ margin:0, borderTop:`1px solid ${C.brand}`, borderBottom:`1px solid ${C.brand}`, background:"#F0F7FC" }}>
            <div style={{ maxWidth:1200, margin:"0 auto", padding:"20px 32px", display:"flex", alignItems:"center", gap:20, flexWrap:"wrap" }}>
              {/* BEA logo */}
              <img src="data:image/png;base64,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" alt="Building Envelope Alliance" style={{ height:28, width:"auto", objectFit:"contain", objectPosition:"left", flexShrink:0 }} />
              <div style={{ width:1, height:36, background:"#C8DFE8", flexShrink:0 }} />
              {/* Levery wordmark + FOUNDING MEMBER */}
              <div style={{ display:"flex", alignItems:"center", gap:10, flexShrink:0 }}>
                <LeveryLogo color={C.brand} height={18} />
                <span style={{ display:"inline-block", width:1, height:"1em", background:C.brand, opacity:0.4, verticalAlign:"middle" }} />
                <span style={{ fontSize:9, fontFamily:"monospace", letterSpacing:"0.14em", color:C.brand, textTransform:"uppercase", whiteSpace:"nowrap" }}>Founding member</span>
              </div>
              <div style={{ width:1, height:36, background:"#C8DFE8", flexShrink:0 }} />
              {/* Description */}
              <p style={{ fontSize:13, color:"#2A3A44", fontFamily:"'Helvetica Neue',Arial,sans-serif", lineHeight:1.55, margin:0, flex:1, minWidth:220 }}>
                {lang==="it"
                  ? "Fondata nel 2026, BEA riunisce i principali esperti europei di involucro edilizio per offrire servizi specialistici di consulenza, test e formazione. Levery ne è socia fondatrice e Alessandro Pracucci guida il comitato dei servizi per PMI e industrie."
                  : "Founded in 2026, BEA brings together Europe's leading building envelope experts to provide specialist consulting, testing and training services. Levery is a founding member and Alessandro Pracucci chairs the services committee for SMEs and industry."
                }
              </p>
              {/* CTA column */}
              <div style={{ display:"flex", flexDirection:"column", alignItems:"flex-start", gap:10, flexShrink:0 }}>
                <a href="/contact?topic=bea-screening"
                  style={{ display:"inline-block", background:C.brand, color:"#fff", padding:"10px 20px", borderRadius:2, fontSize:12, fontFamily:"'Helvetica Neue',Arial,sans-serif", fontWeight:600, textDecoration:"none", whiteSpace:"nowrap" }}
                  onClick={()=>track("bea_network_click")}
                >
                  {lang==="it" ? "Accedi alla rete →" : "Access the network →"}
                </a>
                <a href="https://www.buildingenvelopealliance.eu/" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize:11, color:C.brand, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", borderBottom:`1px solid ${C.brand}`, paddingBottom:1, whiteSpace:"nowrap" }}
                >
                  {lang==="it" ? "Chi è BEA ↗" : "About BEA ↗"}
                </a>
              </div>
            </div>
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

      {/* ── CLIENTS ── */}
      <div style={{background:C.white,padding:"clamp(48px,6vh,72px) 0 56px",borderBottom:`1px solid ${C.rule}`}}>
        <div style={inner}>
          <div style={secHdr}>
            <div style={secLab()}>
              <span style={secNum()}>02</span>
              <span style={secTitle()}>{t.clientsTitle}</span>
            </div>
          </div>
          <p style={{fontSize:16,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontStyle:"italic",margin:"8px 0 32px",maxWidth:560,lineHeight:1.6}}>{t.clientsSub}</p>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:20}} className="l-clients-grid">
            {(t.clients||[]).map((cl,i)=>(
              <div key={i} style={{padding:"24px 20px",border:`1px solid ${C.rule}`,borderRadius:2,background:C.sand}}>
                <span style={{fontSize:28,color:C.green,display:"block",marginBottom:14}}>{cl.icon}</span>
                <p style={{fontSize:18,fontWeight:400,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 10px",lineHeight:1.25}}>{cl.sector}</p>
                <p style={{fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.65,margin:0}}>{cl.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* ── PROJECTS ── */}
            <div id="projects" style={{ background:C.white, padding:"clamp(48px, 6vh, 72px) 0 56px", scrollMarginTop:"80px" }}>
        <div style={inner}>
          <div style={secHdr}>
            <div style={secLab()}>
              <span style={secNum()}>03</span>
              <span style={secTitle()}>{t.projectsTitle}</span>
            </div>
            <a href="/work" style={allLink()}>{t.projectsSub}</a>
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
                    <a href={`/work/${p.slug||p.name.toLowerCase().split(".").join("-")}`} style={{ fontSize:12, color:C.green, fontFamily:"'Helvetica Neue',Arial,sans-serif", textDecoration:"none", letterSpacing:"0.03em" }}
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
              <span style={secNum()}>04</span>
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
      {/* NEWSLETTER */}
      <div style={{background:"#111820",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4,whiteSpace:"pre-line"}}>{lang==="it"?"Una email al mese.\nNotizie R&D e innovazione per il settore delle costruzioni.":"One email per month.\nR&D and innovation news for the construction industry."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-home" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-home");
                if(!el||!el.value)return;
                try{
                  await fetch("https://formspree.io/f/xdajryvo",{
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
            <div style={{display:"flex",gap:8,marginTop:16,flexWrap:"wrap"}}>
              <a href="/impact" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",borderRadius:2,padding:"4px 10px"}}>
                <span style={{fontSize:9,color:"#A8E6CF",fontFamily:"monospace"}}>⬡</span>
                <span style={{fontSize:10,color:"rgba(255,255,255,0.35)",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"0.06em"}}>{lang==="it"?"Società Benefit · Il nostro impatto →":"Società Benefit · Our impact →"}</span>
              </a>
              <a href="https://www.buildingenvelopealliance.eu/" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:6,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",borderRadius:2,padding:"4px 10px"}}>
                <span style={{fontSize:9,color:"#7EC8E3",fontFamily:"monospace"}}>◈</span>
                <span style={{fontSize:10,color:"rgba(255,255,255,0.35)",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"0.06em"}}>{lang==="it"?"Socio fondatore BEA →":"Founding member of BEA →"}</span>
              </a>
            </div>
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
