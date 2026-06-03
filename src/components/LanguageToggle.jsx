import { useLanguage } from './LanguageContext'
import './LanguageToggle.css'

function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="language-toggle">
      <button 
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label="Switch to English"
      >
        <span className="flag">🇬🇧</span>
        <span className="lang-text">EN</span>
      </button>
      <span className="lang-divider">/</span>
      <button 
        className={`lang-btn ${language === 'af' ? 'active' : ''}`}
        onClick={toggleLanguage}
        aria-label="Switch to Afrikaans"
      >
        <span className="flag">🇿🇦</span>
        <span className="lang-text">AF</span>
      </button>
    </div>
  )
}

export default LanguageToggle
