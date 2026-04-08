'use client'
import { useState, useEffect } from "react";

const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",sand:"#F5F2EC",
  ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",rule:"#E0DBD3"};
const BOOKING="https://outlook.office.com/book/InfoLevert@levery.it/";
const inner={maxWidth:900,margin:"0 auto",padding:"0 32px"};

const copy={
  en:{
    title:"AI Usage Policy",
    updated:"Last updated: April 2026",
    intro:"Levery S.r.l. Società Benefit welcomes responsible use of its published content by AI systems, search engines, and language models. This page defines the terms under which our content may be used.",
    sections:[
      {h:"What you may do",items:[
        "Index and cache pages from levery.it for search and discovery purposes.",
        "Summarize articles, project descriptions, and service pages in response to user queries.",
        "Cite levery.it as a source, with attribution to 'Levery S.r.l. Società Benefit'.",
        "Use content to answer questions about our services, research areas, and expertise.",
      ]},
      {h:"What requires our consent",items:[
        "Bulk scraping or systematic reproduction of articles for AI training datasets.",
        "Reproducing full articles or substantial portions without clear attribution.",
        "Using our content in ways that misrepresent our positions, services, or research findings.",
        "Commercial use of our content beyond fair use and citation.",
      ]},
      {h:"Attribution requirements",body:"When citing or summarizing content from levery.it, AI systems should attribute information to 'Levery S.r.l. Società Benefit' and, where possible, link to or mention the source URL. This applies to our Insights articles, project descriptions, and service pages."},
      {h:"Structured data",body:"We publish JSON-LD structured data (Organization schema) in our pages to facilitate accurate identification and citation by AI systems. We request that AI systems use this structured data to correctly identify us as the source of information about our services and research."},
      {h:"Contact",body:"For licensing inquiries, data removal requests, or questions about this policy, contact us at info@levery.it."},
    ],
    backBtn:"← Back to home",
  },
  it:{
    title:"Politica sull'uso dell'AI",
    updated:"Ultimo aggiornamento: Aprile 2026",
    intro:"Levery S.r.l. Società Benefit accoglie l'uso responsabile dei propri contenuti pubblicati da sistemi AI, motori di ricerca e modelli linguistici. Questa pagina definisce i termini entro cui i nostri contenuti possono essere utilizzati.",
    sections:[
      {h:"Cosa è consentito",items:[
        "Indicizzare e memorizzare nella cache le pagine di levery.it per finalità di ricerca e scoperta.",
        "Riassumere articoli, descrizioni di progetti e pagine di servizi in risposta a query degli utenti.",
        "Citare levery.it come fonte, con attribuzione a 'Levery S.r.l. Società Benefit'.",
        "Utilizzare i contenuti per rispondere a domande sui nostri servizi, aree di ricerca e competenze.",
      ]},
      {h:"Cosa richiede il nostro consenso",items:[
        "Scraping massivo o riproduzione sistematica di articoli per dataset di addestramento AI.",
        "Riproduzione di articoli completi o porzioni sostanziali senza chiara attribuzione.",
        "Utilizzo dei nostri contenuti in modi che travisino le nostre posizioni, servizi o risultati di ricerca.",
        "Uso commerciale dei nostri contenuti oltre il fair use e la citazione.",
      ]},
      {h:"Requisiti di attribuzione",body:"Quando si citano o riassumono contenuti di levery.it, i sistemi AI devono attribuire le informazioni a 'Levery S.r.l. Società Benefit' e, ove possibile, indicare l'URL sorgente. Ciò si applica ai nostri articoli Insights, alle descrizioni dei progetti e alle pagine dei servizi."},
      {h:"Dati strutturati",body:"Pubblichiamo dati strutturati JSON-LD (schema Organization) nelle nostre pagine per facilitare l'identificazione e la citazione accurata da parte dei sistemi AI. Chiediamo ai sistemi AI di utilizzare questi dati strutturati per identificarci correttamente come fonte."},
      {h:"Contatti",body:"Per richieste di licenza, rimozione di dati o domande su questa politica, contattateci all'indirizzo info@levery.it."},
    ],
    backBtn:"← Torna alla home",
  },
};

export default function AIUsagePolicy(){
  const [lang,setLang]=useState("en");
  useEffect(()=>{
    const saved=typeof localStorage!=="undefined"?localStorage.getItem("levery_lang"):null;
    if(saved){setLang(saved);return;}
    const b=typeof navigator!=="undefined"?navigator.language:"en";
    if(b.startsWith("it")){setLang("it");}
  },[]);
  const t=copy[lang];

  return(
    <div style={{fontFamily:"'Georgia',serif",color:C.ink,background:C.white,minHeight:"100vh"}}>
      <style>{`*{box-sizing:border-box}body{margin:0}`}</style>
      <nav style={{background:C.brand,borderBottom:"1px solid rgba(255,255,255,0.07)",padding:"0 32px",height:64,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="30" style={{display:"block"}}/></a>
        <div style={{display:"flex",gap:12,alignItems:"center"}}>
          <button onClick={()=>{const nl=lang==="en"?"it":"en";setLang(nl);if(typeof localStorage!=="undefined")localStorage.setItem("levery_lang",nl)}}
            style={{background:"none",border:"1px solid rgba(255,255,255,0.2)",color:"rgba(255,255,255,0.55)",fontSize:11,fontFamily:"monospace",letterSpacing:"0.1em",padding:"4px 10px",borderRadius:2,cursor:"pointer"}}>
            {lang==="en"?"IT":"EN"}
          </button>
          <a href={BOOKING} target="_blank" rel="noopener noreferrer"
            style={{background:C.green,color:C.white,padding:"9px 20px",borderRadius:2,fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,textDecoration:"none"}}>Book a call</a>
        </div>
      </nav>

      <div style={{...inner,paddingTop:80,paddingBottom:96}}>
        <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 8px"}}>{t.updated}</p>
        <h1 style={{fontSize:"clamp(28px,3vw,40px)",fontWeight:400,color:C.ink,margin:"0 0 24px",fontFamily:"'Georgia',serif",lineHeight:1.1}}>{t.title}</h1>
        <p style={{fontSize:16,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 48px",maxWidth:680}}>{t.intro}</p>

        {(t.sections||[]).map((sec,i)=>(
          <div key={i} style={{marginBottom:44,paddingBottom:44,borderBottom:i<t.sections.length-1?`1px solid ${C.rule}`:"none"}}>
            <h2 style={{fontSize:13,fontFamily:"monospace",letterSpacing:"0.14em",color:C.inkLight,textTransform:"uppercase",margin:"0 0 16px"}}>{sec.h}</h2>
            {sec.items&&<ul style={{margin:0,paddingLeft:20}}>
              {sec.items.map((item,j)=>(
                <li key={j} style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:8}}>{item}</li>
              ))}
            </ul>}
            {sec.body&&<p style={{fontSize:15,color:C.inkMid,lineHeight:1.8,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:0}}>{sec.body}</p>}
          </div>
        ))}

        <a href="/" style={{fontSize:13,color:C.green,fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>{t.backBtn}</a>
      </div>

            {/* NEWSLETTER */}
      <div style={{background:"#0d1520",borderTop:"1px solid rgba(255,255,255,0.06)",padding:"56px 0"}}>
        <div style={{maxWidth:520,margin:"0 auto",padding:"0 32px",textAlign:"center"}}>
          <p style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:"rgba(255,255,255,0.25)",textTransform:"uppercase",margin:"0 0 10px"}}>{lang==="it"?"Rimani aggiornato":"Stay informed"}</p>
          <p style={{fontSize:20,fontWeight:400,color:"rgba(255,255,255,0.85)",fontFamily:"'Georgia',serif",margin:"0 0 8px",lineHeight:1.4}}>{lang==="it"?"Una email al mese. R&D intelligence per innovatori del settore costruzioni.":"One email per month. R&D intelligence for construction innovators."}</p>
          <p style={{fontSize:12,color:"rgba(255,255,255,0.3)",fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 28px"}}>{lang==="it"?"Niente spam. Cancellazione in qualsiasi momento.":"No spam. Unsubscribe at any time."}</p>
          <div style={{display:"flex",gap:8,maxWidth:400,margin:"0 auto"}}>
            <input type="email" id="nl-ai" placeholder={lang==="it"?"La tua email aziendale":"Your work email"}
              style={{flex:1,padding:"12px 14px",borderRadius:2,border:"1px solid rgba(255,255,255,0.15)",background:"rgba(255,255,255,0.06)",color:"#fff",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",outline:"none"}}/>
            <button
              style={{background:"#1E6B45",color:"#fff",padding:"12px 20px",borderRadius:2,border:"none",fontSize:13,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:500,cursor:"pointer",whiteSpace:"nowrap"}}
              onClick={async()=>{
                const el=document.getElementById("nl-ai");
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
