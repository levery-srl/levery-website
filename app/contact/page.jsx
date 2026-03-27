'use client'
import { useState } from "react";

const C={brand:"#2D4059",green:"#1E6B45",greenMid:"#2A8A58",
  white:"#FFFFFF",sand:"#F5F2EC",ink:"#1A1A1A",
  inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];
const FORMSPREE_ID="xpwdqgpb"; // replace with your Formspree form ID

function Input({label,name,type="text",required=false,value,onChange,placeholder=""}){
  return(
    <div style={{marginBottom:20}}>
      <label style={{display:"block",fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",marginBottom:8}}>{label}{required&&" *"}</label>
      <input type={type} name={name} required={required} value={value} onChange={onChange} placeholder={placeholder}
        style={{width:"100%",padding:"11px 14px",fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,border:`1px solid ${C.rule}`,borderRadius:2,outline:"none",transition:"border 0.2s",boxSizing:"border-box"}}
        onFocus={e=>e.target.style.borderColor=C.green}
        onBlur={e=>e.target.style.borderColor=C.rule}/>
    </div>
  );
}

function Select({label,name,required=false,value,onChange,options}){
  return(
    <div style={{marginBottom:20}}>
      <label style={{display:"block",fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",marginBottom:8}}>{label}{required&&" *"}</label>
      <select name={name} required={required} value={value} onChange={onChange}
        style={{width:"100%",padding:"11px 14px",fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:value?C.ink:C.inkLight,background:C.white,border:`1px solid ${C.rule}`,borderRadius:2,outline:"none",appearance:"none",boxSizing:"border-box"}}>
        <option value="">Select…</option>
        {options.map(o=>(<option key={o} value={o}>{o}</option>))}
      </select>
    </div>
  );
}

export default function ContactPage(){
  const [form,setForm]=useState({name:"",company:"",email:"",topic:"",message:""});
  const [status,setStatus]=useState("idle"); // idle | sending | success | error

  const set=k=>e=>setForm(f=>({...f,[k]:e.target.value}));

  const handleSubmit=async e=>{
    e.preventDefault();
    setStatus("sending");
    try{
      const res=await fetch(`https://formspree.io/f/${FORMSPREE_ID}`,{
        method:"POST",headers:{"Content-Type":"application/json"},
        body:JSON.stringify(form),
      });
      setStatus(res.ok?"success":"error");
    }catch{setStatus("error");}
  };

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-contact-grid{grid-template-columns:1fr!important}}`}</style>

      <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {NAV_LINKS.map(([label,href])=>(
              <li key={label}><a href={href} style={{color:href==="/contact"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:href==="/contact"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}>{label}</a></li>
            ))}
          </ul>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{background:`linear-gradient(145deg,${C.brand} 0%,#1A2D40 100%)`,padding:"120px 0 64px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:20}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)"}}>06</span>
            <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:0,fontFamily:"'Georgia',serif",lineHeight:1.05}}>Contact</h1>
          </div>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",margin:0,fontFamily:"'Georgia',serif",fontStyle:"italic",maxWidth:520,lineHeight:1.65}}>Tell us about your project. We respond within one working day.</p>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{background:C.white,padding:"64px 0 96px"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1.6fr",gap:80,alignItems:"start"}} className="l-contact-grid">

            {/* LEFT — info */}
            <div style={{position:"sticky",top:88}}>
              <h2 style={{fontSize:22,fontWeight:400,color:C.ink,margin:"0 0 16px",fontFamily:"'Georgia',serif"}}>Work with us</h2>
              <p style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 32px"}}>We work alongside construction manufacturers, material producers and contractors as a specialist R&D partner — from new product development to EU funding and ESPR compliance.</p>

              <div style={{marginBottom:32}}>
                <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px",paddingBottom:10,borderBottom:`1px solid ${C.rule}`}}>Book a call directly</p>
                <a href={BOOKING} target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:10,background:C.green,color:C.white,padding:"12px 24px",borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>
                  Book a 30-minute call →
                </a>
              </div>

              <div>
                <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 14px",paddingBottom:10,borderBottom:`1px solid ${C.rule}`}}>Direct contacts</p>
                <a href="mailto:info@levery.it" style={{display:"block",fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:8}}>info@levery.it</a>
                <a href="tel:+393396469607" style={{display:"block",fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",marginBottom:16}}>(+39) 339 646 9607</a>
                <p style={{fontSize:13,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:0}}>Via Pisino 66<br/>47814 Bellaria Igea Marina (RN)<br/>Italy</p>
              </div>
            </div>

            {/* RIGHT — form */}
            <div>
              {status==="success"?(
                <div style={{background:"#E8F5EE",border:"1px solid #A8E6CF",borderRadius:2,padding:"32px 28px",textAlign:"center"}}>
                  <span style={{fontSize:28,display:"block",marginBottom:12}}>✓</span>
                  <h3 style={{fontSize:20,fontWeight:400,color:C.green,fontFamily:"'Georgia',serif",margin:"0 0 10px"}}>Message received</h3>
                  <p style={{fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0,lineHeight:1.7}}>We will get back to you within one working day. In the meantime, feel free to <a href={BOOKING} target="_blank" rel="noopener noreferrer" style={{color:C.green}}>book a call directly</a>.</p>
                </div>
              ):(
                <form onSubmit={handleSubmit}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16}}>
                    <Input label="Name" name="name" required value={form.name} onChange={set("name")} placeholder="Name Surname"/>
                    <Input label="Company" name="company" value={form.company} onChange={set("company")} placeholder="Company name"/>
                  </div>
                  <Input label="Email" name="email" type="email" required value={form.email} onChange={set("email")} placeholder="info@yourcompany.com"/>
                  <Select label="Topic" name="topic" required value={form.topic} onChange={set("topic")}
                    options={["New product development","Sustainability & ESPR compliance","Digital Product Passport (DPP)","EU funding & Horizon Europe","Other"]}/>
                  <div style={{marginBottom:24}}>
                    <label style={{display:"block",fontSize:10,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",marginBottom:8}}>Message *</label>
                    <textarea name="message" required value={form.message} onChange={set("message")} rows={5}
                      placeholder="Describe your project or question briefly…"
                      style={{width:"100%",padding:"11px 14px",fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,border:`1px solid ${C.rule}`,borderRadius:2,outline:"none",resize:"vertical",boxSizing:"border-box"}}
                      onFocus={e=>e.target.style.borderColor=C.green}
                      onBlur={e=>e.target.style.borderColor=C.rule}/>
                  </div>
                  <p style={{fontSize:11,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.6,margin:"0 0 20px"}}>By submitting this form you agree to our <a href="/privacy" style={{color:C.inkLight}}>Privacy Policy</a>. Your data will only be used to respond to your enquiry.</p>
                  {status==="error"&&<p style={{fontSize:13,color:"#C0392B",fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:16}}>Something went wrong. Please try again or email us directly.</p>}
                  <button type="submit" disabled={status==="sending"}
                    style={{background:status==="sending"?C.inkLight:C.green,color:C.white,padding:"13px 32px",borderRadius:2,fontSize:15,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,border:"none",cursor:status==="sending"?"not-allowed":"pointer",transition:"background 0.2s"}}>
                    {status==="sending"?"Sending…":"Send message →"}
                  </button>
                </form>
              )}
            </div>
          </div>
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
