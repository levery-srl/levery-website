'use client'
import { useState } from "react";

const C = {
  brand:"#2D4059", green:"#1E6B45", greenMid:"#2A8A58",
  greenLight:"#E8F5EE", sand:"#F5F2EC", white:"#FFFFFF",
  ink:"#1A1A1A", inkMid:"#4A4A4A", inkLight:"#8A8A8A", rule:"#E0DBD3",
};
const DOMAIN = {
  digital:{ bg:"#1C2D40", accent:"#7EC8E3", label:"R&D" },
  green:  { bg:"#1A3D2B", accent:"#A8E6CF", label:"ECO" },
  funding:{ bg:"#2A2010", accent:"#FFD97D", label:"EU"  },
  xr:     { bg:"#2A1E3D", accent:"#C3A8E6", label:"XR"  },
};
const MONO="M35.76 62.16 l-25.5 0 l-8.16 -8.16 l0 -40.56 l17.16 17.16 l0 21.9 l6.9 0 l7.8 7.8 z M3.48 53.28 l14.4 0 l0 -22.14 l-14.4 -14.4 l0 36.54 z M32.46 60.78 l-6.9 -6.9 l-21.66 0 l6.9 6.9 l21.66 0 z";
const WORD="M9.04 33.92 l13.16 0 l0 6.08 l-19.8 0 l0 -28 l6.64 0 l0 21.92 z M33.394 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M28.434 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M59.828 19.6 l7 0 l-8.24 20.4 l-7.2 0 l-8.24 -20.4 l7.04 0 l4.8 13.12 z M77.502 40.56 c-6.64 0 -11.2 -4.36 -11.2 -10.72 c0 -6.12 4.28 -10.8 10.8 -10.8 c6.76 0 10.68 4.68 10.68 10.56 c0 0.72 -0.04 1.44 -0.16 2.12 l-15.08 0 c0.4 1.92 1.8 3.52 5.08 3.52 c2.16 0 3.4 -0.84 4.08 -2.08 l5.76 1.68 c-1.08 2.52 -4.52 5.72 -9.96 5.72 z M72.542 27.88 l9 0 c-0.2 -1.84 -1.84 -3.48 -4.48 -3.48 s-4.24 1.76 -4.52 3.48 z M96.056 22.36 c1.2 -2.2 3.4 -3.44 6.4 -3.04 l0 6 c-4.32 -0.72 -6.4 1.12 -6.4 6.16 l0 8.52 l-6.4 0 l0 -20.4 l6.4 0 l0 2.76 z M118.85 19.6 l6.84 0 l-12.12 28.8 l-6.52 0 l3.64 -8.88 l0.28 -0.04 l-0.28 0.04 l-9.16 -19.92 l7 0 l5.32 12.44 z";

function LeveryLogo({color="#fff",height=30}){
  return(<svg height={height} viewBox="0 0 340 48" fill="none" style={{display:"block"}}>
    <g transform="translate(0,1) scale(0.245)"><g transform="matrix(3.828,0,0,3.828,14,-51.45)" fill={color}><path d={MONO}/></g></g>
    <g transform="translate(52,6) scale(0.245)"><g transform="matrix(1.393,0,0,1.393,-3.34,190.28)" fill={color}><path d={WORD}/></g></g>
  </svg>);
}

const navLinks=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

export default function ProjectClient({ project }) {
  const domain = DOMAIN[project.domain] || DOMAIN.green;
  const active = project.status === "Active";
  const inner = { maxWidth:1200, margin:"0 auto", padding:"0 32px" };

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-proj-layout{grid-template-columns:1fr!important}.l-sidebar{position:static!important}}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><LeveryLogo color="#fff" height={30}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {navLinks.map(([label,href])=>(
              <li key={label}><a href={href} style={{color:href==="/work"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,letterSpacing:"0.04em",fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/work"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>
            ))}
          </ul>
          <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

      <div style={{background:`linear-gradient(135deg,${domain.bg} 0%,${C.brand} 100%)`,padding:"120px 0 56px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.07,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke={domain.accent} strokeWidth="1"/>))}
        </svg>
        <div style={{...inner,position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:24}}>
            <a href="/work" style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",textDecoration:"none"}}>← Work</a>
            <span style={{color:"rgba(255,255,255,0.2)"}}>/</span>
            <span style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>{project.name}</span>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:10,marginBottom:20}}>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.16em",color:domain.accent,background:"rgba(0,0,0,0.3)",padding:"3px 10px",borderRadius:2,textTransform:"uppercase"}}>{domain.label}</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.12em",padding:"3px 10px",borderRadius:2,textTransform:"uppercase",background:active?"rgba(30,107,69,0.5)":"rgba(100,100,100,0.3)",color:active?"#A8E6CF":"rgba(255,255,255,0.5)"}}>{project.status}</span>
          </div>
          <h1 style={{fontSize:48,fontWeight:400,color:C.white,margin:"0 0 16px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{project.name}</h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",fontFamily:"'Georgia',serif",fontStyle:"italic",maxWidth:640,lineHeight:1.6}}>{project.subtitle}</p>
          <div style={{display:"flex",gap:32,flexWrap:"wrap"}}>
            {project.period&&<div><p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Period</p><p style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"rgba(255,255,255,0.65)",margin:0}}>{project.period}</p></div>}
            {project.fund&&<div><p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Funding</p>
              {project.fundUrl?<a href={project.fundUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:domain.accent,textDecoration:"none"}}>{project.fund} ↗</a>:<p style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"rgba(255,255,255,0.65)",margin:0}}>{project.fund}</p>}
            </div>}
          </div>
        </div>
      </div>

      {project.images&&project.images[0]&&(
        <div style={{maxHeight:480,overflow:"hidden"}}>
          <img src={project.images[0]} alt={project.name} style={{width:"100%",maxHeight:480,objectFit:"cover",display:"block"}}/>
        </div>
      )}

      <div style={{background:C.white,padding:"72px 0 96px"}}>
        <div style={inner}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:64,alignItems:"start"}} className="l-proj-layout">
            <div>
              {[["About the project",project.about],["Funding & context",project.context]].map(([title,text])=>text&&(
                <div key={title} style={{marginBottom:48}}>
                  <h2 style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 20px",paddingBottom:12,borderBottom:`1px solid ${C.rule}`}}>{title}</h2>
                  <p style={{fontSize:15,color:C.inkMid,lineHeight:1.85,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{text}</p>
                </div>
              ))}
              <div style={{marginBottom:48}}>
                <h2 style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 20px",paddingBottom:12,borderBottom:`1px solid ${C.rule}`}}>Levery's role</h2>
                {project.leveryRole.map((item,i)=>(
                  <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:16}}>
                    <span style={{color:domain.accent,fontSize:10,marginTop:4,flexShrink:0}}>◆</span>
                    <p style={{fontSize:15,color:C.inkMid,lineHeight:1.75,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside style={{position:"sticky",top:88}} className="l-sidebar">
              <div style={{background:C.sand,borderRadius:2,padding:24,marginBottom:16,border:`1px solid ${C.rule}`}}>
                <p style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px"}}>Topics</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {project.tags.map((tag,i)=>(<span key={i} style={{fontSize:11,fontFamily:"'Helvetica Neue',Arial,sans-serif",padding:"4px 10px",border:`1px solid ${C.rule}`,borderRadius:2,color:C.inkLight,background:C.white}}>{tag}</span>))}
                </div>
              </div>
              {project.partners&&project.partners.length>0&&(
                <div style={{background:C.sand,borderRadius:2,padding:24,marginBottom:16,border:`1px solid ${C.rule}`}}>
                  <p style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px"}}>Partners & funding</p>
                  {project.partners.map((p,i)=>(<p key={i} style={{fontSize:13,color:C.inkMid,margin:"0 0 8px",fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{p}</p>))}
                </div>
              )}
              <div style={{background:domain.bg,borderRadius:2,padding:24}}>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:"0 0 16px"}}>Interested in a similar project?</p>
                <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",padding:"10px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,background:domain.accent,color:domain.bg,textDecoration:"none"}}>Book a call →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div style={{background:C.sand,padding:"32px 0",borderTop:`1px solid ${C.rule}`}}>
        <div style={inner}><a href="/work" style={{fontSize:13,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Back to all projects</a></div>
      </div>

      <footer style={{background:C.ink,padding:"48px 0 0"}}>
        <div style={{...inner,paddingBottom:40,display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div><LeveryLogo color="#fff" height={28}/><p style={{fontSize:14,color:"rgba(255,255,255,0.3)",fontFamily:"'Georgia',serif",fontStyle:"italic",lineHeight:1.7,marginTop:14}}>Specialist R&D, built around your team.</p></div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Legal</p>
            {["Via Pisino 66, 47814 Bellaria Igea Marina (RN)","P.IVA 04730050400"].map((s,i)=>(<span key={i} style={{display:"block",fontSize:11,color:"rgba(255,255,255,0.2)",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:9}}>{s}</span>))}
          </div>
          <div>
            <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:"rgba(255,255,255,0.18)",textTransform:"uppercase",marginBottom:14}}>Contact</p>
            <a href="mailto:info@levery.it" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.45)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:9}}>info@levery.it</a>
            <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{display:"block",fontSize:13,color:"#A8E6CF",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>Book a call →</a>
          </div>
        </div>
        <div style={{...inner,padding:"16px 32px"}}><span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · All rights reserved</span></div>
      </footer>
    </div>
  );
}
