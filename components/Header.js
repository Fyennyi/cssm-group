import { useState, useEffect, useRef } from 'react';

export default function Header({ lang, setLang }) {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setShowDropdown(prev => !prev);
  const changeLanguage = (newLang) => {
    setLang(newLang);
    setShowDropdown(false);
  };

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
        <button onClick={toggleDropdown} className="main-button">
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