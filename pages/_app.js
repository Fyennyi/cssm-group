import { LanguageProvider } from '../contexts/LanguageContext';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider initialTranslations={pageProps}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
