import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../components/Layout'
import { useTranslation } from '../lib/translations'
import Cookies from 'js-cookie'

import('../styles/article.css')

export default function Custom404() {
  const router = useRouter()
  const [lang, setLang] = useState(Cookies.get('language') || 'uk')
  const { t } = useTranslation(lang)

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <Head>
        <title>{t('site-title')}</title>
      </Head>
      <div className="error-container">
        <h1 className="error-title">{t('article-error-title')}</h1>
        <p className="error-message">{t('article-error-message')}</p>
        <button onClick={() => router.push('/')} className="error-button">{t('article-error-button')}</button>
      </div>
    </Layout>
  )
}