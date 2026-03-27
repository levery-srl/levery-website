'use client'
import { useState } from "react";

const C={brand:"#2D4059",brandMid:"#3A5274",green:"#1E6B45",greenMid:"#2A8A58",
  white:"#FFFFFF",sand:"#F5F2EC",sandDark:"#EDE9E1",ink:"#1A1A1A",
  inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const DOMAIN={
  digital:{bg:"#1C2D40",accent:"#7EC8E3",label:"R&D"},
  green:{bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO"},
  funding:{bg:"#2A2010",accent:"#FFD97D",label:"EU"},
};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";

const ARTICLES=[
  {slug:"ai-solutions-construction-products",
   series:"Make It Digital",domain:"digital",num:"03/26",author:"MG",date:"February 25, 2026",
   title:"AI-based solutions for the construction sector: Innovative products for designing and constructing",
   excerpt:"The landscape of AI-based solutions is expanding rapidly, from automated MEP design to high-precision reality capture. Examining frontier products addressing the industry's most persistent labor shortages.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-34804017-1920w.jpeg",
  },
  {slug:"robotics-automation-construction-products",
   series:"Make It Digital",domain:"digital",num:"02/26",author:"AP",date:"February 3, 2026",
   title:"Robotic & Automation for Construction: Robotic Products for Digital Workflows",
   excerpt:"Robotic units capable of bridging the gap between digital BIM representation and jobsite execution — HP SitePrint, FBR Hadrian X, and autonomous site management platforms.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-17180807-1920w.jpeg",
  },
  {slug:"bio-based-building-materials-products",
   series:"Make It Green",domain:"green",num:"01/26",author:"AP",date:"January 7, 2026",
   title:"Bio-based building materials & products for construction: innovative technologies",
   excerpt:"From mycelium insulation to hemp bricks, high-performance bio-based composites are redefining the building envelope — moving beyond timber toward alternatives that act as active carbon sinks.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/crop2.jpg%28mediaclass-full-width.c3083fedae46a95f1139ff9d5833b1b6b8e20a69%29-1920w.jpg",
  },
  {slug:"ai-copilot-construction-stakeholders",
   series:"Make It Digital",domain:"digital",num:"12/25",author:"MG",date:"November 26, 2025",
   title:"AI as a Copilot for Construction: Actors & Stakeholders",
   excerpt:"AI is rapidly shifting construction from manual and reactive processes to predictive and optimized workflows — mapping the ecosystem of technology developers, data providers and end-users.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-30530416-1920w.jpeg",
  },
  {slug:"robotics-automation-construction-stakeholders",
   series:"Make It Digital",domain:"digital",num:"11/25",author:"AP",date:"October 29, 2025",
   title:"Robotic & Automation for Construction: Actors & Stakeholders",
   excerpt:"The global construction industry is embracing robotics and automation. Understanding the key actors — from equipment manufacturers to research entities — driving the shift toward digital construction.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/pexels-photo-10119310-1920w.jpeg",
  },
  {slug:"bio-based-building-materials-stakeholders",
   series:"Make It Green",domain:"green",num:"08/25",author:"AP",date:"October 1, 2025",
   title:"Bio-based Building Materials & Products for Construction: Actors & Stakeholders",
   excerpt:"The transition to bio-based construction requires a fundamental shift in the entire value chain — from farmers growing raw materials to policymakers setting new standards.",
   hero:"https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/ladrillos_de_canamo_0-1920w.jpg",
  },
];

const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

function NavBar(){
  return(
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
      <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
        <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
          {NAV_LINKS.map(([label,href])=>(
            <li key={label}><a href={href} style={{color:href==="/insights"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/insights"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>
          ))}
        </ul>
        <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
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
      {a.hero&&<div style={{height:180,overflow:"hidden"}}><img src={a.hero} alt={a.title} style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center",display:"block"}}/></div>}
      <div style={{padding:"20px 22px 24px"}}>
        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:12}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.16em",color:dom.accent,background:dom.bg,padding:"3px 9px",borderRadius:2,textTransform:"uppercase"}}>{dom.label}</span>
          <span style={{fontSize:11,fontFamily:"monospace",color:C.inkLight}}>{a.series}</span>
          <span style={{fontSize:11,fontFamily:"monospace",color:C.rule}}>·</span>
          <span style={{fontSize:11,fontFamily:"monospace",color:C.inkLight}}>{a.num}</span>
        </div>
        <h3 style={{fontSize:17,fontWeight:400,color:C.ink,margin:"0 0 10px",fontFamily:"'Georgia',serif",lineHeight:1.35}}>{a.title}</h3>
        <p style={{fontSize:13,color:C.inkMid,lineHeight:1.7,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 16px"}}>{a.excerpt}</p>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
          <span style={{fontSize:11,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{a.date} · By {a.author}</span>
          <span style={{fontSize:12,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>Read →</span>
        </div>
      </div>
    </a>
  );
}

export default function InsightsPage(){
  const [filter,setFilter]=useState("all");
  const filtered=filter==="all"?ARTICLES:ARTICLES.filter(a=>a.domain===filter);

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-grid{grid-template-columns:1fr!important}}`}</style>
      <NavBar/>

      {/* PAGE HEADER */}
      <div style={{background:`linear-gradient(145deg,${C.brand} 0%,#1A2D40 100%)`,padding:"120px 0 56px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:20}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>03</span>
            <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:0,fontFamily:"'Georgia',serif",lineHeight:1.05}}>Insights</h1>
          </div>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",fontFamily:"'Georgia',serif",fontStyle:"italic",maxWidth:560,lineHeight:1.65}}>Sector analysis, product reviews and R&D perspectives on digital construction, sustainability and EU funding.</p>

          {/* SERIES FILTERS */}
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {[["all","All articles"],["digital","Make It Digital"],["green","Make It Green"]].map(([key,label])=>(
              <button key={key} onClick={()=>setFilter(key)}
                style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",textTransform:"uppercase",padding:"7px 16px",borderRadius:2,cursor:"pointer",border:"1px solid",transition:"all 0.2s",
                  background:filter===key?"rgba(255,255,255,0.15)":"transparent",
                  color:filter===key?"#fff":"rgba(255,255,255,0.5)",
                  borderColor:filter===key?"rgba(255,255,255,0.35)":"rgba(255,255,255,0.15)"}}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ARTICLES GRID */}
      <div style={{background:C.white,padding:"64px 0 96px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:24}} className="l-grid">
            {filtered.map(a=>(<ArticleCard key={a.slug} a={a}/>))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{background:C.green,padding:"64px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <h2 style={{fontSize:28,fontWeight:400,color:C.white,fontFamily:"'Georgia',serif",margin:"0 0 12px"}}>Want R&D insights for your sector?</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>Book a call and we will walk you through what is relevant for your business.</p>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:C.white,color:C.green,padding:"13px 32px",borderRadius:2,fontSize:15,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none"}}>Book a call →</a>
        </div>
      </div>

      <footer style={{background:C.ink,padding:"48px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px 40px",display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div><img src="/logo-white.svg" alt="Levery" height="36" style={{display:"block"}}/><p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>Specialist R&D, built around your team.</p></div>
          <div><p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Legal</p>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>Via Pisino 66, 47814 Bellaria Igea Marina (RN)</span>
            <span style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>VAT 04730050400</span>
            <a href="/privacy" style={{display:"block",fontSize:12,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Privacy & Cookie Policy</a>
          </div>
          <div><p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Contact</p>
            <a href="mailto:info@levery.it" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>info@levery.it</a>
            <a href="tel:+393396469607" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>(+39) 339 646 9607</a>
            <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"16px 32px"}}><span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · All rights reserved</span></div>
      </footer>
    </div>
  );
}
