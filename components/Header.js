import { useState } from 'react'

export default function Header({ lang, setLang, t }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(!showDropdown)
  const changeLanguage = (newLang) => {
    setLang(newLang)
    setShowDropdown(false)
  }

  return (
    <div className="language-switcher">
      <div className="dropdown">
        <button onClick={toggleDropdown} className="main-button">{t('dropdown-button')}</button>
        {showDropdown && (
          <div className="dropdown-content" id="dropdown-content">
            <button onClick={() => changeLanguage('uk')}>UK</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </div>
  )
}