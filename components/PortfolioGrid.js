import { useState } from 'react'
import Link from 'next/link'

export default function PortfolioGrid({ t }) {
  const [expanded, setExpanded] = useState(false)

  const portfolioItems = [
    { id: 'cubecraft', title: 'CubeCraft Network', description: t('portfolio-cubecraft') },
    { id: 'morf-editorial', title: 'Morf Editorial', description: t('portfolio-morf') },
    { title: 'BlockWars', description: t('portfolio-blockwars') },
    { title: 'EcoVille', description: t('portfolio-ecoville') },
    { title: 'SkyBlock Paradise', description: t('portfolio-skyblock'), hidden: true },
    { title: 'MineRPG', description: t('portfolio-minerpg'), hidden: true },
  ]

  const visibleItems = expanded ? portfolioItems : portfolioItems.filter(item => !item.hidden)

  return (
    <section id="section4">
      <div className="content">
        <h2>{t('section4-title')}</h2>
        <div className="portfolio-grid">
          {visibleItems.map((item, index) => (
            <div key={index} className="portfolio-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {item.id && (
                <Link href={`/article?id=${item.id}`}>
                  <a target="_blank">{t('portfolio-read-more')}</a>
                </Link>
              )}
            </div>
          ))}
        </div>
        <button onClick={() => setExpanded(!expanded)}>
          {expanded ? t('toggle-portfolio-collapse') : t('toggle-portfolio-view')}
        </button>
      </div>
    </section>
  )
}