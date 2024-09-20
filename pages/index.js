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

        if (window.visualViewport && window.visualViewport.height < window.innerHeight) {
          container.style.height = `${window.visualViewport.height}px`;
        }
      }
    };

    adjustContainerHeight();

    window.addEventListener('resize', adjustContainerHeight);
    window.addEventListener('focus', adjustContainerHeight);
    window.addEventListener('blur', adjustContainerHeight);
    window.addEventListener('scroll', adjustContainerHeight);

    return () => {
      window.removeEventListener('resize', adjustContainerHeight);
      window.removeEventListener('focus', adjustContainerHeight);
      window.removeEventListener('blur', adjustContainerHeight);
      window.removeEventListener('scroll', adjustContainerHeight);
    };
  }, []);

  useEffect(() => {
    const smoothScroll = (event) => {
      event.preventDefault();
      const target = document.querySelector(event.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', smoothScroll));

    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', smoothScroll));
    };
  }, []);

  useEffect(() => {
    const handleTouchStart = (event) => {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    };

    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault();
      }
    };

    document.addEventListener('touchstart', handleTouchStart, { passive: false });
    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    const mailtoLink = `mailto:questions@cssm.pp.ua?subject=New Message from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${encodeURIComponent(name)}%0D%0AEmail: ${encodeURIComponent(email)}`;

    window.location.href = mailtoLink;
  };

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

          <section id="section4" className="section">
            <div className="content">
              <h2>{t('section4-title')}</h2>
              <ul>
                {['item1', 'item2', 'item3', 'item4', 'item5'].map((item, index) => (
                  <li key={index}>{t(`section4-${item}`)}</li>
                ))}
              </ul>
              <a href="#section6" className="btn">{t('section4-button')}</a>
            </div>
            <div id="cube4" className="cube"></div>
          </section>

          <PortfolioGrid t={t} />

          <section id="section6" className="section">
            <div className="content">
              <h2>{t('section6-title')}</h2>
              <p>{t('section6-content')}</p>
              <form className="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="name">{t('form-name-label')}</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">{t('form-email-label')}</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">{t('form-message-label')}</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <button type="submit" className="btn">{t('form-submit-button')}</button>
              </form>
            </div>
            <div id="cube6" className="cube"></div>
          </section>
        </main>

        <Footer t={t} />
      </div>
    </Layout>
  )
}