import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Section2 = () => {
  const { translate } = useTranslation();

  return (
    <section id="section2" className="section">
      <div className="content">
        <h2>{translate('section2-title')}</h2>
        <p>{translate('section2-content')}</p>
      </div>
      <div id="cube2" className="cube"></div>
    </section>
  );
};

export default Section2;