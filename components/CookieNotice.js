import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import styles from '../styles/cookie.module.css'

export default function CookieNotice({ t, hasCookieConsent }) {
  const [showNotice, setShowNotice] = useState(!hasCookieConsent);

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
