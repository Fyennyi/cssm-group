import React, { useState } from 'react';
import { useRouter } from 'next/router';
import articles from '../data/articles';

export default function PortfolioGrid({ t }) {
  const [expanded, setExpanded] = useState(false);
  const [clickedId, setClickedId] = useState(null);
  const router = useRouter();

  const handleItemClick = (articleId) => {
    setClickedId(articleId);
    setTimeout(() => {
      const url = `${router.basePath}/article/${articleId}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    }, 200);
  };

  const renderDescription = (description) => {
    if (typeof description === 'string') {
      return description;
    } else {
      return t(description.key);
    }
  };

  const portfolioItems = articles
    .filter(item => !item.isDraft && (!item.hidden || expanded))
    .map((item, index) => {
      const content = (
        <>
          <h3>{item.shortTitle}</h3>
          <p>{renderDescription(item.description)}</p>
        </>
      );

      if (item.id) {
        return (
          <div
            key={index}
            className={`portfolioItem clickable ${clickedId === item.id ? 'clicked' : ''}`}
            onClick={() => handleItemClick(item.id)}
            data-article-id={item.id}
          >
            {content}
          </div>
        );
      }

      return (
        <div key={index} className="portfolioItem" data-article-id={item.id}>
          {content}
        </div>
      );
    });

  return (
    <section id="section5" className="section">
      <div className="content">
        <h2>{t('section5-title')}</h2>
        <div className="portfolioGrid">
          {portfolioItems}
        </div>

        {articles.some(item => item.hidden && !item.isDraft) && (
          <button onClick={() => setExpanded(!expanded)} className="btn">
            {expanded ? t('toggle-portfolio-collapse') : t('toggle-portfolio-view')}
          </button>
        )}
      </div>
      <div id="cube5" className="cube"></div>
    </section>
  );
}
