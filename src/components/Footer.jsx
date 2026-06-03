import './Footer.css'
import { siteConfig } from '../config'

function Footer({ onNavigate }) {
  const currentYear = new Date().getFullYear()
  const GA_ID = import.meta.env.VITE_GA_ID || ''

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>{siteConfig.business.name}</h3>
          <p>Your local guides to the Whale Capital of the World</p>
          <p style={{marginTop:8}}>{siteConfig.business.address}</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.('home') }} aria-label="Footer link: Home">Home</a></li>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); onNavigate?.('home') }} aria-label="Footer link: Services">Services</a></li>
            <li><a href="#activities" onClick={(e) => { e.preventDefault(); onNavigate?.('activities') }} aria-label="Footer link: Activities">Activities</a></li>
            <li><a href="#booking" onClick={(e) => { e.preventDefault(); onNavigate?.('booking') }} aria-label="Footer link: Booking">Booking</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate?.('contact') }} aria-label="Footer link: Contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Contact</h4>
          <p>📞 <a href="tel:+27716294457">+27 71 629 4457</a></p>
          <p>✉️ <a href="mailto:info@whaletravelers.co.za">info@whaletravelers.co.za</a></p>
          <p>💬 <a href="https://wa.me/27716294457?text=Hello%20Whale%20Travelers%2C%20I%27d%20like%20to%20book%20a%20trip" target="_blank" rel="noreferrer">Message on WhatsApp</a></p>
        </div>
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/whaletravelers" target="_blank" rel="noreferrer" className="social-icon-link">
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Whale Travelers Hermanus. All rights reserved.</p>
        <p className="analytics-status">Analytics: {GA_ID ? 'Enabled' : 'Disabled'}</p>
      </div>
    </footer>
  )
}

export default Footer
