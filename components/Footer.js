import Link from 'next/link';
import parse from 'html-react-parser';
import styles from '../styles/footer.module.css';

export default function Footer({ t }) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerSection}>
        <h3>{t('site-title')}</h3>
        <p>{t('footer-description')}</p>
      </div>
      <div className={styles.footerSection}>
        <h3>{t('footer-contacts')}</h3>
        <p>{parse(t('footer-email').replace(/class='contactLink'/g, `class='${styles.contactLink}'`))}</p>
        <p>{parse(t('footer-phone').replace(/class='contactLink'/g, `class='${styles.contactLink}'`))}</p>
      </div>
      <div className={styles.footerSection}>
        <h3>{t('footer-follow')}</h3>
        <div className={styles.socialIcons}>
          <Link href="https://www.facebook.com/cssm.group">📘</Link>
          <Link href="https://www.twitter.com/CSSMGroup">🐦</Link>
          <Link href="https://www.instagram.com/cssm.group">📷</Link>
          <Link href="#">💼</Link>
        </div>
      </div>
      <div className={`${styles.footerSection} ${styles.credit}`}>
        {t('footer-credit')} <span onClick={() => window.open('https://www.facebook.com/incolor.webstudio', '_blank')}>InColor Studios</span>
      </div>
    </footer>
  );
}