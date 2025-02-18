import React, { useEffect } from 'react';
import '../styles/globals.css';
import Cookies from 'js-cookie';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const lang = Cookies.get('language') || 'uk';

    document.documentElement.setAttribute('lang', lang);
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
