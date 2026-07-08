import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Header() {
  const { lang, changeLanguage } = useLanguage();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

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
        <button type="button" onClick={() => setShowDropdown(prev => !prev)} className="mainButton">
          {lang ? lang.toUpperCase() : 'LANG'}
        </button>
        {showDropdown && (
          <div className={`dropdownContent ${showDropdown ? 'show' : ''}`} id="dropdownContent">
            <button type="button" onClick={() => changeLanguage('uk')}>UK</button>
            <button type="button" onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </div>
  );
}
