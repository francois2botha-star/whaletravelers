import './DriverProfiles.css'

export default function DriverProfiles() {
  const drivers = [
    {
      id: 1,
      name: 'Freddy',
      role: 'Founder & Lead Driver',
      rating: 5.0,
      trips: 500,
      vehicle: 'Modern Sedan / SUV',
      specialties: ['Whale Watching Tours', 'Airport Transfers', 'Local Expert'],
      image: '🐋'
    },
    {
      id: 2,
      name: 'Team Driver',
      role: 'Trusted Local Driver',
      rating: 4.9,
      trips: 200,
      vehicle: 'Toyota Quantum Minibus',
      specialties: ['Group Transport', 'Wine Routes', 'Reliable'],
      image: '🚐'
    },
    {
      id: 3,
      name: 'Team Driver',
      role: 'Trusted Local Driver',
      rating: 4.8,
      trips: 180,
      vehicle: 'SUV / Crossover',
      specialties: ['Garden Route', 'Cape Town Trips', 'Safe Driver'],
      image: '🗺️'
    }
  ]

  return (
    <section className="driver-profiles-section">
      <div className="container">
        <h2>Meet the Whale Travelers Team</h2>
        <p className="section-subtitle">Freddy and his trusted team of Hermanus-born, professionally licensed drivers</p>

        <div className="drivers-grid">
          {drivers.map(driver => (
            <div key={driver.id} className="driver-card">
              <div className="driver-avatar-large">{driver.image}</div>
              
              <h3 className="driver-name">{driver.name}</h3>

              <div className="driver-rating">
                <span className="stars">{'⭐'.repeat(Math.floor(driver.rating))}{driver.rating % 1 > 0 ? '✨' : ''}</span>
                <span className="rating-number">{driver.rating}</span>
              </div>

              <div className="driver-stats">
                <div className="stat">
                  <span className="stat-number">{driver.trips}</span>
                  <span className="stat-label">Trips</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Safe</span>
                </div>
              </div>

              <p className="driver-vehicle">
                <strong>Vehicle:</strong> {driver.vehicle}
              </p>

              <div className="specialties">
                {driver.specialties.map((specialty, idx) => (
                  <span key={idx} className="specialty-badge">{specialty}</span>
                ))}
              </div>

              <a href="https://wa.me/27716294457?text=Hi%20Whale%20Travelers%2C%20I%27d%20like%20to%20book%20a%20trip" target="_blank" rel="noreferrer" className="request-driver-btn">Book via WhatsApp</a>
            </div>
          ))}
        </div>

        {/* Driver Selection Section */}
        <div className="driver-selection-cta">
          <h3>Book Freddy &amp; Team</h3>
          <p>Call or WhatsApp us to request Freddy specifically, or we'll assign the best-suited driver for your trip.</p>
          <a href="https://wa.me/27716294457?text=Hi%20Freddy%2C%20I%27d%20like%20to%20book%20a%20trip" target="_blank" rel="noreferrer" className="book-with-driver-btn">📲 Book on WhatsApp</a>
        </div>
      </div>
    </section>
  )
}
