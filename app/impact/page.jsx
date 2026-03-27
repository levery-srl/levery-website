'use client'
const C={brand:"#2D4059",green:"#1E6B45",greenMid:"#2A8A58",greenLight:"#E8F5EE",
  white:"#FFFFFF",sand:"#F5F2EC",sandDark:"#EDE9E1",ink:"#1A1A1A",
  inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];

const METRICS=[
  {cat:"DISSEMINATION & TRAINING",items:[
    {n:"12",label:"Posts on LinkedIn"},
    {n:"3,923",label:"Interactions through LinkedIn posts"},
    {n:"250",label:"Stakeholders involved in trainings"},
    {n:"2",label:"Scientific publications"},
    {n:"2",label:"Participations in focus groups"},
    {n:"2",label:"Participations in seminars & events"},
  ]},
  {cat:"R&D",items:[
    {n:"4",label:"Participations in sustainable projects"},
    {n:"1",label:"New partnership with foundations"},
    {n:"10+",label:"Active EU-funded projects contributed"},
  ]},
  {cat:"ECONOMIC IMPACT",items:[
    {n:"€700K+",label:"Direct R&D budget managed"},
    {n:"€15M+",label:"Total EU project funding contributed to"},
    {n:"50+",label:"Peer-reviewed scientific publications"},
  ]},
];

const SDGS=[
  {n:"SDG 9",label:"Industry, Innovation & Infrastructure"},
  {n:"SDG 11",label:"Sustainable Cities & Communities"},
  {n:"SDG 12",label:"Responsible Consumption & Production"},
  {n:"SDG 13",label:"Climate Action"},
  {n:"SDG 17",label:"Partnerships for the Goals"},
];

export default function ImpactPage(){
  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-metrics-grid{grid-template-columns:1fr!important}.l-sdg-grid{grid-template-columns:1fr 1fr!important}}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]].map(([label,href])=>(<li key={label}><a href={href} style={{color:href==="/impact"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/impact"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>))}
          </ul>
          <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:"#1E6B45",color:"#FFFFFF",padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>


      {/* HEADER */}
      <div style={{background:`linear-gradient(145deg,${C.green} 0%,#143D2A 100%)`,padding:"120px 0 64px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.07,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#A8E6CF" strokeWidth="1"/>))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:20,border:"1px solid rgba(168,230,207,0.3)",borderRadius:2,padding:"5px 12px"}}>
            <span style={{fontSize:11,color:"#A8E6CF",fontFamily:"monospace",letterSpacing:"0.08em"}}>⬡</span>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,210,80,0.12)",border:"1px solid #FFD97D",borderRadius:2,padding:"8px 16px",fontSize:12,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"#FFD97D",letterSpacing:"0.06em",fontWeight:500}}><svg width="11" height="11" viewBox="0 0 12 12"><polygon points="6,0 12,3 12,9 6,12 0,9 0,3" fill="none" stroke="#FFD97D" strokeWidth="1.5"/></svg>Società Benefit</span>
          </div>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:20}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>04</span>
            <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:0,fontFamily:"'Georgia',serif",lineHeight:1.05}}>Our Impact</h1>
          </div>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",margin:0,fontFamily:"'Georgia',serif",fontStyle:"italic",maxWidth:600,lineHeight:1.65}}>As a Società Benefit, our mission goes beyond profit. We are dedicated to creating lasting positive impact through sustainability-driven innovation in the construction sector.</p>
        </div>
      </div>

      {/* COMMITMENT */}
      <div style={{background:C.sand,padding:"64px 0",borderBottom:`1px solid ${C.rule}`}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"center"}} className="l-metrics-grid">
            <div>
              <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:16}}>Our Commitment</span>
              <h2 style={{fontSize:28,fontWeight:400,color:C.ink,margin:"0 0 20px",fontFamily:"'Georgia',serif",lineHeight:1.2}}>Sustainability aligned with the UN Sustainable Development Goals</h2>
              <p style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 16px"}}>Every project we undertake and every product we develop aims to contribute to global sustainability frameworks. We align our work with the SDGs most relevant to the construction sector.</p>
              <p style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>As an innovative startup classified under Italian law (D.L. 179/2012) and registered as a Società Benefit, we are legally committed to reporting our social and environmental impact annually.</p>
            </div>
            <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}} className="l-sdg-grid">
              {SDGS.map((s,i)=>(
                <div key={i} style={{background:C.white,borderRadius:2,border:`1px solid ${C.rule}`,padding:"16px 18px"}}>
                  <span style={{fontSize:10,fontFamily:"monospace",color:C.green,letterSpacing:"0.1em",display:"block",marginBottom:6}}>{s.n}</span>
                  <span style={{fontSize:13,color:C.ink,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.4}}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* METRICS */}
      <div style={{background:C.white,padding:"64px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:48}}>
            <span style={{fontFamily:"monospace",fontSize:18,color:C.inkLight,letterSpacing:"-0.01em"}}>2024</span>
            <h2 style={{fontSize:28,fontWeight:400,color:C.ink,margin:0,fontFamily:"'Georgia',serif"}}>Impacts in Numbers</h2>
            <span style={{fontSize:13,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>February – December 2024</span>
          </div>
          {METRICS.map((cat,ci)=>(
            <div key={ci} style={{marginBottom:48}}>
              <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 20px",paddingBottom:12,borderBottom:`1px solid ${C.rule}`}}>{cat.cat}</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:2,background:C.rule}} className="l-metrics-grid">
                {cat.items.map((m,mi)=>(
                  <div key={mi} style={{background:C.white,padding:"28px 24px"}}>
                    <span style={{display:"block",fontSize:36,fontWeight:400,color:C.green,fontFamily:"'Georgia',serif",lineHeight:1,marginBottom:8}}>{m.n}</span>
                    <span style={{fontSize:13,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.5}}>{m.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* REPORT DOWNLOAD */}
      <div style={{background:C.sandDark,padding:"56px 0",borderTop:`1px solid ${C.rule}`,borderBottom:`1px solid ${C.rule}`}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",display:"grid",gridTemplateColumns:"1fr auto",gap:48,alignItems:"center"}} className="l-metrics-grid">
          <div>
            <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:12}}>Benefit Report</span>
            <h2 style={{fontSize:24,fontWeight:400,color:C.ink,margin:"0 0 10px",fontFamily:"'Georgia',serif"}}>Sustainability Report 2024</h2>
            <p style={{fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,lineHeight:1.7}}>Il primo report benefit di Levery — obiettivi, attività e impatti del nostro primo anno di operatività come Società Benefit.</p>
          </div>
          <a href="https://irp.cdn-website.com/f62b8008/files/uploaded/LEVERY_BenefitReport_2024.pdf"
            target="_blank" rel="noopener noreferrer"
            style={{display:"inline-flex",alignItems:"center",gap:10,background:C.green,color:C.white,padding:"13px 24px",borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none",whiteSpace:"nowrap"}}>
            ↓ Download Report 2024
          </a>
        </div>
      </div>

      {/* CTA */}
      <div style={{background:C.green,padding:"64px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <h2 style={{fontSize:28,fontWeight:400,color:C.white,fontFamily:"'Georgia',serif",margin:"0 0 12px"}}>Work with us on your next R&D project</h2>
          <p style={{fontSize:15,color:"rgba(255,255,255,0.7)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>Specialist R&D, built around your team.</p>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"inline-block",background:C.white,color:C.green,padding:"13px 32px",borderRadius:2,fontSize:15,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none"}}>Book a call →</a>
        </div>
      </div>

      <footer style={{background:"#1A1A1A",padding:"48px 0 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px 40px",display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
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
