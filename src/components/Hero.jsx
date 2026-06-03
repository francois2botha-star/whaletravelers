import './Hero.css'
import Carousel from './Carousel'

function Hero({ onNavigate }) {
  return (
    <>
      <section className="hero" role="banner">
        <div className="hero-content">
          <h1>Whale Watching Tours & Transfers in Hermanus</h1>
          <p className="hero-tagline">Explore the Whale Capital of the World — Tours, Airport Transfers & More, Available 24/7</p>
          <div className="hero-cta">
            <button className="hero-btn primary" onClick={() => onNavigate('booking')}>Book a Trip</button>
            <a href="tel:+27716294457" className="hero-btn secondary">Call +27 71 629 4457</a>
          </div>
        </div>
        <div className="hero-background"></div>
      </section>
      <Carousel />
    </>
  )
}

export default Hero
