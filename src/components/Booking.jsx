import './Booking.css'
import { useState } from 'react'
import SEO from './SEO'

function Booking() {
  const [activeTab, setActiveTab] = useState(null) // 'shuttle' | 'takemehome' | null for none
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [bookingConfirmation, setBookingConfirmation] = useState(null)
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    date: '',
    time: '',
    passengers: '1',
    name: '',
    surname: '',
    phone: '',
    email: '',
    flightNumber: '',
    tripType: 'one-way',
    comments: '',
    vehicleType: 'Standard Sedan' // Default for shuttle
  })

  // Close modal helper
  const closeModal = () => {
    setActiveTab(null)
  }

  const openModal = (type) => {
    setActiveTab(type)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return
    
    // Basic validation
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    const selectedDate = new Date(formData.date)
    
    if (selectedDate < today) {
      alert('Please select a future date for your booking.')
      return
    }
    
    if (formData.phone && !/^[\d\s\+\-\(\)]+$/.test(formData.phone)) {
      alert('Please enter a valid phone number.')
      return
    }
    
    setIsSubmitting(true)
    
    const serviceName = activeTab === 'shuttle' ? 'Shuttle Service' : 'Chauffeur-Driven Service'
    
    const bookingDetails = `Service: ${serviceName}
Customer: ${formData.name} ${formData.surname}
Email: ${formData.email}
Phone: ${formData.phone}

Pickup: ${formData.pickupLocation}
Dropoff: ${formData.dropoffLocation}
Date: ${formData.date}
Time: ${formData.time}
Passengers: ${formData.passengers}
Trip Type: ${formData.tripType}${formData.flightNumber ? `
Flight: ${formData.flightNumber}` : ''}${activeTab === 'shuttle' ? `
Vehicle: ${formData.vehicleType}` : ''}${formData.comments ? `

Comments: ${formData.comments}` : ''}`

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '96e56ef1-d4d8-442f-867f-df90212949d0',
          name: `${formData.name} ${formData.surname}`,
          email: formData.email,
          phone: formData.phone,
          message: bookingDetails,
          subject: `Booking: ${serviceName} - ${formData.name}`,
          from_name: 'Dial a Driver Website',
          replyto: formData.email
        })
      })

      const result = await response.json()

      if (result.success) {
        // Generate a reference number
        const refNum = 'WT-' + Date.now().toString().slice(-8)
        
        // Store confirmation data
        setBookingConfirmation({
          referenceNumber: refNum,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: activeTab === 'shuttle' ? 'Tour / Shuttle Service' : 'Driver Only Service',
          date: formData.date,
          time: formData.time
        })
        
        // Clear form
        setFormData({
          pickupLocation: '',
          dropoffLocation: '',
          date: '',
          time: '',
          passengers: '1',
          name: '',
          surname: '',
          phone: '',
          email: '',
          flightNumber: '',
          tripType: 'one-way',
          comments: '',
          vehicleType: 'Standard Sedan'
        })
        setActiveTab(null)
      } else {
        alert('❌ Failed to send booking. Please call us at +27 71 629 4457 or email info@whaletravelers.co.za')
        console.error('Error:', result)
      }
    } catch (error) {
      alert('❌ Connection error. Please call us at +27 71 629 4457 or email info@whaletravelers.co.za')
      console.error('Booking error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title="Book Whale Watching Tours & Transfers in Hermanus | Whale Travelers"
        description="Reserve a whale watching tour, airport transfer, wine route day trip, or shuttle in Hermanus with Whale Travelers. Available 24/7. Book online now."
      />
      <section className="booking">
        <div className="booking-intro">
          <h1>Book Your Trip</h1>
        <h2 className="subtitle">Whale watching, airport transfers &amp; tours from Hermanus</h2>
        
        <p className="description">
          Ready to explore the Whale Capital of the World? Choose a whale watching tour, airport transfer, wine route day trip, or any custom journey across the Western Cape — Freddy and his team are ready.
        </p>
        
        <p className="description">
          We provide the vehicle and driver. Or book a driver only if you prefer to travel in your own car — perfect for wine tastings or night outs.
        </p>
      </div>
        <h3 className="tagline">Local Expertise. Professional Service. Unforgettable Journeys.</h3>
        
        <p className="cta-text">Select your booking type below.</p>
        
        <div className="booking-actions">
          <button className="action-btn shuttle-btn" onClick={() => openModal('shuttle')}>
            <span className="btn-icon">🐋</span>
            <span className="btn-text">Book Tour or Transfer</span>
            <span className="btn-sub">We provide the vehicle and driver</span>
          </button>
          
          <button className="action-btn takemehome-btn" onClick={() => openModal('takemehome')}>
            <span className="btn-icon">🚗</span>
            <span className="btn-text">Book Driver Only</span>
            <span className="btn-sub">Drive your own vehicle with our driver</span>
          </button>
        </div>

      {/* What We Do Section */}
      <div className="services-overview">
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">🐋</div>
            <h4>Whale Watching & Tours</h4>
            <p>Guided tours to see southern right whales, visit wine estates, explore the Garden Route, or cruise the Cape Peninsula — all with expert local knowledge.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">✈️</div>
            <h4>Airport Transfers</h4>
            <p>Reliable, punctual transfers to Cape Town International Airport and back. Available 24/7 with flight monitoring so we're always on time.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🌍</div>
            <h4>Service Area</h4>
            <p>Hermanus, Gansbaai, Stanford, De Kelders, Cape Town, Garden Route and all of the Western Cape. We go wherever you need to go.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">⏰</div>
            <h4>Booking &amp; Availability</h4>
            <p>Available 24/7, 365 days a year. Book online, call +27 71 629 4457, or message us on WhatsApp. Same-day bookings accepted.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">💰</div>
            <h4>Pricing &amp; Payment</h4>
            <p>Transparent pricing — no hidden fees. Use our Fare Calculator to estimate your trip cost. We accept cash, EFT, and card payments.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">✓</div>
            <h4>Why Choose Us</h4>
            <p>Freddy &amp; team — Hermanus-born, locally trusted, professionally licensed. GPS-tracked, fully insured vehicles. Your safety and comfort come first.</p>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {activeTab && (
        <div className="modal-overlay" onClick={(e) => { if(e.target.className === 'modal-overlay') closeModal() }}>
          <div className="modal-content">
            <button className="close-modal" onClick={closeModal}>&times;</button>
            <h2>Reserve {activeTab === 'shuttle' ? 'Tour / Shuttle Service' : 'Driver Only Service'}</h2>
            
            <form className="booking-form-modal" onSubmit={handleSubmit} aria-busy={isSubmitting}>
              <div className="form-row">
                <div className="form-group">
                  <label>Pickup Location</label>
                  <input
                    type="text"
                    name="pickupLocation"
                    value={formData.pickupLocation}
                    onChange={handleChange}
                    placeholder="Where are you?"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Dropoff Location</label>
                  <input
                    type="text"
                    name="dropoffLocation"
                    value={formData.dropoffLocation}
                    onChange={handleChange}
                    placeholder="Where to?"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Date</label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Time</label>
                  <input
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Passengers</label>
                  <select
                    name="passengers"
                    value={formData.passengers}
                    onChange={handleChange}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Surname</label>
                  <input
                    type="text"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    placeholder="Your surname"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+27 64 799 7924"
                    pattern="[\d\s\+\-\(\)]+"
                    title="Please enter a valid phone number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Trip Type</label>
                  <select name="tripType" value={formData.tripType} onChange={handleChange}>
                    <option value="one-way">One Way</option>
                    <option value="return">Return</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Flight # (if applicable)</label>
                  <input
                    type="text"
                    name="flightNumber"
                    value={formData.flightNumber}
                    onChange={handleChange}
                    placeholder="Flight number"
                  />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  placeholder="Any special requests or additional information"
                  rows="4"
                />
              </div>

              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : `Confirm ${activeTab === 'shuttle' ? 'Shuttle' : 'Chauffeur-Driven'} Reservation`}
              </button>
            </form>
          </div>
        </div>
      )}
      
      {/* Booking Confirmation Modal */}
      {bookingConfirmation && (
        <div className="modal-overlay" onClick={() => setBookingConfirmation(null)}>
          <div className="modal-content confirmation-modal">
            <button className="close-modal" onClick={() => setBookingConfirmation(null)}>&times;</button>
            <div style={{textAlign: 'center'}}>
              <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✓</div>
              <h2>Booking Confirmed!</h2>
              <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '2rem'}}>
                Your booking request has been submitted successfully.
              </p>
              
              <div style={{
                background: '#f5f5f5',
                padding: '2rem',
                borderRadius: '12px',
                marginBottom: '2rem',
                textAlign: 'left'
              }}>
                <div style={{marginBottom: '1rem'}}>
                  <strong>Reference Number:</strong><br/>
                  <span style={{fontSize: '1.3rem', color: '#ffc107'}}>{bookingConfirmation.referenceNumber}</span>
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <strong>Service:</strong> {bookingConfirmation.service}
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <strong>Date & Time:</strong> {bookingConfirmation.date} at {bookingConfirmation.time}
                </div>
                <div style={{marginBottom: '1rem'}}>
                  <strong>Contact:</strong> {bookingConfirmation.name}<br/>
                  {bookingConfirmation.phone}
                </div>
              </div>
              
              <p style={{color: '#666', marginBottom: '1rem'}}>
                <strong>What happens next?</strong><br/>
                We will contact you within 2 hours to confirm your booking. Our team is available 24/7 at +27 64 799 7924 or via WhatsApp if you need to make changes.
              </p>
              
              <button 
                onClick={() => setBookingConfirmation(null)}
                style={{
                  padding: '12px 32px',
                  background: '#ffc107',
                  color: '#1a1a2e',
                  border: 'none',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      </section>
    </>
  )
}

export default Booking
