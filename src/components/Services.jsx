import './Services.css'

function Services() {
  const services = [
    {
      icon: '🐋',
      title: 'Whale Watching Tours',
      description: 'Experience the awe-inspiring southern right whales from the world\'s best land-based whale watching destination, right here in Hermanus'
    },
    {
      icon: '✈️',
      title: 'Airport Transfers',
      description: 'Punctual, door-to-door transfers to Cape Town International Airport and other regional airports — no stress, no hidden fees'
    },
    {
      icon: '🍷',
      title: 'Wine Route Day Trips',
      description: 'Explore the world-class wine estates of the Overberg and Hemel-en-Aarde Valley in comfort with a knowledgeable local driver'
    },
    {
      icon: '🗺️',
      title: 'Western Cape Tours',
      description: 'Full-day and multi-day tours to the Garden Route, Cape Point, Cape Town, and other scenic Western Cape destinations'
    },
    {
      icon: '🚐',
      title: 'Group & Corporate Travel',
      description: 'Minibus and multi-vehicle bookings for group outings, corporate events, and team transfers — we handle the logistics'
    },
    {
      icon: '⏰',
      title: 'Available 24/7',
      description: 'Freddy and his trusted team of local Hermanus drivers are on call around the clock, every day of the year'
    }
  ]

  return (
    <section className="services">
      <div className="container">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
