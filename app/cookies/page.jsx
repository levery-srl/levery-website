'use client'
import { useEffect } from 'react'
export default function CookiesPage() {
  useEffect(() => { window.location.replace('/privacy') }, [])
  return null
}
