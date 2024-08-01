import { useState, useEffect, useRef } from 'react';
import Cookies from 'js-cookie';

export default function Header({ lang, setLang }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const changeLanguage = (newLang) => {
    setLang(newLang);
    Cookies.set('language', newLang);
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
    <div className="language-switcher">
      <div className="dropdown" ref={dropdownRef}>
        <button onClick={() => setShowDropdown(prev => !prev)} className="main-button">
          {lang.toUpperCase()}
        </button>
        {showDropdown && (
          <div className={`dropdown-content ${showDropdown ? 'show' : ''}`} id="dropdown-content">
            <button onClick={() => changeLanguage('uk')}>UK</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </div>
  );
}