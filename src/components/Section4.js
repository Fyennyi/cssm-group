import React, { useState } from 'react';
import { useTranslation } from '../context/TranslationContext';

const Section4 = () => {
  const { translate } = useTranslation();
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="section4" className="section">
      <div className="content">
        <h2>{translate('section4-title')}</h2>
        <div id="portfolioGrid" className="portfolio-grid">
          {/* Portfolio items */}
          {/* Use conditional rendering based on showAll state */}
        </div>
        <button 
          id="togglePortfolio" 
          className="btn" 
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? translate('toggle-portfolio-collapse') : translate('toggle-portfolio-view')}
        </button>
      </div>
      <div id="cube4" className="cube"></div>
    </section>
  );
};

export default Section4;