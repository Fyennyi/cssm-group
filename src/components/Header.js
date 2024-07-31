import React from 'react';
import { useTranslation } from '../context/TranslationContext';

const Header = ({ setLanguage }) => {
  const { translate, language } = useTranslation();

  return (
    <header>
      <div className="language-switcher">
        <div className="dropdown">
          <button id="dropdown-button">{translate('dropdown-button')}</button>
          <div className="dropdown-content" id="dropdown-content">
            <a href="#" onClick={() => setLanguage('uk')}>UK</a>
            <a href="#" onClick={() => setLanguage('en')}>EN</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;