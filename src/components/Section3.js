import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Section3 = () => {
  const { translate } = useTranslation();

  return (
    <section id="section3" className="section">
      <div className="content">
        <h2>{translate('section3-title')}</h2>
        <ul>
          <li>{translate('section3-item1')}</li>
          <li>{translate('section3-item2')}</li>
          <li>{translate('section3-item3')}</li>
          <li>{translate('section3-item4')}</li>
          <li>{translate('section3-item5')}</li>
        </ul>
        <a href="#section5" className="btn">{translate('section3-button')}</a>
      </div>
      <div id="cube3" className="cube"></div>
    </section>
  );
};

export default Section3;