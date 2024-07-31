import React, { useState, useEffect } from 'react';
import { useTranslation } from '../context/TranslationContext';

const CookieNotice = () => {
  const { translate } = useTranslation();
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('cookieAccepted');
    if (!cookieAccepted) {
      setShowNotice(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieAccepted', 'true');
    setShowNotice(false);
  };

  if (!showNotice) return null;

  return (
    <div id="cookie-notice">
      <div>
        <p>{translate('cookie-notice')}</p>
        <button onClick={acceptCookies}>{translate('cookie-accept')}</button>
      </div>
    </div>
  );
};

export default CookieNotice;