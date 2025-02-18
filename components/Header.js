import React, { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

export default function Header({ lang, setLang }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    Cookies.set('language', newLang);
    document.documentElement.lang = newLang;
    setShowDropdown(false);
  };

  useEffect(() => {
    const savedLang = Cookies.get('language');
    if (savedLang) {
      setLang(savedLang);
    }
  }, [setLang]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="languageSwitcher">
      <div className="dropdown" ref={dropdownRef}>
        <button onClick={() => setShowDropdown(prev => !prev)} className="mainButton">
          {lang ? lang.toUpperCase() : 'LANG'}
        </button>
        {showDropdown && (
          <div className={`dropdownContent ${showDropdown ? 'show' : ''}`} id="dropdownContent">
            <button onClick={() => changeLanguage('uk')}>UK</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </div>
  );
}
