import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Section5 = () => {
  const { translate } = useTranslation();

  return (
    <section id="section5" className="section">
      <div className="content">
        <h2>{translate('section5-title')}</h2>
        <p>{translate('section5-content')}</p>
        <a href="#" className="btn">{translate('section5-button')}</a>
      </div>
      <div id="cube5" className="cube"></div>
    </section>
  );
};

export default Section5;