import React, { useState, useEffect } from 'react';
import articles from '../data/articles';

import Link from 'next/link';

export default function PortfolioGrid({ t }) {
  const [expanded, setExpanded] = useState(false);

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
          <Link key={index} href={`/article/${item.id}`} passHref legacyBehavior>
            <a className="portfolioItem clickable" target="_blank" rel="noopener noreferrer" data-article-id={item.id}>
              {content}
            </a>
          </Link>
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
