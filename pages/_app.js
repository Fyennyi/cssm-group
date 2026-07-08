import { LanguageProvider } from '../contexts/LanguageContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <LanguageProvider initialTranslations={pageProps}>
      <Component {...pageProps} />
    </LanguageProvider>
  );
}

export default MyApp;
