import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Footer = () => {
  const { translate } = useTranslation();

  return (
    <footer>
      <div className="footer-section">
        <h3>CSSM Group</h3>
        <p>{translate('footer-description')}</p>
      </div>
      <div className="footer-section">
        <h3>{translate('footer-contacts')}</h3>
        <p>{translate('footer-email')}</p>
        <p>{translate('footer-phone')}</p>
      </div>
      <div className="footer-section">
        <h3>{translate('footer-follow')}</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/Fyennyi" aria-label="Facebook">📘</a>
          <a href="https://www.twitter.com/Fyennyi" aria-label="Twitter">🐦</a>
          <a href="https://www.instagram.com/fyennyi" aria-label="Instagram">📷</a>
          <a href="#" aria-label="LinkedIn">💼</a>
        </div>
      </div>
      <div className="credit">
        З любов'ю створено в <span onClick={() => window.location.href='https://incolorstudios.com'}>InColor Studios</span>
      </div>
    </footer>
  );
};

export default Footer;