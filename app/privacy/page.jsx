'use client'
const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",ink:"#1A1A1A",inkMid:"#4A4A4A",inkLight:"#8A8A8A",sand:"#F5F2EC",rule:"#E0DBD3"}
const Section=({title,children})=>(
  <div style={{marginBottom:40}}>
    <h2 style={{fontSize:16,fontWeight:600,color:C.ink,fontFamily:"'Helvetica Neue',Arial,sans-serif",margin:"0 0 12px",paddingBottom:10,borderBottom:`1px solid ${C.rule}`}}>{title}</h2>
    <div style={{fontSize:14,color:C.inkMid,lineHeight:1.85,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>{children}</div>
  </div>
)
export default function PrivacyPage(){
  return(
    <div style={{fontFamily:"'Georgia',serif",background:C.white,minHeight:"100vh"}}>
      <style>{"*{box-sizing:border-box}body{margin:0}p{margin:0 0 14px}a{color:#1E6B45}"}</style>
      <nav style={{background:"rgba(45,64,89,0.97)",height:64,display:"flex",alignItems:"center",padding:"0 32px",justifyContent:"space-between",position:"fixed",top:0,left:0,right:0,zIndex:100}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="28" style={{display:"block"}}/></a>
        <a href="/" style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Home</a>
      </nav>
      <div style={{maxWidth:760,margin:"0 auto",padding:"100px 32px 80px"}}>
        <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.16em",color:C.inkLight,textTransform:"uppercase",display:"block",marginBottom:16}}>Legal</span>
        <h1 style={{fontSize:36,fontWeight:400,color:C.ink,margin:"0 0 8px",fontFamily:"'Georgia',serif"}}>Privacy & Cookie Policy</h1>
        <p style={{fontSize:13,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",marginBottom:48}}>Ultimo aggiornamento: marzo 2026 · Last updated: March 2026</p>

        <Section title="Titolare del trattamento / Data Controller">
          <p><strong>Levery S.r.l. Società Benefit</strong><br/>
          Via Pisino 66, 47814 Bellaria Igea Marina (RN), Italia<br/>
          P.IVA / VAT: IT04730050400<br/>
          Email: <a href="mailto:info@levery.it">info@levery.it</a></p>
        </Section>

        <Section title="Dati raccolti / Data collected">
          <p>Il presente sito raccoglie i seguenti dati personali: / This website collects the following personal data:</p>
          <p>• <strong>Dati di navigazione</strong> — indirizzo IP, tipo di browser, pagine visitate, durata della visita (tramite Google Analytics 4 e PostHog).<br/>
          • <strong>Dati di contatto</strong> — nome e indirizzo email forniti volontariamente tramite il modulo di contatto.<br/>
          • <strong>Dati di prenotazione</strong> — nome e email forniti tramite il servizio Microsoft Teams Bookings per la prenotazione di chiamate.</p>
        </Section>

        <Section title="Base giuridica / Legal basis">
          <p>Il trattamento dei dati è basato su: / The legal basis for processing is:</p>
          <p>• <strong>Consenso</strong> (Art. 6(1)(a) GDPR) — per i cookie analitici non essenziali.<br/>
          • <strong>Esecuzione di un contratto</strong> (Art. 6(1)(b) GDPR) — per i dati forniti ai fini di una richiesta o prenotazione.<br/>
          • <strong>Legittimo interesse</strong> (Art. 6(1)(f) GDPR) — per l'analisi aggregata delle statistiche di navigazione.</p>
        </Section>

        <Section title="Cookie Policy">
          <p>Questo sito utilizza i seguenti tipi di cookie: / This website uses the following cookies:</p>
          <p>• <strong>Cookie tecnici essenziali</strong> — necessari per il funzionamento del sito. Non richiedono consenso.<br/>
          • <strong>Cookie analitici</strong> — Google Analytics 4 (GA4) e PostHog, per analizzare il traffico in forma aggregata e anonimizzata. Richiedono consenso.<br/>
          • <strong>Cookie di terze parti</strong> — Microsoft Teams Bookings, utilizzato solo se si accede alla pagina di prenotazione.</p>
          <p>Puoi gestire o revocare il consenso ai cookie in qualsiasi momento tramite le impostazioni del tuo browser o contattandoci a <a href="mailto:info@levery.it">info@levery.it</a>.</p>
        </Section>

        <Section title="Conservazione dei dati / Data retention">
          <p>I dati analitici sono conservati per 14 mesi (impostazione predefinita GA4). I dati di contatto sono conservati per il tempo necessario a evadere la richiesta e, ove applicabile, per gli obblighi di legge.</p>
          <p>Analytics data is retained for 14 months (GA4 default). Contact data is retained for as long as necessary to process the request and, where applicable, to comply with legal obligations.</p>
        </Section>

        <Section title="Diritti dell'interessato / Your rights">
          <p>Ai sensi del GDPR, hai il diritto di: accedere ai tuoi dati, rettificarli, cancellarli, limitarne il trattamento, opporti al trattamento e alla portabilità dei dati. / Under the GDPR, you have the right to: access, rectify, erase, restrict, object to processing and data portability.</p>
          <p>Per esercitare i tuoi diritti / To exercise your rights: <a href="mailto:info@levery.it">info@levery.it</a></p>
          <p>Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">garanteprivacy.it</a>).</p>
        </Section>

        <Section title="Trasferimenti internazionali / International transfers">
          <p>Google Analytics 4 e PostHog possono trasferire dati negli USA sulla base delle Standard Contractual Clauses approvate dalla Commissione Europea. / Google Analytics 4 and PostHog may transfer data to the USA based on Standard Contractual Clauses approved by the European Commission.</p>
        </Section>

        <Section title="Modifiche / Changes">
          <p>Il Titolare si riserva il diritto di aggiornare questa policy. Le modifiche saranno pubblicate su questa pagina con aggiornamento della data in cima. / The Controller reserves the right to update this policy. Changes will be published on this page with an updated date at the top.</p>
        </Section>

        <div style={{marginTop:48,paddingTop:24,borderTop:`1px solid ${C.rule}`,fontSize:12,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif"}}>
          <p>Levery S.r.l. Società Benefit · P.IVA IT04730050400 · Via Pisino 66, 47814 Bellaria Igea Marina (RN) · <a href="mailto:info@levery.it">info@levery.it</a></p>
        </div>
      </div>
    </div>
  )
}
