import { useState } from 'react'

export default function PortfolioGrid({ t }) {
  const [expanded, setExpanded] = useState(false)
  const [clickedItem, setClickedItem] = useState(null)

  const portfolioItems = [
    { id: 'cubecraft', title: 'CubeCraft Network', description: t('portfolio-cubecraft') },
    { id: 'morf-editorial', title: 'Morf Editorial', description: t('portfolio-morf') },
    { title: 'BlockWars', description: t('portfolio-blockwars') },
    { title: 'EcoVille', description: t('portfolio-ecoville') },
    { title: 'SkyBlock Paradise', description: t('portfolio-skyblock'), hidden: true },
    { title: 'MineRPG', description: t('portfolio-minerpg'), hidden: true },
  ]

  const visibleItems = expanded ? portfolioItems : portfolioItems.filter(item => !item.hidden)

  const handleCardClick = (id) => {
    if (id) {
      setClickedItem(id)
      setTimeout(() => {
        setClickedItem(null)
      }, 300)
      setTimeout(() => {
        window.open(`/article?id=${id}`, '_blank')
      }, 300)
    }
  }

  return (
    <section id="section4" className="section">
      <div className="content">
        <h2>{t('section4-title')}</h2>
        <div className="portfolio-grid">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className={`portfolio-item ${item.id === clickedItem ? 'clicked' : ''}`}
              data-article-id={item.id}
              onClick={() => handleCardClick(item.id)}
              style={{ cursor: item.id ? 'pointer' : 'default' }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setExpanded(!expanded)} className="btn">
          {expanded ? t('toggle-portfolio-collapse') : t('toggle-portfolio-view')}
        </button>
      </div>
      <div id="cube4" className="cube"></div>
    </section>
  )
}