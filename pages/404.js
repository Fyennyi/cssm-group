import { useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useTranslation } from '../lib/translations';
import Cookies from 'js-cookie';
import styles from '../styles/error.module.css';

export default function Custom404() {
  const router = useRouter();
  const [lang, setLang] = useState(Cookies.get('language') || 'uk');
  const { t } = useTranslation(lang);

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <Head>
        <title>{t('site-title')}</title>
      </Head>
      <div className={styles.errorContainer}>
        <h1 className={styles.errorTitle}>{t('article-error-title')}</h1>
        <p className={styles.errorMessage}>{t('article-error-message')}</p>
        <button onClick={() => router.push('/')} className={styles.errorButton}>{t('article-error-button')}</button>
      </div>
    </Layout>
  );
}