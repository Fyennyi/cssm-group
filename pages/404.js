import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useLanguage } from '../contexts/LanguageContext';
import { getTranslations } from '../lib/server-translations';
import styles from '../styles/error.module.css';

export async function getStaticProps() {
  const ukTranslations = getTranslations('uk');
  const enTranslations = getTranslations('en');
  return {
    props: {
      ukTranslations,
      enTranslations,
    },
  };
}

export default function Custom404() {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <Layout>
      <Head>
        <title>{t('site-title')}</title>
      </Head>
      <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>{t('article-error-title')}</h1>
        <p className={styles.errorMessage}>{t('article-error-message')}</p>
        <button type="button" onClick={() => router.push('/')} className={styles.errorButton}>{t('article-error-button')}</button>
      </div>
    </Layout>
  );
}
