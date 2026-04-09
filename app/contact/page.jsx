'use client'
import { useState, useEffect } from "react";

const C={brand:"#2D4059",green:"#1E6B45",greenMid:"#2A8A58",
  white:"#FFFFFF",sand:"#F5F2EC",ink:"#1A1A1A",
  inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const NAV_LINKS=[["Work","/work"],["Products","/products"],["Insights","/insights"],["Impact","/impact"],["Team","/team"],["Contact","/contact"]];
// FormSubmit — no account needed, sends directly to info@levery.it

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

const copy={
  en:{
    pageLabel:"Contact", pageTitle:"Let's talk.",
    pageSub:"Tell us about your project.",
    langSwitch:"IT",bookCTA:"Book a call",
    namePh:"Your name",companyPh:"Company",emailPh:"Work email",msgPh:"Describe your project or challenge — what are you working on?",
    submit:"Send message",sending:"Sending…",sent:"Message sent — we will be in touch within one working day.",
    altTitle:"Or book a call directly",altSub:"Choose a time that works for you.",
    altBtn:"Open booking calendar →",
    nameLabel:"Name",companyLabel:"Company",emailLabel:"Email",msgLabel:"Message",
  },
  it:{
    pageLabel:"Contatti", pageTitle:"Parliamo.",
    pageSub:"Raccontaci il tuo progetto.",
    langSwitch:"EN",bookCTA:"Prenota una call",
    namePh:"Il tuo nome",companyPh:"Azienda",emailPh:"Email aziendale",msgPh:"Descrivi il tuo progetto o la tua sfida — su cosa stai lavorando?",
    submit:"Invia messaggio",sending:"Invio in corso…",sent:"Messaggio inviato — ti risponderemo entro un giorno lavorativo.",
    altTitle:"Oppure prenota una call direttamente",altSub:"Scegli il momento che preferisci.",
    altBtn:"Apri il calendario →",
    nameLabel:"Nome",companyLabel:"Azienda",emailLabel:"Email",msgLabel:"Messaggio",
  },
};

export default function ContactPage(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const browser=typeof navigator!=="undefined"?navigator.language:"en";
    if(browser.startsWith("it")){setLang("it");if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang","it");}
  },[]);
  const t=copy[lang]||copy["en"];
  const [form,setForm]=useState({name:"",company:"",email:"",topic:"",message:""});
  const [status,setStatus]=useState("idle"); // idle | sending | success | error

  const set=k=>e=>setForm(f=>({...f,[k]:e.target.value}));

  const handleSubmit=async e=>{
    e.preventDefault();
    setStatus("sending");
    try{
      const res=await fetch("https://formsubmit.co/ajax/info@levery.it",{
        method:"POST",headers:{"Content-Type":"application/json","Accept":"application/json"},
        body:JSON.stringify(form),
      });
      setStatus(res.ok?"success":"error");
    }catch{setStatus("error");}
  };

  return(
    <div style={{fontFamily:"'Georgia','Times New Roman',serif",color:C.ink,background:C.white,overflowX:"hidden",paddingBottom:0}}>
      <style>{`*{box-sizing:border-box}body{margin:0}@media(max-width:900px){.l-nav-links{display:none!important}.l-contact-grid{grid-template-columns:1fr!important}}`}</style>

            <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,background:"rgba(45,64,89,0.97)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
          <ul style={{display:"flex",gap:28,listStyle:"none",margin:0,padding:0}} className="l-nav-links">
            {[["Work","Lavori","/work"],["Products","Prodotti","/products"],["Insights","Insights","/insights"],["Impact","Impatto","/impact"],["Team","Team","/team"],["Contact","Contatti","/contact"]].map(([en,it,path])=>(
              <li key={path}><a href={path} style={{color:path==="/contact"?"#fff":"rgba(255,255,255,0.72)",textDecoration:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",borderBottom:path==="/contact"?"1px solid rgba(255,255,255,0.35)":"none",paddingBottom:2}}
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


      {/* HEADER */}
      <div style={{background:`linear-gradient(145deg,#1C2D40 0%,${C.brand} 100%)`,padding:"clamp(140px,15vh,200px) 0 80px",position:"relative",overflow:"hidden"}}>
        <svg style={{position:"absolute",inset:0,width:"100%",height:"100%",opacity:0.06,pointerEvents:"none"}} viewBox="0 0 1200 280" preserveAspectRatio="xMidYMid slice">
          {Array.from({length:14},(_,i)=>(<line key={i} x1={i*95-40} y1="0" x2={i*95+160} y2="280" stroke="#7EC8E3" strokeWidth="1"/>))}
        </svg>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:1}}>
          <div style={{display:"flex",alignItems:"baseline",gap:16,marginBottom:16}}>
            <span style={{fontFamily:"monospace",fontSize:22,color:"rgba(255,255,255,0.15)",letterSpacing:"-0.02em"}}>06</span>
            <span style={{fontSize:9,fontFamily:"monospace",letterSpacing:"0.18em",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{t.pageLabel}</span>
          </div>
          <h1 style={{fontSize:"clamp(36px,3.5vw,52px)",fontWeight:400,color:C.white,margin:"0 0 14px",fontFamily:"'Georgia',serif",lineHeight:1.05}}>{t.pageTitle}</h1>
          <p style={{fontSize:16,color:"rgba(255,255,255,0.55)",margin:0,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontStyle:"italic",maxWidth:520,lineHeight:1.65}}>{t.pageSub}</p>
        </div>
      </div>

      {/* CONTENT */}
      {/* FORM */}
      <div style={{background:C.white,padding:"80px 0"}}>
        <div style={{maxWidth:1200,margin:"0 auto",padding:"0 32px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64}} className="l-contact-grid">
            {/* Left: info */}
            <div>
              <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",marginBottom:8}}>
                {lang==="it"?"Parliamo":"Let's talk"}
              </p>
              <h2 style={{fontSize:28,fontWeight:400,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 24px",lineHeight:1.2}}>
                {lang==="it"?"Come possiamo aiutarti?":"How can we help?"}
              </h2>
              <p style={{fontSize:15,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",lineHeight:1.7,margin:"0 0 40px"}}>
                {lang==="it"
                  ?"Siamo attivi su nuovi prodotti, sostenibilità, finanziamenti EU e strumenti digitali. Scrivici e ti risponderemo."
                  :"We are active on new products, sustainability, EU funding and digital tools. Write to us and we will get back to you."}
              </p>
              <div style={{display:"flex",flexDirection:"column",gap:12}}>
                <a href="mailto:info@levery.it" style={{fontSize:15,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",fontWeight:500}}>info@levery.it</a>
                <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer"
                  style={{display:"inline-flex",alignItems:"center",gap:8,fontSize:13,color:C.ink,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none",border:`1px solid ${C.rule}`,borderRadius:2,padding:"10px 18px",width:"fit-content"}}>
                  {lang==="it"?"Prenota una call →":"Book a call →"}
                </a>
              </div>
            </div>
            {/* Right: form */}
            <div>
              {status==="success" ? (
                <div style={{padding:"48px 32px",background:C.sand,borderRadius:2,textAlign:"center"}}>
                  <p style={{fontSize:22,fontWeight:400,color:C.ink,fontFamily:"'Georgia',serif",margin:"0 0 12px"}}>
                    {lang==="it"?"Messaggio ricevuto.":"Message received."}
                  </p>
                  <p style={{fontSize:14,color:C.inkMid,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>
                    {lang==="it"?"Ti risponderemo al più presto.":"We will get back to you soon."}
                  </p>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:16}} onSubmit={handleSubmit}>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                    <div>
                      <label style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:6}}>
                        {lang==="it"?"Nome":"Name"} *
                      </label>
                      <input value={form.name} onChange={set("name")} required
                        style={{width:"100%",padding:"10px 12px",border:`1px solid ${C.rule}`,borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,outline:"none",boxSizing:"border-box"}}
                        placeholder={lang==="it"?"Il tuo nome":"Your name"}/>
                    </div>
                    <div>
                      <label style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:6}}>
                        {lang==="it"?"Azienda":"Company"}
                      </label>
                      <input value={form.company} onChange={set("company")}
                        style={{width:"100%",padding:"10px 12px",border:`1px solid ${C.rule}`,borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,outline:"none",boxSizing:"border-box"}}
                        placeholder={lang==="it"?"La tua azienda":"Your company"}/>
                    </div>
                  </div>
                  <div>
                    <label style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:6}}>
                      Email *
                    </label>
                    <input type="email" value={form.email} onChange={set("email")} required
                      style={{width:"100%",padding:"10px 12px",border:`1px solid ${C.rule}`,borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,outline:"none",boxSizing:"border-box"}}
                      placeholder={lang==="it"?"La tua email aziendale":"Your work email"}/>
                  </div>
                  <div>
                    <label style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:6}}>
                      {lang==="it"?"Di cosa hai bisogno?":"What do you need?"}
                    </label>
                    <select value={form.topic} onChange={set("topic")}
                      style={{width:"100%",padding:"10px 12px",border:`1px solid ${C.rule}`,borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:form.topic?C.ink:C.inkLight,background:C.white,outline:"none",boxSizing:"border-box",appearance:"none"}}>
                      <option value="">{lang==="it"?"Seleziona un argomento":"Select a topic"}</option>
                      <option value="product">{lang==="it"?"Sviluppo nuovi prodotti":"New product development"}</option>
                      <option value="sustainability">{lang==="it"?"Sostenibilità e circolarità":"Sustainability & circularity"}</option>
                      <option value="funding">{lang==="it"?"Finanziamenti EU":"EU funding"}</option>
                      <option value="digital">{lang==="it"?"Strumenti digitali (DPP, AR)":"Digital tools (DPP, AR)"}</option>
                      <option value="other">{lang==="it"?"Altro":"Other"}</option>
                    </select>
                  </div>
                  <div>
                    <label style={{fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:6}}>
                      {lang==="it"?"Messaggio":"Message"} *
                    </label>
                    <textarea value={form.message} onChange={set("message")} required rows={5}
                      style={{width:"100%",padding:"10px 12px",border:`1px solid ${C.rule}`,borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",color:C.ink,background:C.white,outline:"none",resize:"vertical",boxSizing:"border-box"}}
                      placeholder={lang==="it"?"Raccontaci il tuo progetto o sfida...":"Tell us about your project or challenge..."}/>
                  </div>
                  {status==="error"&&(
                    <p style={{fontSize:13,color:"#c0392b",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>
                      {lang==="it"?"Errore nell'invio. Scrivi a info@levery.it":"Error sending. Write to info@levery.it"}
                    </p>
                  )}
                  <button onClick={handleSubmit} disabled={status==="sending"}
                    style={{background:C.green,color:C.white,padding:"13px 28px",borderRadius:2,border:"none",fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,cursor:status==="sending"?"not-allowed":"pointer",opacity:status==="sending"?0.7:1,alignSelf:"flex-start"}}>
                    {status==="sending"
                      ?(lang==="it"?"Invio...":"Sending...")
                      :(lang==="it"?"Invia messaggio":"Send message")}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* NEWSLETTER */}
      <div style={{background:"#111820",borderTop:"1px solid rgba(255,255,255,0.08)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4,whiteSpace:"pre-line"}}>{lang==="it"?"Una email al mese.\nR&D e innovazione per il settore delle costruzioni.":"One email per month.\nR&D and innovation news for the construction industry."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-contact" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-contact");
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
