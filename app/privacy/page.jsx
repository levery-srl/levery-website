'use client'
const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",sand:"#F5F2EC",rule:"#E0DBD3"}
const S=({title,children})=>(<div style={{marginBottom:40}}><h2 style={{fontSize:15,fontWeight:600,color:C.ink,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 10px",paddingBottom:10,borderBottom:`1px solid ${C.rule}`}}>{title}</h2><div style={{fontSize:14,color:C.inkMid,lineHeight:1.85,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{children}</div></div>)
export default function PrivacyPage(){
  return(
    <div style={{fontFamily:"'Georgia',serif",background:C.white,minHeight:"100vh"}}>
      <style>{"*{box-sizing:border-box}body{margin:0}p{margin:0 0 12px}a{color:#1E6B45}"}</style>
      <nav style={{background:"rgba(45,64,89,0.97)",height:64,display:"flex",alignItems:"center",padding:"0 32px",justifyContent:"space-between",position:"fixed",top:0,left:0,right:0,zIndex:100}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="28" style={{display:"block"}}/></a>
        <a href="/" style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Home</a>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"96px 32px 80px"}}>
        <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:14}}>Legal</span>
        <h1 style={{fontSize:34,fontWeight:400,color:C.ink,margin:"0 0 6px",fontFamily:"'Georgia',serif"}}>Privacy & Cookie Policy</h1>
        <p style={{fontSize:13,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:48}}>Ultimo aggiornamento: marzo 2026 · Last updated: March 2026</p>
        <S title="Titolare del trattamento / Data Controller"><p><strong>Levery S.r.l. Società Benefit</strong><br/>Via Pisino 66, 47814 Bellaria Igea Marina (RN), Italia<br/>P.IVA / VAT: IT04730050400<br/>Email: <a href="mailto:info@levery.it">info@levery.it</a></p></S>
        <S title="Dati raccolti / Data collected"><p>• <strong>Dati di navigazione</strong> — IP, browser, pagine visitate (Google Analytics 4 e PostHog).<br/>• <strong>Dati di contatto</strong> — nome ed email forniti tramite il form di contatto.<br/>• <strong>Dati di prenotazione</strong> — nome ed email tramite Microsoft Teams Bookings.</p></S>
        <S title="Base giuridica / Legal basis"><p>• <strong>Consenso</strong> (Art. 6(1)(a) GDPR) — cookie analitici.<br/>• <strong>Esecuzione contratto</strong> (Art. 6(1)(b) GDPR) — richieste e prenotazioni.<br/>• <strong>Legittimo interesse</strong> (Art. 6(1)(f) GDPR) — statistiche aggregate.</p></S>
        <S title="Cookie Policy"><p>• <strong>Cookie tecnici essenziali</strong> — necessari, nessun consenso richiesto.<br/>• <strong>Cookie analitici</strong> — Google Analytics 4 e PostHog, forma aggregata e anonimizzata. Richiedono consenso.<br/>• <strong>Cookie terze parti</strong> — Microsoft Teams Bookings (solo se si accede alla pagina di prenotazione).<br/><br/>Puoi revocare il consenso in qualsiasi momento via impostazioni browser o scrivendo a <a href="mailto:info@levery.it">info@levery.it</a>.</p></S>
        <S title="Conservazione / Retention"><p>Dati analitici: 14 mesi (GA4 default). Dati di contatto: fino all'evasione della richiesta e per gli obblighi di legge.</p></S>
        <S title="I tuoi diritti / Your rights"><p>Accesso, rettifica, cancellazione, limitazione, opposizione e portabilità (Art. 15-20 GDPR). Contatto: <a href="mailto:info@levery.it">info@levery.it</a><br/>Reclami al Garante Privacy: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a></p></S>
        <S title="Trasferimenti internazionali / International transfers"><p>GA4 e PostHog possono trasferire dati negli USA tramite Standard Contractual Clauses (SCC) approvate dalla Commissione Europea.</p></S>
        <div style={{marginTop:40,paddingTop:20,borderTop:`1px solid ${C.rule}`,fontSize:12,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}><p>Levery S.r.l. Società Benefit · P.IVA IT04730050400 · Via Pisino 66, 47814 Bellaria Igea Marina (RN) · <a href="mailto:info@levery.it">info@levery.it</a></p></div>
      </div>
    </div>
  )
}
