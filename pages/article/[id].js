import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';
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

  const filePath = path.join(process.cwd(), 'content', 'articles', `${id}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const mdxSource = await serialize(source);

  return {
    props: {
      article,
      mdxSource
    }
  };
}

const mdxComponents = {};

export default function Article({ article, mdxSource }) {
  const router = useRouter();
  const [lang, setLang] = useState(Cookies.get('language') || 'uk');
  const { t } = useTranslation(lang);

  return (
    <Layout lang={lang} setLang={setLang} t={t}>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className={styles.pageContainer}>
        <div className={styles.articleContainer}>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            <div className={styles.articleMeta}>
              {t('article-published', { date: article.date })} | {t('article-author', { author: article.author })}
            </div>
          </header>

          <div className={styles.articleContent}>
            <MDXProvider components={mdxComponents}>
              <MDXRemote {...mdxSource} />
            </MDXProvider>
          </div>

          <div className={styles.articleCategories}>
            {article.categories.map((category, index) => (
              <span key={index} className={styles.categoryTag}>{category}</span>
            ))}
          </div>
        </div>

        <aside className={styles.sidebarContainer}>
          <div className={styles.relatedArticles}>
            <h3>{t('article-related-projects')}</h3>
            <div className={styles.articleSlider}>
              {article.relatedProjects.map((project, index) => (
                <div key={index} className={styles.sliderItem}>
                  <Image src={`${router.basePath}/img/${project.image}`} alt={project.title} width={400} height={300} style={{ objectFit: 'cover' }} />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer t={t} />
    </Layout>
  );
}
