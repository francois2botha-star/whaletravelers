import { useState, useEffect } from 'react'
import { logPageView } from './analytics'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import WesternCapeDestinations from './components/WesternCapeDestinations'
import Booking from './components/Booking'
import About from './components/About'
import PricingCalculator from './components/PricingCalculator'
import Activities from './components/Activities'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SocialFloatingButtons from './components/SocialFloatingButtons'
import BookingConfirmation from './components/BookingConfirmation'
import './styles/theme.css'
import './styles/base.css'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash) {
      setActiveSection(hash)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    const onHash = () => {
      const h = window.location.hash.replace('#', '')
      if (h) {
        setActiveSection(h)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    try {
      const path = '/' + (activeSection || 'home')
      logPageView(path)
    } catch (e) { }
  }, [activeSection])

  return (
    <div className="app">
      <SocialFloatingButtons />
      <main id="main-content">
      <Header onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} activeSection={activeSection} />
      {activeSection === 'home' && (
        <>
          <Hero onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />
          <Services />
          <PricingCalculator />
          <WesternCapeDestinations onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />
          <About />
        </>
      )}
      {activeSection === 'activities' && (
        <>
          <WesternCapeDestinations onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />
          <Activities onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />
        </>
      )}
      {activeSection === 'booking' && <Booking onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />}
      {activeSection === 'contact' && <Contact onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />}
      <Footer onNavigate={(s) => { setActiveSection(s); window.location.hash = s }} />
      </main>
    </div>
  )
}

export default App
