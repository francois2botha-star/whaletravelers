import './Contact.css'
import { useState } from 'react'
import { siteConfig } from '../config'
import SEO from './SEO'

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messageConfirmation, setMessageConfirmation] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

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
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          access_key: '96e56ef1-d4d8-442f-867f-df90212949d0',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          subject: `Contact Form: ${formData.name}`,
          from_name: 'Whale Travelers Website',
          replyto: formData.email
        })
      })

      const result = await response.json()

      if (result.success) {
        setMessageConfirmation({
          name: formData.name,
          email: formData.email
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        })
      } else {
        alert('❌ Failed to send message. Please call us at +27 71 629 4457 or email info@whaletravelers.co.za')
        console.error('Error:', result)
      }
    } catch (error) {
      alert('❌ Connection error. Please call us at +27 71 629 4457 or email info@whaletravelers.co.za')
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <SEO 
        title="Contact Whale Travelers Hermanus | Tours & Transfers"
        description="Get in touch with Whale Travelers Hermanus. Call +27 71 629 4457 or send a message. Available 24/7 for whale watching tours, airport transfers, and shuttles."
      />
      <section className="contact" id="contact">
        <div className="contact-container">
          <h1>Contact Whale Travelers</h1>
        <p style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: '#666'}}>
          Available 24/7. Call, WhatsApp, or email us to book a tour, transfer, or shuttle anywhere in the Western Cape.
        </p>
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h2>Contact Details</h2>
              <p className="business-name">{siteConfig.business.name}</p>
              <p className="address">
                {siteConfig.business.address.split('\n').map((line, i) => (
                  <span key={i}>{line}<br/></span>
                ))}
              </p>
            </div>
            <div className="info-item">
              <h2>Reach Out</h2>
              <p><strong>Mobile:</strong> <a href={`tel:${siteConfig.business.phonePrimary.replace(/\s/g, '')}`}>{siteConfig.business.phonePrimary}</a></p>
              <p><strong>WhatsApp:</strong> <a href={`https://wa.me/27716294457?text=Hi%20Whale%20Travelers%2C%20I%27d%20like%20to%20book%20a%20trip`} target="_blank" rel="noreferrer">Chat Now</a></p>
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.business.email}`}>{siteConfig.business.email}</a></p>
              <p><strong>Website:</strong> {siteConfig.business.website}</p>
            </div>
            <div className="info-item">
              <h2>Availability</h2>
              <p>24/7 Tours &amp; Transfers • Every Day of the Year</p>
            </div>
          </div>

          <div className="map-wrapper">
            <iframe
              title="Hermanus map"
              src="https://www.google.com/maps?q=Hermanus%2C%20Western%20Cape%2C%20South%20Africa&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
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
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
          
          {/* Message Confirmation Modal */}
          {messageConfirmation && (
            <div className="modal-overlay" onClick={() => setMessageConfirmation(null)} style={{position: 'fixed'}}>
              <div className="modal-content confirmation-modal">
                <button className="close-modal" onClick={() => setMessageConfirmation(null)}>&times;</button>
                <div style={{textAlign: 'center'}}>
                  <div style={{fontSize: '3rem', marginBottom: '1rem'}}>✓</div>
                  <h2>Message Sent!</h2>
                  <p style={{fontSize: '1.1rem', color: '#666', marginBottom: '2rem'}}>
                    Thank you for reaching out, {messageConfirmation.name}.
                  </p>
                  
                  <div style={{
                    background: '#f5f5f5',
                    padding: '2rem',
                    borderRadius: '12px',
                    marginBottom: '2rem',
                    textAlign: 'left'
                  }}>
                    <p style={{marginBottom: '1rem'}}>
                      <strong>We've received your message!</strong><br/>
                      Our team will contact you shortly at the email address or phone number you provided.
                    </p>
                    <p style={{marginBottom: '0'}}>
                      <strong>Expected response time:</strong> Within 2 hours (24/7)
                    </p>
                  </div>
                  
                  <p style={{color: '#666', marginBottom: '1.5rem', fontSize: '0.95rem'}}>
                    In the meantime, feel free to call us directly at +27 71 629 4457 or message us on WhatsApp for urgent requests.
                  </p>
                  
                  <button 
                    onClick={() => setMessageConfirmation(null)}
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
        </div>
      </div>
      </section>
    </>
  )
}

export default Contact
