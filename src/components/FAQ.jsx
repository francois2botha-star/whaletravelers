import { useState } from 'react'
import './FAQ.css'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqItems = [
    {
      id: 1,
      question: 'How far in advance should I book a shuttle?',
      answer: 'We recommend booking at least 2-3 hours in advance for local trips. However, we offer same-day booking for airport transfers with a possible surcharge. For large groups, please book 24 hours ahead for better vehicle assignment.'
    },
    {
      id: 2,
      question: 'What is your cancellation policy?',
      answer: 'Free cancellations up to 2 hours before your scheduled pickup. Cancellations within 2 hours are subject to a 50% booking fee. No-shows incur a 100% charge. Please contact us immediately if you need to cancel.'
    },
    {
      id: 3,
      question: 'Do you offer airport transfers from Cape Town International Airport?',
      answer: 'Yes! We provide 24/7 airport transfer services from CTIA to Hermanus, Cape Town, and surrounding areas. Flight monitoring is included - we track your flight and adjust pickup times automatically.'
    },
    {
      id: 4,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards, bank transfers, and cash payments. Bookings require payment upfront via our secure platform, except for corporate accounts with invoicing arrangements.'
    },
    {
      id: 5,
      question: 'Are your vehicles wheelchair accessible?',
      answer: 'Yes, we have vehicles equipped for wheelchair users. Please mention this when booking so we can assign an appropriate vehicle and ensure our driver is trained in assistance.'
    },
    {
      id: 6,
      question: 'Can I bring luggage or special items?',
      answer: 'Absolutely. Our vehicles can accommodate reasonable luggage. For wine cases, sporting equipment, or other special items, please notify us during booking. Oversize items may require a larger vehicle with additional fees.'
    },
    {
      id: 7,
      question: 'Do you offer corporate or group discounts?',
      answer: 'Yes! We offer discounted rates for corporate accounts, regular bookings, and group reservations. Contact our corporate team for customized quotes and monthly billing arrangements.'
    },
    {
      id: 8,
      question: 'What should I do if my driver is late?',
      answer: 'Drivers provide ETA updates via SMS. If you haven\'t received a pickup within 15 minutes of your scheduled time, contact us immediately on +27 64 799 7924. Late pickups due to traffic are not charged extra.'
    }
  ]

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our shuttle services</p>
        </div>

        <div className="faq-container">
          {faqItems.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${openFAQ === item.id ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(item.id)}
              >
                <span className="question-text">{item.question}</span>
                <span className="faq-icon">
                  {openFAQ === item.id ? '−' : '+'}
                </span>
              </button>

              {openFAQ === item.id && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Support */}
        <div className="faq-support">
          <h3>Still have questions?</h3>
          <p>Our customer service team is available 24/7 to help</p>
          <div className="support-buttons">
            <a href="tel:+27647997924" className="support-btn phone">
              <span className="btn-icon">📞</span>
              <span>Call Us</span>
            </a>
            <a href="https://wa.me/27647997924" className="support-btn whatsapp" target="_blank" rel="noreferrer">
              <span className="btn-icon">💬</span>
              <span>WhatsApp</span>
            </a>
            <a href="#contact" className="support-btn email">
              <span className="btn-icon">✉️</span>
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
