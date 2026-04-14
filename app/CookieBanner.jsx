'use client'
import {useState,useEffect} from 'react'

export default function CookieBanner(){
  const [visible,setVisible]=useState(false)
  const [lang,setLang]=useState('en')

  useEffect(()=>{
    const saved=typeof localStorage!=='undefined'?localStorage.getItem('levery_lang'):null
    if(saved) setLang(saved)
    const consent=typeof localStorage!=='undefined'?localStorage.getItem('levery_cookie_consent'):null
    if(!consent) setVisible(true)
  },[])

  function accept(){
    if(typeof localStorage!=='undefined') localStorage.setItem('levery_cookie_consent','accepted')
    // Enable GA4
    if(typeof window!=='undefined'&&window.gtag){
      window.gtag('consent','update',{'analytics_storage':'granted'})
    }
    setVisible(false)
  }

  function decline(){
    if(typeof localStorage!=='undefined') localStorage.setItem('levery_cookie_consent','declined')
    setVisible(false)
  }

  if(!visible) return null

  const it=lang==='it'
  return(
    <div style={{position:'fixed',bottom:0,left:0,right:0,zIndex:9999,background:'#111820',borderTop:'1px solid rgba(255,255,255,0.1)',padding:'16px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',flexWrap:'wrap',gap:12}}>
      <p style={{margin:0,fontSize:12,color:'rgba(255,255,255,0.6)',fontFamily:"'Helvetica Neue',Arial,sans-serif",maxWidth:600,lineHeight:1.5}}>
        {it
          ? <>Utilizziamo cookie analitici (Google Analytics) per migliorare il sito. Nessun dato personale viene venduto. <a href="/privacy" style={{color:'rgba(255,255,255,0.4)',textDecoration:'underline'}}>Privacy &amp; Cookie Policy</a></>
          : <>We use analytics cookies (Google Analytics) to improve this site. No personal data is sold. <a href="/privacy" style={{color:'rgba(255,255,255,0.4)',textDecoration:'underline'}}>Privacy &amp; Cookie Policy</a></>
        }
      </p>
      <div style={{display:'flex',gap:8,flexShrink:0}}>
        <button onClick={decline} style={{background:'none',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.5)',fontSize:11,fontFamily:'monospace',letterSpacing:'0.08em',padding:'7px 16px',borderRadius:2,cursor:'pointer'}}>
          {it?'Rifiuta':'Decline'}
        </button>
        <button onClick={accept} style={{background:'#1E6B45',border:'none',color:'#fff',fontSize:11,fontFamily:'monospace',letterSpacing:'0.08em',padding:'7px 16px',borderRadius:2,cursor:'pointer'}}>
          {it?'Accetta':'Accept'}
        </button>
      </div>
    </div>
  )
}
