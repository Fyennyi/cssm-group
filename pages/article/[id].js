import { useRouter } from 'next/router';
import Head from 'next/head';
import ImageImport from 'next/image';
const NextImage = ImageImport.default || ImageImport;
import fs from 'node:fs';
import path from 'node:path';
import { MDXRemote } from 'next-mdx-remote';
import { MDXProvider } from '@mdx-js/react';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import { useLanguage } from '../../contexts/LanguageContext';
import { getTranslations } from '../../lib/server-translations';
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

  const ukTranslations = getTranslations('uk');
  const enTranslations = getTranslations('en');

  return {
    props: {
      article,
      mdxSource,
      ukTranslations,
      enTranslations,
    }
  };
}

const mdxComponents = {};

export default function Article({ article, mdxSource }) {
  const router = useRouter();
  const { t } = useLanguage();

  return (
    <Layout>
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
            {article.categories.map((category, _index) => (
              <span key={category} className={styles.categoryTag}>{category}</span>
            ))}
          </div>
        </div>

        <aside className={styles.sidebarContainer}>
          <div className={styles.relatedArticles}>
            <h3>{t('article-related-projects')}</h3>
            <div className={styles.articleSlider}>
              {article.relatedProjects.map((project, _index) => (
                <div key={project.id || project.title} className={styles.sliderItem}>
                  <NextImage src={`${router.basePath}/img/${project.image}`} alt={project.title} width={400} height={300} style={{ objectFit: 'cover', borderRadius: '8px' }} />
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </Layout>
  );
}
