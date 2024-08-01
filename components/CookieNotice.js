import { useState, useEffect } from 'react'

export default function CookieNotice({ t }) {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent')
    if (!consent) {
      setShowNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div id="cookie-notice">
      <div>
        <p>{t('cookie-notice-text')}</p>
        <button onClick={acceptCookies}>{t('cookie-notice-accept')}</button>
      </div>
    </div>
  )
}