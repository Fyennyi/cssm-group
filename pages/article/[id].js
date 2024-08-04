import { useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import { useTranslation } from '../../lib/translations'
import Cookies from 'js-cookie'
import styles from '../../styles/article.module.css'

const articles = [
  {
    id: 'cubecraft',
    title: 'CubeCraft Network: Повний ребрендинг',
    date: '15 липня 2023',
    author: 'Команда Fyennyi Digital',
    content: `
      <p>CubeCraft Network - одна з найпопулярніших мереж серверів Minecraft, яка звернулася до нас за повним ребрендингом. Наше завдання полягало в тому, щоб оновити їхній візуальний стиль, зберігаючи при цьому впізнаваність бренду та відображаючи їхню позицію як лідера на ринку Minecraft-серверів.</p>

      <h2>Виклик</h2>
      <p>Основним викликом було створення нового логотипу, який би зберіг сутність CubeCraft, але при цьому виглядав би більш сучасно та професійно. Крім того, нам потрібно було розробити новий веб-сайт, який би відповідав оновленому бренду та покращував користувацький досвід для гравців.</p>

      <img src="/api/placeholder/800/400" alt="Новий логотип CubeCraft Network" className="article-image">

      <h2>Рішення</h2>
      <p>Ми розробили:</p>
      <ul>
        <li>Новий логотип, який зберіг кубічну форму, але отримав більш динамічний і сучасний вигляд</li>
        <li>Повністю новий веб-сайт з інтуїтивно зрозумілим інтерфейсом та адаптивним дизайном</li>
        <li>Унікальний ресурспак, який відображає новий стиль бренду в грі</li>
      </ul>

      <blockquote>
        "Команда Fyennyi Digital перевершила всі наші очікування. Новий бренд точно відображає нашу сутність і допоміг нам залучити ще більше гравців." - CEO CubeCraft Network
      </blockquote>

      <h2>Результати</h2>
      <p>Після ребрендингу CubeCraft Network спостерігала:</p>
      <ul>
        <li>30% збільшення кількості нових гравців</li>
        <li>50% зростання часу, проведеного на сайті</li>
        <li>Позитивні відгуки від спільноти щодо нового візуального стилю</li>
      </ul>
    `,
    categories: ['Ребрендинг', 'Веб-дизайн', 'Minecraft'],
    relatedProjects: [
      { title: 'Morf Editorial', description: 'Розробка унікальної айдентики для спільноти машиніматорів Minecraft.' },
      { title: 'BlockWars', description: 'Створення захоплюючого візуального стилю для PvP-орієнтованого серверу.' },
      { title: 'EcoVille', description: 'Дизайн еко-френдлі бренду для серверу, присвяченого будівництву та економіці.' }
    ]
  },
  {
    id: 'morf-editorial',
    title: 'Morf Editorial: Унікальна айдентика для машиніматорів',
    date: '20 серпня 2023',
    author: 'Команда Fyennyi Digital',
    content: `
      <p>Morf Editorial - це інноваційна спільнота машиніматорів Minecraft, яка потребувала унікальної айдентики для виділення серед конкурентів. Наше завдання полягало у створенні візуального стилю, який би відображав креативність та технічну майстерність їхньої команди.</p>

      <h2>Виклик</h2>
      <p>Головним викликом було створення айдентики, яка б поєднувала елементи кінематографії та піксельної естетики Minecraft, залишаючись при цьому сучасною та професійною.</p>

      <img src="/api/placeholder/800/400" alt="Логотип Morf Editorial" className="article-image">

      <h2>Рішення</h2>
      <p>Наша команда розробила:</p>
      <ul>
        <li>Унікальний логотип, що поєднує кінематографічні елементи з піксельною графікою</li>
        <li>Повний набір брендингових матеріалів, включаючи візитки, банери для соціальних мереж та шаблони для відео</li>
        <li>Стильний веб-сайт, що демонструє роботи Morf Editorial у привабливому та інтерактивному форматі</li>
      </ul>

      <blockquote>
        "Fyennyi Digital створили для нас айдентику, яка точно відображає нашу пристрасть до машиніматографії в Minecraft. Це допомогло нам привернути увагу нових клієнтів та партнерів." - Засновник Morf Editorial
      </blockquote>

      <h2>Результати</h2>
      <p>Після впровадження нової айдентики, Morf Editorial:</p>
      <ul>
        <li>Збільшила кількість замовлень на 40% протягом перших трьох місяців</li>
        <li>Отримала запрошення на участь у престижних кінофестивалях ігрового кіно</li>
        <li>Розширила свою присутність у соціальних мережах, збільшивши кількість підписників на 200%</li>
      </ul>
    `,
    categories: ['Айдентика', 'Брендинг', 'Minecraft', 'Машиніматографія'],
    relatedProjects: [
      { title: 'CubeCraft Network', description: 'Повний ребрендинг популярної мережі серверів, включаючи новий логотип, вебсайт та ресурспак.' },
      { title: 'BlockWars', description: 'Створення захоплюючого візуального стилю для PvP-орієнтованого серверу.' },
      { title: 'SkyBlock Paradise', description: 'Створення яскравого та привабливого бренду для популярного SkyBlock серверу.' }
    ]
  }
]

export async function getStaticPaths() {
  const paths = articles.map(article => ({
    params: { id: article.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { id } = params
  const article = articles.find(a => a.id === id) || null

  return {
    props: {
      article
    }
  }
}

export default function Article({ article }) {
  const router = useRouter()
  const [lang, setLang] = useState(Cookies.get('language') || 'uk')
  const { t } = useTranslation(lang)

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
  )
}