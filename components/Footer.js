import Link from 'next/link'

export default function Footer({ t }) {
  return (
    <footer>
      <div className="footer-section">
        <h3>CSSM Group</h3>
        <p>{t('footer-description')}</p>
      </div>
      <div className="footer-section">
        <h3>{t('footer-contacts')}</h3>
        <p>{t('footer-email')}</p>
        <p>{t('footer-phone')}</p>
      </div>
      <div className="footer-section">
        <h3>{t('footer-follow')}</h3>
        <div className="social-icons">
          <Link href="https://www.facebook.com/Fyennyi">📘</Link>
          <Link href="https://www.twitter.com/Fyennyi">🐦</Link>
          <Link href="https://www.instagram.com/fyennyi">📷</Link>
          <Link href="#">💼</Link>
        </div>
      </div>
      <div className="credit">
        {t('footer-credit')} <span onClick={() => window.open('https://incolorstudios.com', '_blank')}>InColor Studios</span>
      </div>
    </footer>
  )
}