import { useState } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
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

        <main>
          <section id="section1">
            <Header lang={lang} setLang={setLang} t={t} />
            <div className="content">
              <h1>{t('section1-title')}</h1>
              <p>{t('section1-subtitle')}</p>
              <a href="#section2">{t('section1-button')}</a>
            </div>
          </section>

          <section id="section2">
            <div className="content">
              <h2>{t('section2-title')}</h2>
              <p>{t('section2-content')}</p>
            </div>
          </section>

          <section id="section3">
            <div className="content">
              <h2>{t('section3-title')}</h2>
              <ul>
                {['item1', 'item2', 'item3', 'item4', 'item5'].map((item, index) => (
                  <li key={index}>{t(`section3-${item}`)}</li>
                ))}
              </ul>
              <a href="#section5">{t('section3-button')}</a>
            </div>
          </section>

          <PortfolioGrid t={t} />

          <section id="section5">
            <div className="content">
              <h2>{t('section5-title')}</h2>
              <p>{t('section5-content')}</p>
              <a href="#">{t('section5-button')}</a>
            </div>
          </section>
        </main>

        <Footer t={t} />
      </div>
    </Layout>
  )
}