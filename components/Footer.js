import Link from 'next/link';
import styles from '../styles/footer.module.css'

export default function Footer({ t }) {
  return (
    <footer>
      <div className="footerSection">
        <h3>{t('site-title')}</h3>
        <p>{t('footer-description')}</p>
      </div>
      <div className="footerSection">
        <h3>{t('footer-contacts')}</h3>
        <p>{parse(t('footer-email'))}</p>
        <p>{parse(t('footer-phone'))}</p>
      </div>
      <div className="footerSection">
        <h3>{t('footer-follow')}</h3>
        <div className="socialIcons">
          <Link href="https://www.facebook.com/Fyennyi">📘</Link>
          <Link href="https://www.twitter.com/Fyennyi">🐦</Link>
          <Link href="https://www.instagram.com/fyennyi">📷</Link>
          <Link href="#">💼</Link>
        </div>
      </div>
      <div className="footerSection credit">
        {t('footer-credit')} <span onClick={() => window.open('https://www.facebook.com/incolor.webstudio', '_blank')}>InColor Studios</span>
      </div>
    </footer>
  );
}