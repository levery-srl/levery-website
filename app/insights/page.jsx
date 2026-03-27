'use client'
const C={brand:"#2D4059",green:"#1E6B45",white:"#FFFFFF",ink:"#1A1A1A",inkLight:"#8A8A8A",sand:"#F5F2EC",rule:"#E0DBD3"}
export default function Page(){
  return(
    <div style={{fontFamily:"'Georgia',serif",background:C.sand,minHeight:"100vh",display:"flex",flexDirection:"column"}}>
      <style>{"*{box-sizing:border-box}body{margin:0}"}</style>
      <nav style={{background:"rgba(45,64,89,0.97)",height:64,display:"flex",alignItems:"center",padding:"0 32px",justifyContent:"space-between",position:"fixed",top:0,left:0,right:0,zIndex:100}}>
        <a href="/"><img src="/logo-white.svg" alt="Levery" height="28" style={{display:"block"}}/></a>
        <a href="/" style={{fontSize:13,color:"rgba(255,255,255,0.6)",fontFamily:"'Helvetica Neue',Arial,sans-serif",textDecoration:"none"}}>← Home</a>
      </nav>
      <div style={{flex:1,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:24,padding:"100px 32px 64px"}}>
        <span style={{fontSize:10,fontFamily:"monospace",letterSpacing:"0.18em",color:C.inkLight,textTransform:"uppercase"}}>Insights</span>
        <h1 style={{fontSize:42,fontWeight:400,color:C.ink,margin:0,fontFamily:"'Georgia',serif",textAlign:"center"}}>This page is coming soon.</h1>
        <p style={{fontSize:16,color:C.inkLight,fontFamily:"'Helvetica Neue',Arial,sans-serif",textAlign:"center",maxWidth:440,lineHeight:1.7,margin:0}}>Articles and sector analysis on R&D, sustainability and EU funding. We are building it.</p>
        <a href="https://outlook.office.com/book/InfoLevert@levery.it/" target="_blank" rel="noopener noreferrer" style={{background:C.green,color:C.white,padding:"12px 28px",borderRadius:2,fontSize:14,fontFamily:"'Helvetica Neue',Arial,sans-serif",fontWeight:600,textDecoration:"none",marginTop:8}}>Book a call →</a>
      </div>
    </div>
  )
}
