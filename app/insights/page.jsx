'use client'
import { useState, useEffect } from "react";

const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",sand:"#F5F2EC",
  ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const DOMAIN={
  digital:{bg:"#1C2D40",accent:"#7EC8E3",label:"R&D"},
  green:{bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO"},
  human:{bg:"#2A1E3D",accent:"#C3A8E6",label:"HUMAN"},
};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

// ─── ARTICLES ────────────────────────────────────────────────────────────────
const ARTICLES=[
  {slug:"bio-03-26",series:"Make It Green",sub:"Bio-03",num:"04/26",domain:"green",author:"AP",date:"Apr 2, 2026",
   title:"Bio-based Architecture: Project and Case Studies for the Future of Construction",
   excerpt:"Six projects completed between 2023 and 2026 — from Roots Hamburg to Casa di Luce — demonstrating how biocomposites and natural fibers achieve equivalent or superior technical performance.",
   hero:"/images/blog/jametgued-1920w.jpg"},
  {slug:"ai-02-26",series:"Make It Digital",sub:"AI-02",num:"03/26",domain:"human",author:"MG",date:"Feb 25, 2026",
   title:"AI-based solutions for the construction sector: Innovative products for designing and constructing",
   excerpt:"The landscape of AI-based solutions is expanding rapidly — from automated MEP design to high-precision reality capture. Examining frontier products addressing the industry's most persistent labor shortages.",
   hero:"/images/blog/pexels-34804017-1920w.jpeg"},
  {slug:"rob-02-26",series:"Make It Digital",sub:"Rob-02",num:"02/26",domain:"digital",author:"AP",date:"Feb 3, 2026",
   title:"Robotic & Automation for Construction: Robotic Products for Digital Workflows",
   excerpt:"Robotic units bridging the gap between digital BIM representation and jobsite execution — HP SitePrint, FBR Hadrian X, and autonomous site management platforms.",
   hero:"/images/blog/pexels-17180807-1920w.jpeg"},
  {slug:"bio-02-26",series:"Make It Green",sub:"Bio-02",num:"01/26",domain:"green",author:"AP",date:"Jan 7, 2026",
   title:"Bio-based building materials & products for construction: innovative technologies",
   excerpt:"From mycelium insulation to hemp bricks — high-performance bio-based composites redefining the building envelope as active carbon sinks.",
   hero:"/images/blog/crop2.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29-1920w.jpg"},
  {slug:"ai-01-25",series:"Make It Human",sub:"AI-01",num:"12/25",domain:"human",author:"MG",date:"Nov 26, 2025",
   title:"AI as a Copilot for Construction: Actors & Stakeholders",
   excerpt:"AI is shifting construction from reactive to predictive workflows — mapping the ecosystem of technology developers, data providers and end-users driving this transformation.",
   hero:"/images/blog/pexels-30530416-1920w.jpeg"},
  {slug:"rob-01-25",series:"Make It Digital",sub:"Rob-01",num:"11/25",domain:"digital",author:"AP",date:"Oct 29, 2025",
   title:"Robotic & Automation for Construction: Actors & Stakeholders",
   excerpt:"Understanding the key actors — from equipment manufacturers to research entities — driving the shift toward automated, digitally integrated construction.",
   hero:"/images/blog/pexels-10119310-1920w.jpeg"},
  {slug:"bio-01-25",series:"Make It Green",sub:"Bio-01",num:"08/25",domain:"green",author:"AP",date:"Oct 1, 2025",
   title:"Bio-based Building Materials & Products for Construction: Actors & Stakeholders",
   excerpt:"The transition to bio-based construction requires a fundamental shift in the value chain — from farmers growing raw materials to policymakers setting new standards.",
   hero:"/images/blog/ladrillos-canamo-1920w.jpg"},
  {slug:"xr-03-25",series:"Make It Human",sub:"XR-03",num:"07/25",domain:"human",author:"AP",date:"Jul 2025",
   title:"Stepping into the Future: How ARyze is Revolutionizing Building Maintenance",
   excerpt:"XR solutions as a technological enabler for building O&M — immersive document visualization, remote assistance, advanced diagnostics and automated reporting with ARyze.",
   hero:"/images/blog/Immagine-2025-06-26-104300-1920w.jpg"},
  {slug:"dpp-03-25",series:"Make It Digital",sub:"DPP-03",num:"06/25",domain:"digital",author:"AP",date:"Jun 2025",
   title:"DeePPy: Revolutionizing Transparency in Construction with the Digital Product Passport",
   excerpt:"How DeePPy's guided DPP creation, supplier data management and impact configurator are making ESPR compliance accessible to construction product manufacturers.",
   hero:"/images/blog/immagine-1-1920w.jpg"},
  {slug:"bipv-03-25",series:"Make It Green",sub:"BIPV-03",num:"05/25",domain:"green",author:"AP",date:"May 2025",
   title:"BIPV in Action: Real-World Applications Driving the Sustainable Transformation of Buildings",
   excerpt:"From Novartis Pavilion Basel to Copenhagen International School — global case studies demonstrating how BIPV thrives and the barriers it must overcome.",
   hero:"/images/blog/NovartisPavillon-01-1920w.jpg"},
  {slug:"xr-02-25",series:"Make It Human",sub:"XR-02",num:"04/25",domain:"human",author:"AP",date:"Apr 2025",
   title:"Extended Reality (XR) in Construction: Transforming Design, Building, and Operation",
   excerpt:"XR technologies reshaping every stage of the construction lifecycle — case studies from Unity, HoloBuilder, Gamma AR, XYZ Reality and the PROMETHEUS project.",
   hero:"/images/blog/foto-1920w.jpg"},
];

// ─── PUBLICATIONS ─────────────────────────────────────────────────────────────
const PUBLICATIONS=[
  {
    authors:"Pracucci A., Giovanardi M.",year:2026,
    title:"Ecodesign Prioritization for BIPV Manufacturers Under ESPR Compliance: An LLM-Assisted Multi-Criteria Framework with Use Cases Application",
    journal:"Preprints.org",note:"Preprint — under peer review",
    doi:"10.20944/preprints202602.1710.v1",
    url:"https://www.preprints.org/manuscript/202602.1710",
    project:"MC2.0",open:true,
  },
  {
    authors:"Pracucci A., Giovanardi M.",year:2025,
    title:"Design of a Sensor-Based Digital Product Passport for Low-Tech Manufacturing: Traceability and Environmental Monitoring in Bio-Block Production",
    journal:"Sensors",volume:"25(18), 5653",
    doi:"10.3390/s25185653",
    url:"https://www.mdpi.com/1424-8220/25/18/5653",
    project:"Digi4BioMat",open:true,
  },
  {
    authors:"Morganti L., Rudenå A., Brunklaus B., Bomark P., Armijo Prieto A., Skog J., Zaffagnini T., Pracucci A., Astudillo Larraz J.",year:2025,
    title:"Wood-for-construction supply chain digital twin to drive circular economy and actor-based LCA information",
    journal:"Journal of Cleaner Production",volume:"520, 146074",
    doi:"10.1016/j.jclepro.2025.146074",
    url:"https://www.sciencedirect.com/science/article/pii/S0959652625014246",
    project:"W2W",open:false,
  },
  {
    authors:"Giovanardi M., Castellan C., La Rosa M., Pavlovic A., Pracucci A.",year:2024,
    title:"Designing BIPV – Strategies for managing complexity in the integration of photovoltaics in facades",
    journal:"AGATHÓN — International Journal of Architecture, Art and Design",volume:"16",
    doi:"10.19229/2464-9309/16152024",
    url:"https://agathon.it/agathon/article/view/443",
    project:"MC2.0",open:true,
  },
];

// ─── PRESS ────────────────────────────────────────────────────────────────────
const PRESS=[
  {
    source:"YouBuild",date:"Oct 2024",
    title:"Digital Product Passport: il valore dei dati nei processi manifatturieri",
    excerpt:"YouBuild analizza come il Digital Product Passport trasforma i processi manifatturieri nel settore delle costruzioni, con focus sulla piattaforma DeePPy di Levery.",
    url:"https://www.youbuildweb.it/digital-product-passport-il-valore-dei-dati-nei-processi-manifatturieri/",
  },
  {
    source:"INFOBUILD",date:"2025",
    title:"Materiali edili circolari: la nuova filiera bio-based — DeePPy e Levery",
    excerpt:"Come DeePPy e la ricerca di Levery stanno contribuendo alla costruzione di filiere bio-based circolari nel settore edile italiano.",
    url:"https://www.infobuild.it/approfondimenti/materiali-edili-circolari-digitale-filiera-bio-based/",
  },
];

function NavBar({lang,setLang}){
  return(
          <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            <li key="Work"><a href="/work" style={{color:"/work"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/work"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Work</a></li><li key="Products"><a href="/products" style={{color:"/products"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/products"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Products</a></li><li key="Insights"><a href="/insights" style={{color:"/insights"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/insights"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Insights</a></li><li key="Impact"><a href="/impact" style={{color:"/impact"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/impact"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Impact</a></li><li key="Team"><a href="/team" style={{color:"/team"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/team"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Team</a></li><li key="Contact"><a href="/contact" style={{color:"/contact"==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:"/contact"==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>Contact</a></li>
          </ul>
          <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}} style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer",marginRight:8}}>{lang==="en"?"IT":"EN"}</button><a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

  );
}

function ArticleCard({a}){
  const dom=DOMAIN[a.domain]||DOMAIN.digital;
  const [hov,setHov]=useState(false);
  return(
    <a href={`/insights/${a.slug}`} style={{textDecoration:"none",display:"block",background:C.white,borderRadius:2,overflow:"hidden",border:`1px solid ${C.rule}`,transform:hov?"translateY(-3px)":"none",boxShadow:hov?"0 8px 24px rgba(0,0,0,0.10)":"none",transition:"all 0.2s"}}
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}>
      <div style={{height:160,overflow:"hidden",background:dom.bg,position:"relative"}}>
        {a.hero&&<img src={a.hero} alt={a.title} style={{width:"100%",height:"100%",objectFit:"cover",opacity:0.6,display:"block"}}/>}
        <div style={{position:"absolute",top:12,left:12,display:"flex",gap:6}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:dom.accent,background:"rgba(0,0,0,0.4)",padding:"3px 8px",borderRadius:2,textTransform:"uppercase"}}>{dom.label}</span>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0.3)",padding:"3px 8px",borderRadius:2}}>{a.sub}</span>
        </div>
        <div style={{position:"absolute",bottom:12,right:12}}>
          <span style={{fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.4)"}}>{a.num}</span>
        </div>
      </div>
      <div style={{padding:"18px 20px 22px"}}>
        <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,margin:"0 0 8px"}}>{a.series} · {a.date} · By {a.author}</p>
        <h3 style={{fontSize:16,fontWeight:400,color:C.ink,margin:"0 0 10px",fontFamily:"'Georgia',serif",lineHeight:1.35}}>{a.title}</h3>
        <p style={{fontSize:13,color:C.inkMid,lineHeight:1.65,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 14px"}}>{a.excerpt}</p>
        <span style={{fontSize:12,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>Read →</span>
      </div>
    </a>
  );
}

function PubCard({p}){
  const [hov,setHov]=useState(false);
  const isOA=p.open;
  const heroBg=isOA?"linear-gradient(135deg,#1A3D2B,#0F2D1E)":"linear-gradient(135deg,#1C2D40,#2D4059)";
  const accent=isOA?"#A8E6CF":"#7EC8E3";
  const accLabel=isOA?"OPEN ACCESS":"PEER REVIEWED";
  return(
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{textDecoration:"none",display:"block",background:C.white,borderRadius:2,overflow:"hidden",border:`1px solid ${C.rule}`,transform:hov?"translateY(-3px)":"none",boxShadow:hov?"0 8px 24px rgba(0,0,0,0.10)":"none",transition:"all 0.2s"}}>
      <div style={{height:140,background:heroBg,position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.08,pointerEvents:"none"}} viewBox="0 0 400 140" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:5},(_,i)=>(<line key={i} x1={i*90-20} y1="0" x2={i*90+100} y2="140" stroke={accent} strokeWidth="1"/>))}
        </svg>
        <div style={{position:"absolute",top:10,left:10,display:"flex",gap:6}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:accent,background:"rgba(0,0,0,0.4)",padding:"3px 8px",borderRadius:2,textTransform:"uppercase"}}>{accLabel}</span>
          {p.project&&<span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0.3)",padding:"3px 8px",borderRadius:2}}>{p.project}</span>}
        </div>
        <div style={{position:"absolute",bottom:10,right:10,fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.4)"}}>{p.year}</div>
      </div>
      <div style={{padding:"16px 18px 20px"}}>
        <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,margin:"0 0 8px"}}>{p.journal}{p.volume?` · ${p.volume}`:""}{p.note?` · ${p.note}`:""}</p>
        <h3 style={{fontSize:15,fontWeight:400,color:C.ink,margin:"0 0 8px",fontFamily:"'Georgia',serif",lineHeight:1.35}}>{p.title}</h3>
        <p style={{fontSize:11,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 12px",lineHeight:1.5}}>{p.authors}</p>
        <span style={{fontSize:11,color:C.green,fontFamily:"monospace",letterSpacing:"0.04em"}}>DOI: {p.doi} ↗</span>
      </div>
    </a>
  );
}

function PressCard({p}){
  const [hov,setHov]=useState(false);
  return(
    <a href={p.url} target="_blank" rel="noopener noreferrer"
      onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)}
      style={{textDecoration:"none",display:"block",background:C.white,borderRadius:2,overflow:"hidden",border:`1px solid ${C.rule}`,transform:hov?"translateY(-3px)":"none",boxShadow:hov?"0 8px 24px rgba(0,0,0,0.10)":"none",transition:"all 0.2s"}}>
      <div style={{height:140,background:"linear-gradient(135deg,#2D4059,#1C2D40)",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.08,pointerEvents:"none"}} viewBox="0 0 400 140" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:5},(_,i)=>(<line key={i} x1={i*90-20} y1="0" x2={i*90+100} y2="140" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{position:"absolute",top:10,left:10,display:"flex",gap:6}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:"#7EC8E3",background:"rgba(0,0,0,0.4)",padding:"3px 8px",borderRadius:2,textTransform:"uppercase"}}>PRESS</span>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.1em",color:"rgba(255,255,255,0.5)",background:"rgba(0,0,0,0.3)",padding:"3px 8px",borderRadius:2}}>{p.source}</span>
        </div>
        <div style={{position:"absolute",bottom:10,right:10,fontSize:10,fontFamily:"monospace",color:"rgba(255,255,255,0.4)"}}>{p.date}</div>
      </div>
      <div style={{padding:"16px 18px 20px"}}>
        <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,margin:"0 0 8px"}}>{p.source} · {p.date}</p>
        <h3 style={{fontSize:15,fontWeight:400,color:C.ink,margin:"0 0 10px",fontFamily:"'Georgia',serif",lineHeight:1.35}}>{p.title}</h3>
        <p style={{fontSize:12,color:C.inkMid,lineHeight:1.65,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 12px"}}>{p.excerpt}</p>
        <span style={{fontSize:12,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>Read article ↗</span>
      </div>
    </a>
  );
}


export default function InsightsPage(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const b=typeof navigator!=="undefined"?navigator.language:"en";
    if(b.startsWith("it")){setLang("it");if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang","it");}
  },[]);

  const [tab,setTab]=useState("articles");
  const [filter,setFilter]=useState("all");
  const filtered=filter==="all"?ARTICLES:ARTICLES.filter(a=>a.domain===filter||a.series.toLowerCase().includes(filter));

  const TabBtn=({id,label})=>(
    <button onClick={()=>setTab(id)} style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,padding:"9px 22px",borderRadius:2,cursor:"pointer",transition:"all 0.2s",
      border:"1px solid",
      borderColor:tab===id?"#fff":"rgba(255,255,255,0.35)",
      background:tab===id?"#fff":"transparent",
      color:tab===id?"#1C2D40":"rgba(255,255,255,0.72)"}}>
      {label}
    </button>
  );

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-grid{grid-template-columns:1fr!important}}`}</style>
      <NavBar lang={lang} setLang={setLang}/>

      {/* HEADER */}
      <div style={{background:`linear-gradient(145deg,${C.brand} 0%,#1A2D40 100%)`,height:"450px",overflow:"hidden",position:"relative",paddingTop:"120px"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",width:"100%",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>03</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>Insights</span>
          </div>
          <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:"0 0 14px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>Insights</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.48)",margin:"0 0 32px",fontFamily:"'Helvetica Neue',Arial,sans-serif",fontStyle:"italic",maxWidth:520,lineHeight:1.7}}>Sector analysis, product reviews and R&D perspectives on digital construction, sustainability and EU funding.</p>

          {/* TABS */}
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            <TabBtn id="articles" label="Articles"/>
            <TabBtn id="publications" label="Publications"/>
            <TabBtn id="press" label="Press"/>
          </div>
        </div>
      </div>

      {/* ARTICLES TAB */}
      {tab==="articles"&&(
        <div style={{background:C.white,padding:"40px 0 96px"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
            {/* Series filters */}
            <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:40}}>
              {[["all","All articles"],["digital","Make It Digital"],["green","Make It Green"],["human","Make It Human"]].map(([key,label])=>(
                <button key={key} onClick={()=>setFilter(key)} style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",padding:"7px 16px",borderRadius:2,cursor:"pointer",border:"1px solid",transition:"all 0.2s",
                  background:filter===key?C.brand:"transparent",color:filter===key?C.white:C.inkLight,borderColor:filter===key?C.brand:C.rule}}>
                  {label}
                </button>
              ))}
            </div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="l-grid">
              {filtered.map(a=>(<ArticleCard key={a.slug} a={a}/>))}
            </div>
          </div>
        </div>
      )}

      {/* PUBLICATIONS TAB */}
      {tab==="publications"&&(
        <div style={{background:C.white,padding:"40px 0 96px"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
            <p style={{fontSize:14,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.7,margin:"0 0 32px",maxWidth:640}}>
              Peer-reviewed scientific publications by the Levery team. Open access articles are freely available at the linked DOI.
            </p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="l-grid">
              {PUBLICATIONS.map((p,i)=>(<PubCard key={i} p={p}/>))}
            </div>
          </div>
        </div>
      )}

      {/* PRESS TAB */}
      {tab==="press"&&(
        <div style={{background:C.white,padding:"40px 0 96px"}}>
          <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
            <p style={{fontSize:14,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.7,margin:"0 0 32px",maxWidth:640}}>
              External media coverage and press mentions of Levery, its research and products.
            </p>
            <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="l-grid">
              {PRESS.map((p,i)=>(<PressCard key={i} p={p}/>))}
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{background:C.green,padding:"64px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <h2 style={{fontSize:28,fontWeight:400,color:C.white,fontFamily:"'Georgia',serif",margin:"0 0 12px"}}>Want R&D insights tailored to your sector?</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>Book a call and we will walk you through what is relevant for your business.</p>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:C.white,color:C.green,padding:"13px 32px",borderRadius:2,fontSize:15,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none"}}>Book a call →</a>
        </div>
      </div>

            <footer style={{background:"#1A1A1A",padding:"48px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div>
            <img src="/logo-white.svg" alt="Levery" height="36" style={{display:"block"}}/>
            <p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>Specialist R&D, built around your team.</p>
            <a href="/impact" style={{display:"inline-flex",alignItems:"center",gap:6,marginTop:16,textDecoration:"none",border:"1px solid rgba(255,255,255,0.12)",borderRadius:2,padding:"4px 10px"}}>
              <span style={{fontSize:9,color:"#A8E6CF",fontFamily:"monospace"}}>⬡</span>
              <span style={{fontSize:10,color:"rgba(255,255,255,0.35)",fontFamily:"'Helvetica Neue',Arial,sans-serif",letterSpacing:"0.06em"}}>Società Benefit · Our impact →</span>
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
            <a href="tel:+393396469607" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>(+39) 339 646 9607</a>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 32px"}}>
          <span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · All rights reserved</span>
        </div>
      </footer>

    </div>
  );
}
