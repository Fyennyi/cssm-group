import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/cookie.module.css'

export default function CookieNotice({ t }) {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const consent = Cookies.get('cookieConsent')
    if (!consent) {
      setShowNotice(true)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set('cookieConsent', 'accepted', { expires: 365 })
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div className={styles.cookieNotice}>
      <div className={styles.cookieContainer}>
        <p className={styles.cookieText}>{t('cookie-notice-text')}</p>
        <button onClick={acceptCookies} className={styles.acceptCookiesButton}>{t('cookie-notice-accept')}</button>
      </div>
    </div>
  )
}