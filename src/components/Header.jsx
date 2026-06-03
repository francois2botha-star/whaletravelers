import { useState } from 'react'
import './Header.css'
import logo from '../../logo.png'

function Header({ onNavigate, activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'activities', label: 'Tours' },
    { id: 'booking', label: 'Book' },
    { id: 'contact', label: 'Contact' }
  ]

  const handleNavClick = (section) => {
    onNavigate(section)
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-balancer hide-mobile" aria-hidden="true"></div>

        {/* Centered desktop brand + nav */}
        <div className="header-center-group hide-mobile">
          <div
            className="logo"
            onClick={() => handleNavClick('home')}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') handleNavClick('home')
            }}
            role="button"
            tabIndex="0"
          >
            <img src={logo} alt="Whale Travelers Hermanus" className="logo-img" loading="lazy" />
          </div>

          {/* Desktop Navigation */}
          <nav className="nav" aria-label="Primary">
            {navItems.map((item) => (
              <button
                key={item.id}
                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleNavClick(item.id)}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile logo */}
        <div
          className="logo hide-desktop"
          onClick={() => handleNavClick('home')}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleNavClick('home')
          }}
          role="button"
          tabIndex="0"
        >
          <img src={logo} alt="Whale Travelers Hermanus" className="logo-img" loading="lazy" />
        </div>

        {/* CTA Buttons - Always visible */}
        <div className="header-cta-buttons">
          <button 
            className="header-cta-btn primary"
            onClick={() => handleNavClick('booking')}
          >
            Book Now
          </button>
          <a 
            href="tel:+27716294457" 
            className="header-cta-btn secondary"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn hide-desktop"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          <span className={`hamburger ${mobileMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav className="mobile-nav hide-desktop">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => handleNavClick(item.id)}
            >
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
