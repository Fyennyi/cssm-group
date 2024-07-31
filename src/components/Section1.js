import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Section1 = () => {
  const { translate } = useTranslation();

  return (
    <section id="section1" className="section">
      <div className="content">
        <h1>{translate('section1-title')}</h1>
        <p>{translate('section1-subtitle')}</p>
        <a href="#section2" className="btn">{translate('section1-button')}</a>
      </div>
      <div id="cube1" className="cube"></div>
    </section>
  );
};

export default Section1;