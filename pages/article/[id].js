import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import { useTranslation } from '../../lib/translations';
import Cookies from 'js-cookie';
import styles from '../../styles/article.module.css';
import articles from '../../data/articles';

export async function getStaticPaths() {
  const paths = articles.map(article => ({
    params: { id: article.id }
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { id } = params;
  const article = articles.find(a => a.id === id) || null;

  return {
    props: {
      article
    }
  };
}

export default function Article({ article }) {
  const router = useRouter();
  const [lang, setLang] = useState(Cookies.get('language') || 'uk');
  const { t } = useTranslation(lang);

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <Head>
        <title>{article.title} — {t('site-title')}</title>
      </Head>
      <div id="article-container" className={styles.articleContainer}>
        <header className={styles.articleHeader}>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.articleMeta}>
            {t('article-published', { date: article.date })} | {t('article-author', { author: article.author })}
          </div>
        </header>

        <div className={styles.articleContent} dangerouslySetInnerHTML={{ __html: article.content }} />

        <div className={styles.articleCategories}>
          {article.categories.map((category, index) => (
            <span key={index} className={styles.categoryTag}>{category}</span>
          ))}
        </div>

        <div className={styles.relatedArticles}>
          <h3>{t('article-related-projects')}</h3>
          <div className={styles.articleSlider}>
            {article.relatedProjects.map((project, index) => (
              <div key={index} className={styles.sliderItem}>
                <img src="/api/placeholder/250/150" alt={project.title} />
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer t={t} />
    </Layout>
  );
}