import { useState, useEffect } from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PortfolioGrid from '../components/PortfolioGrid'
import { useTranslation } from '../lib/translations'
import Cookies from 'js-cookie'

export default function Home() {
  const [lang, setLang] = useState(Cookies.get('language') || 'uk')
  const { t } = useTranslation(lang)

  useEffect(() => {
    const adjustContainerHeight = () => {
      const container = document.querySelector('.container');
      if (container) {
        container.style.height = `${window.innerHeight}px`;
      }
    };

    adjustContainerHeight();
    window.addEventListener('resize', adjustContainerHeight);

    return () => {
      window.removeEventListener('resize', adjustContainerHeight);
    };
  }, []);

  useEffect(() => {
    const smoothScroll = (e) => {
      e.preventDefault();
      document.querySelector(e.currentTarget.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <div className="container">
        <Head>
          <title>{t('site-title')}</title>
        </Head>

        <main>
          <section id="section1" className="section">
            <Header lang={lang} setLang={setLang} t={t} />
            <div className="content">
              <h1>{t('section1-title')}</h1>
              <p>{t('section1-subtitle')}</p>
              <a href="#section2" className="btn">{t('section1-button')}</a>
            </div>
            <div id="cube1" className="cube"></div>
          </section>

          <section id="section2" className="section">
            <div className="content">
              <h2>{t('section2-title')}</h2>
              <p>{t('section2-content')}</p>
            </div>
            <div id="cube2" className="cube"></div>
          </section>

          <section id="section3" className="section">
            <div className="content">
              <h2>{t('section3-title')}</h2>
              <ul>
                {['item1', 'item2', 'item3', 'item4', 'item5'].map((item, index) => (
                  <li key={index}>{t(`section3-${item}`)}</li>
                ))}
              </ul>
              <a href="#section5" className="btn">{t('section3-button')}</a>
            </div>
            <div id="cube3" className="cube"></div>
          </section>

          <PortfolioGrid t={t} />

          <section id="section5" className="section">
            <div className="content">
              <h2>{t('section5-title')}</h2>
              <p>{t('section5-content')}</p>
              <a href="mailto:questions@cssm.pp.ua" className="btn">{t('section5-button')}</a>
            </div>
            <div id="cube5" className="cube"></div>
          </section>
        </main>

        <Footer t={t} />
      </div>
    </Layout>
  )
}