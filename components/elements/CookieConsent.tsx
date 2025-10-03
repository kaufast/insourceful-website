'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowBanner(false)
  }

  if (!mounted || !showBanner) return null

  return (
    <div 
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0, 0, 0, 0.95)',
        color: 'white',
        zIndex: 9999,
        padding: '20px 0',
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)'
      }}
    >
      <div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.5 }}>
                  We use cookies to enhance your browsing experience, serve personalized content, 
                  and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. 
                  Learn more in our <Link href="/privacy-policy" style={{ color: '#007bff', textDecoration: 'underline' }}>Privacy Policy</Link>.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  onClick={declineCookies}
                  style={{
                    padding: '10px 20px',
                    border: '1px solid #6c757d',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: 'transparent',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Decline
                </button>
                <button 
                  onClick={acceptCookies}
                  style={{
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: '500',
                    background: '#ea1b29',
                    color: 'white',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Accept All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}