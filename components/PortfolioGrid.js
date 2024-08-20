import { useState, useEffect } from 'react';

export default function PortfolioGrid({ t }) {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('../data/articles.json');
      const data = await response.json();
      setPortfolioItems(data);
    };

    fetchData();
  }, []);

  const renderDescription = (description) => {
    if (typeof description === 'string') {
      return description;
    } else {
      return t(description.key);
    }
  };

  const visibleItems = expanded ? portfolioItems : portfolioItems.filter(item => !item.hidden);

  const handleCardClick = (id) => {
    if (id) {
      setClickedItem(id);
      setTimeout(() => {
        setClickedItem(null);
      }, 300);
      window.open(`/article/${id}`, '_blank');
    }
  };

  return (
    <section id="section5" className="section">
      <div className="content">
        <h2>{t('section5-title')}</h2>
        <div className="portfolioGrid">
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className={`portfolioItem ${item.id ? 'clickable' : ''} ${item.id === clickedItem ? 'clicked' : ''}`}
              data-article-id={item.id}
              onClick={() => handleCardClick(item.id)}
            >
              <h3>{item.shortTitle}</h3>
              <p>{renderDescription(item.description)}</p>
            </div>
          ))}
        </div>
        <button onClick={() => setExpanded(!expanded)} className="btn">
          {expanded ? t('toggle-portfolio-collapse') : t('toggle-portfolio-view')}
        </button>
      </div>
      <div id="cube5" className="cube"></div>
    </section>
  );
}