import { useState } from 'react'

export default function Header({ lang, setLang, t }) {
  const [showDropdown, setShowDropdown] = useState(false)

  const toggleDropdown = () => setShowDropdown(!showDropdown)
  const changeLanguage = (newLang) => {
    setLang(newLang)
    setShowDropdown(false)
  }

  return (
    <header>
      <div className="language-switcher">
        <button onClick={toggleDropdown}>{t('dropdown-button')}</button>
        {showDropdown && (
          <div className="dropdown-content">
            <button onClick={() => changeLanguage('uk')}>UK</button>
            <button onClick={() => changeLanguage('en')}>EN</button>
          </div>
        )}
      </div>
    </header>
  )
}