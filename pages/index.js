import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CookieNotice from '../components/CookieNotice'
import PortfolioGrid from '../components/PortfolioGrid'
import { useTranslation } from '../lib/translations'

export default function Home() {
  const [lang, setLang] = useState('uk')
  const { t } = useTranslation(lang)

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <div className="container">
        <Head>
          <title>CSSM Group</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>

        <Header lang={lang} setLang={setLang} t={t} />

        <main>
          <section id="section1">
            <h1>{t('section1-title')}</h1>
            <p>{t('section1-subtitle')}</p>
            <a href="#section2">{t('section1-button')}</a>
          </section>

          <section id="section2">
            <h2>{t('section2-title')}</h2>
            <p>{t('section2-content')}</p>
          </section>

          <section id="section3">
            <h2>{t('section3-title')}</h2>
            <ul>
              {['item1', 'item2', 'item3', 'item4', 'item5'].map((item, index) => (
                <li key={index}>{t(`section3-${item}`)}</li>
              ))}
            </ul>
            <a href="#section5">{t('section3-button')}</a>
          </section>

          <PortfolioGrid t={t} />

          <section id="section5">
            <h2>{t('section5-title')}</h2>
            <p>{t('section5-content')}</p>
            <a href="#">{t('section5-button')}</a>
          </section>
        </main>

        <Footer t={t} />
      </div>
    </Layout>
  )
}