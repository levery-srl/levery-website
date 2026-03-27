'use client'
import { useState } from "react";

const C={brand:"#2D4059",green:"#1E6B45",greenMid:"#2A8A58",greenLight:"#E8F5EE",
  white:"#FFFFFF",sand:"#F5F2EC",ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const DOMAIN={
  digital:{bg:"#1C2D40",accent:"#7EC8E3",label:"R&D"},
  green:{bg:"#1A3D2B",accent:"#A8E6CF",label:"ECO"},
  funding:{bg:"#2A2010",accent:"#FFD97D",label:"EU"},
  xr:{bg:"#2A1E3D",accent:"#C3A8E6",label:"XR"},
};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];
const inner={maxWidth:1200,margin:"0 auto",padding:"0 32px"};

const PROJECTS={
  "bio-corner":{
    name:"BIO.CO.R.N.ER",domain:"green",status:"Active",
    fund:"CIRCULOOS · Horizon Europe",fundUrl:"https://circuloos.eu/open-calls/",
    ga:"101092295",period:"2023–2026",
    partners:["CIRCULOOS (Horizon Europe — GA 101092295)"],
    subtitle:"BIO-waste for a COordinated and Regenerative New supply chain of eco-sustainable building materials in Emilia-Romagna.",
    about:"The BIO.CO.R.N.ER project proposes a new circular, regional value chain that transforms bio-waste from agri-food, aquaculture, and marine residues into eco-sustainable building materials. Based in the Emilia-Romagna region, the project builds on synergies between the agri-food industry and construction to pioneer low-carbon, bio-based mortars.",
    context:"Funded by the CIRCULOOS Horizon Europe project — 2nd Open Call (Grant Agreement 101092295). CIRCULOOS supports circular economy initiatives across European regions.",
    tags:["Bio-based","Circular Economy","Emilia-Romagna","CIRCULOOS"],
    leveryRole:["Technical expertise for CIRCULOOS tools integration, ensuring interoperability and efficient circular economy data flows.","Research on digital tools for enhancing traceability across the circular value chain.","Mapping of the information chain and identification of key actors."],
  },
  "agro-builder":{
    name:"Agro.build.ER",domain:"green",status:"Active",
    fund:"Regional · Emilia-Romagna",fundUrl:"",
    period:"2023–2025",
    partners:["Regione Emilia-Romagna"],
    subtitle:"Developing a circular agro-waste value chain for the sustainable building sector and rural-urban synergies in Emilia-Romagna.",
    about:"Agro.build.ER develops a circular agro-waste value chain for the sustainable building sector, creating rural-urban synergies. The project identifies agricultural residues with construction material potential and builds supply chain infrastructure within the regional innovation ecosystem.",
    context:"Funded by the Regione Emilia-Romagna as part of regional circular economy and green innovation programmes. Connects the region's strong agri-food sector with construction innovation.",
    tags:["Agro-waste","Circular Economy","Bio-based","Emilia-Romagna"],
    leveryRole:["Circular business model design — identifying viable pathways for agro-waste valorisation.","Material valorisation strategy — technical assessment of agro-waste streams.","Stakeholder engagement and regional supply chain mapping."],
  },
  "winloop":{
    name:"WINLOOP",domain:"green",status:"Active",
    fund:"Horizon Europe",fundUrl:"",
    period:"2023–2027",
    partners:["Horizon Europe"],
    subtitle:"Development of technologies, digitisation and business models for closing the life cycle of windows.",
    about:"WINLOOP addresses one of the least circular product categories in construction. The project develops technologies, digitalisation tools and business models to close the lifecycle of windows — from design and manufacturing to end-of-life material recovery.",
    context:"Funded under Horizon Europe. The consortium brings together window manufacturers, recyclers, digital tool developers and research institutions across Europe.",
    tags:["Windows","Circular Economy","End-of-Life","Digital Product Passport"],
    leveryRole:["Digital Product Passport design for window systems.","Lifecycle assessment (LCA) of current and circular window scenarios.","Circular business model definition and end-of-life recovery pathway analysis."],
  },
  "bios-mater":{
    name:"BIOS MATER",domain:"green",status:"Active",
    fund:"Horizon Europe",fundUrl:"",
    period:"2023–2027",
    partners:["Horizon Europe"],
    subtitle:"Re-designing the construction sector through sustainable and functional bio-based construction products.",
    about:"BIOS MATER develops sustainable and functional bio-based construction products with competitive market performance. The project addresses the full innovation chain from raw material sourcing to market deployment, targeting manufacturers looking to transition ahead of ESPR requirements.",
    context:"Funded under Horizon Europe. Targets construction product manufacturers looking to transition toward bio-based material portfolios.",
    tags:["Bio-based","Construction Products","Sustainability","ESPR"],
    leveryRole:["Product development support across material selection, formulation and prototype testing.","Lifecycle assessment (LCA) to quantify environmental performance of bio-based alternatives.","Market analysis — identifying target segments, regulatory pathways and competitive positioning."],
  },
  "w2w":{
    name:"W2W",domain:"green",status:"Active",
    fund:"Horizon Europe · GA 101138789",fundUrl:"",
    period:"2023–2027",
    partners:["Horizon Europe (GA 101138789)"],
    subtitle:"Transforming Wood Waste into Valuable Resource for a Greener Future.",
    about:"W2W develops a comprehensive framework for multi-dimensional cascade valorisation of wood from Construction & Demolition and furniture waste. The project focuses on reducing demand for virgin materials, cutting landfill waste and supporting the transition to a circular economy.",
    context:"Funded by the European Union under Horizon Europe (Grant Agreement 101138789).",
    tags:["Wood Waste","Circular Economy","C&D Waste","Façade Systems"],
    images:["https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/1753693908168-1920w.jpeg","https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/1753693894511-1920w.jpeg"],
    leveryRole:["Validation of W2W upcycled wood products for integration into construction systems including prefabricated façade panels.","Benchmarking and comparative analysis against conventional materials.","Façade system engineering — design and technical documentation.","Scientific dissemination and communication of project insights."],
  },
  "digi4bio":{
    name:"Digi4BioMat",domain:"digital",status:"Active",
    fund:"INTRANSIT · 2nd Open Call",fundUrl:"https://intransitproject.eu/",
    period:"2023–2025",
    partners:["Pedone Working Srl","CETMA — Centro di Ricerca e Trasferimento Tecnologico","INTRANSIT (2nd Open Call)"],
    subtitle:"Digital Product Passport for upscaling a circular business model for bio-based construction materials.",
    about:"Digi4BioMat proposes a groundbreaking circular approach for the construction industry: developing innovative bio-based building blocks from agro-wastes (olive stone and almond shells), designing a new Circular Business Model, and implementing a Digital Product Passport for tracking lifecycle data.",
    context:"Funded by the INTRANSIT project — 2nd Open Call. Partners include Pedone Working Srl and CETMA research centre.",
    tags:["Digital Product Passport","Bio-based","Circular Economy","Agro-waste"],
    leveryRole:["Design of the Digi4BioMat Circular Business Model — mapping material flows, supply chains and circularity opportunities.","Development of the Digital Product Passport platform — data schemas, APIs and stakeholder interface.","Dissemination of results through scientific papers, technical reports and industry communications."],
  },
  "prometheus":{
    name:"PROMETHEUS",domain:"xr",status:"Completed",
    fund:"Horizon Europe",fundUrl:"",
    period:"2022–2024",
    partners:["Horizon Europe","Exvirience S.r.l."],
    subtitle:"Augmented and Virtual Reality for Construction — from design review to on-site maintenance.",
    about:"PROMETHEUS delivered a groundbreaking XR-based WebXR application for remote maintenance of adaptive building envelopes, enabling real-time interactive maintenance via PCs and tablets without dedicated hardware.",
    context:"Funded by the European Union under Horizon Europe. Developed in collaboration with Exvirience S.r.l. Directly led to the ARyze platform commercialisation.",
    tags:["XR","Augmented Reality","Building Maintenance","WebXR"],
    images:["https://lirp.cdn-website.com/f62b8008/dms3rep/multi/opt/Immagine-2024-10-04-104240-1920w.jpg"],
    leveryRole:["Definition of XR use cases for building operations and maintenance.","Integration of BIM, Digital Product Passport and building management data into the XR interface.","Technology transfer — from research outputs to the ARyze commercial product."],
  },
  "mc20":{
    name:"MC2.0",domain:"digital",status:"Active",
    fund:"Horizon Europe · GA 101096139",fundUrl:"",
    period:"2022–2026",
    partners:["Horizon Europe (GA 101096139)","Glass to Power S.p.A.","GUALINI S.p.A."],
    subtitle:"Mass Customization 2.0 for Integrated Photovoltaic building envelopes.",
    about:"MC2.0 demonstrates how automated manufacturing of Integrated Photovoltaic (IPV) elements using the mass customisation approach can deliver a cost breakthrough in IPV façades, IPV windows and IPV roofs. The overarching ambition is a significant cost reduction through advanced manufacturing.",
    context:"Funded by the European Union under Horizon Europe (Grant Agreement 101096139). Partners include Glass to Power and GUALINI.",
    tags:["BIPV","Integrated PV","Mass Customisation","Building Envelope"],
    leveryRole:["Market needs analysis for IPV products — defining testing protocols for successful product deployment.","Method statement development and testing support for IPV evaluation.","Cost analysis for building use cases — optimising production efficiency and economic viability.","Circularity and lifecycle assessment for next-generation IPV products.","Digital solutions for seamless integration into the IPV manufacturing value chain."],
  },
  "pv-igu":{
    name:"PV-IGU",domain:"digital",status:"Completed",
    fund:"Direct service · Glass to Power",fundUrl:"",
    period:"2022–2023",
    partners:["Glass to Power S.p.A."],
    subtitle:"Supporting Glass to Power in the technological integration of BIPV systems into building envelopes.",
    about:"PV-IGU was a direct R&D service engagement with Glass to Power, an Italian manufacturer of transparent organic photovoltaic modules for building integration. The project focused on supporting the company's go-to-market strategy for BIPV products.",
    context:"Delivered as a direct consulting and R&D service to Glass to Power S.p.A., running in parallel with Levery's involvement in the MC2.0 Horizon Europe project.",
    tags:["BIPV","Building Envelope","Technology Transfer","Glass to Power"],
    leveryRole:["Technical documentation — building envelope integration specifications for Glass to Power BIPV modules.","Building envelope integration analysis — evaluating compatibility with façade and curtain wall systems.","Market strategy support — identifying target building typologies and competitive positioning."],
  },
  "belm":{
    name:"BELM",domain:"digital",status:"Active",
    fund:"Horizon Europe",fundUrl:"",
    period:"2023–2027",
    partners:["Horizon Europe"],
    subtitle:"Built Environment Lifecycle Management Assistance — digital platform for sustainability decision-making.",
    about:"BELM is a digital assistance platform to support end users in decision-making for the identification, analysis, implementation and monitoring of sustainability strategies in the lifecycle management of the built environment. BELM aspires to be a tool in the transition to a smarter, sustainable and resilient construction sector.",
    context:"Funded under Horizon Europe. Builds on digital twin technology, IoT integration, lifecycle assessment and ESG reporting methodology.",
    tags:["Digital Twin","Lifecycle Management","ESG Reporting","Sustainability"],
    leveryRole:["Platform architecture — contributing to the design of the BELM digital infrastructure and scenario comparison engine.","Sustainability assessment modules — developing LCA and LCC calculation tools aligned with CSRD and ESG frameworks.","Data interoperability — ensuring compatibility with Digital Product Passport standards and ESPR regulation."],
  },
};

export async function generateStaticParams(){
  return Object.keys(PROJECTS).map(slug=>({slug}));
}

function HeroPattern({accent}){
  return(
    <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.08,pointerEvents:"none"}} viewBox="0 0 1200 320" preserveAspectRatio="xMidYMid slice">
      {Array.from({length:16},(_,i)=>(<line key={i} x1={i*85-30} y1="0" x2={i*85+140} y2="320" stroke={accent} strokeWidth="1"/>))}
      {[[120,60],[280,140],[450,40],[620,180],[800,80],[980,160],[1100,60],[200,260],[500,280],[750,240],[950,290]].map(([x,y],i)=>(
        <circle key={i} cx={x} cy={y} r="2" fill={accent}/>
      ))}
    </svg>
  );
}

export default function ProjectClient({project}){
  const p=PROJECTS[project]||PROJECTS["bio-corner"];
  const dom=DOMAIN[p.domain]||DOMAIN.green;
  const active=p.status==="Active";

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-proj-layout{grid-template-columns:1fr!important}.l-sidebar{position:static!important}}`}</style>

      {/* NAV */}
      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{...inner,height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {NAV_LINKS.map(([label,href])=>(<li key={label}><a href={href} style={{color:href==="/work"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/work"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>))}
          </ul>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

      {/* HERO — DS coloured background + pattern */}
      <div style={{background:`linear-gradient(135deg,${dom.bg} 0%,${C.brand} 100%)`,minHeight:"clamp(60vh,72vh,80vh)",display:"flex",alignItems:"flex-end",padding:"0 0 56px",position:"relative",overflow:"hidden"}}>
        <HeroPattern accent={dom.accent}/>
        {/* Domain label top-right */}
        <div style={{position:"absolute",top:88,right:32,zIndex:2}}>
          <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:dom.accent,background:"rgba(0,0,0,0.25)",padding:"4px 12px",borderRadius:2,textTransform:"uppercase"}}>{dom.label}</span>
        </div>
        <div style={{...inner,position:"relative",zIndex:2,width:"100%"}}>
          {/* Breadcrumb */}
          <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:24}}>
            <a href="/work" style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",textTransform:"uppercase",textDecoration:"none"}}>← Work</a>
            <span style={{color:"rgba(255,255,255,0.2)"}}>/</span>
            <span style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.12em",color:"rgba(255,255,255,0.4)",textTransform:"uppercase"}}>{p.name}</span>
          </div>
          <span style={{display:"inline-block",fontSize:9,fontFamily:"monospace",letterSpacing:"0.12em",padding:"3px 10px",borderRadius:2,textTransform:"uppercase",marginBottom:20,background:active?"rgba(30,107,69,0.5)":"rgba(100,100,100,0.3)",color:active?"#A8E6CF":"rgba(255,255,255,0.5)"}}>{p.status}</span>
          <h1 style={{fontSize:"clamp(36px,4vw,56px)",fontWeight:400,color:C.white,margin:"0 0 16px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{p.name}</h1>
          <p style={{fontSize:17,color:"rgba(255,255,255,0.55)",margin:"0 0 32px",fontFamily:"'Georgia',serif",fontStyle:"italic",maxWidth:640,lineHeight:1.6}}>{p.subtitle}</p>
          <div style={{display:"flex",gap:32,flexWrap:"wrap"}}>
            {p.period&&<div><p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Period</p><p style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"rgba(255,255,255,0.65)",margin:0}}>{p.period}</p></div>}
            {p.fund&&<div><p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Funding</p>
              {p.fundUrl?<a href={p.fundUrl} target="_blank" rel="noopener noreferrer" style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:dom.accent,textDecoration:"none"}}>{p.fund} ↗</a>
              :<p style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"rgba(255,255,255,0.65)",margin:0}}>{p.fund}</p>}
            </div>}
            {p.ga&&<div><p style={{fontSize:9,fontFamily:"monospace",color:"rgba(255,255,255,0.3)",letterSpacing:"0.14em",textTransform:"uppercase",margin:"0 0 4px"}}>Grant Agreement</p><p style={{fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:"rgba(255,255,255,0.65)",margin:0}}>{p.ga}</p></div>}
          </div>
        </div>
      </div>

      {/* GALLERY if images exist */}
      {p.images&&p.images.length>0&&(
        <div style={{background:C.ink,padding:"2px 0"}}>
          <div style={{display:"grid",gridTemplateColumns:p.images.length>1?"1fr 1fr":"1fr",gap:2,maxHeight:300,overflow:"hidden"}}>
            {p.images.slice(0,2).map((img,i)=>(<img key={i} src={img} alt={`${p.name} ${i+1}`} style={{width:"100%",height:300,objectFit:"cover",display:"block"}}/>))}
          </div>
        </div>
      )}

      {/* CONTENT */}
      <div style={{background:C.white,padding:"64px 0 96px"}}>
        <div style={inner}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 300px",gap:64,alignItems:"start"}} className="l-proj-layout">
            <div>
              {[["About the project",p.about],["Funding & context",p.context]].map(([title,text])=>text&&(
                <div key={title} style={{marginBottom:44}}>
                  <h2 style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 18px",paddingBottom:12,borderBottom:`1px solid ${C.rule}`}}>{title}</h2>
                  <p style={{fontSize:15,color:C.inkMid,lineHeight:1.85,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{text}</p>
                </div>
              ))}
              <div style={{marginBottom:44}}>
                <h2 style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 18px",paddingBottom:12,borderBottom:`1px solid ${C.rule}`}}>Levery's role</h2>
                {p.leveryRole.map((item,i)=>(
                  <div key={i} style={{display:"flex",gap:14,alignItems:"flex-start",marginBottom:16}}>
                    <span style={{color:dom.accent,fontSize:10,marginTop:5,flexShrink:0}}>◆</span>
                    <p style={{fontSize:15,color:C.inkMid,lineHeight:1.75,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <aside style={{position:"sticky",top:88}} className="l-sidebar">
              <div style={{background:C.sand,borderRadius:2,padding:24,marginBottom:16,border:`1px solid ${C.rule}`}}>
                <p style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px"}}>Topics</p>
                <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                  {p.tags.map((tag,i)=>(<span key={i} style={{fontSize:11,fontFamily:"'Helvetica Neue',Arial,sans-serif",padding:"4px 10px",border:`1px solid ${C.rule}`,borderRadius:2,color:C.inkLight,background:C.white}}>{tag}</span>))}
                </div>
              </div>
              {p.partners&&p.partners.length>0&&(
                <div style={{background:C.sand,borderRadius:2,padding:24,marginBottom:16,border:`1px solid ${C.rule}`}}>
                  <p style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px"}}>Partners & funding</p>
                  {p.partners.map((pt,i)=>(<p key={i} style={{fontSize:13,color:C.inkMid,margin:"0 0 8px",fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.5}}>{pt}</p>))}
                </div>
              )}
              <div style={{background:dom.bg,borderRadius:2,padding:24}}>
                <p style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:"0 0 16px"}}>Interested in a similar project?</p>
                <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{display:"block",textAlign:"center",padding:"10px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,background:dom.accent,color:dom.bg,textDecoration:"none"}}>Book a call →</a>
              </div>
            </aside>
          </div>
        </div>
      </div>

      <div style={{background:C.sand,padding:"28px 0",borderTop:`1px solid ${C.rule}`}}>
        <div style={inner}><a href="/work" style={{fontSize:13,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Back to all projects</a></div>
      </div>

      <footer style={{background:C.ink,padding:"48px 0 0"}}>
        <div style={{...inner,paddingBottom:40,display:"grid",gridTemplateColumns:"2fr 1fr 1.4fr",gap:56,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
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
        <div style={{...inner,padding:"16px 32px"}}><span style={{fontSize:11,color:"rgba(255,255,255,0.18)",fontFamily:"monospace"}}>© 2026 Levery S.r.l. Società Benefit · All rights reserved</span></div>
      </footer>
    </div>
  );
}
