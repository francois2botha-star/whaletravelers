import { useState } from 'react'
import './Reviews.css'

function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      text: 'Dial a Driver provided excellent service for my airport transfer. The driver was professional, courteous, and knew the routes well. Highly recommended!',
      date: '2 weeks ago'
    },
    {
      id: 2,
      name: 'James Mitchell',
      rating: 5,
      text: 'Great transportation service! Clean vehicle and punctual arrival. Best driver service in Hermanus. Will use again.',
      date: '1 month ago'
    },
    {
      id: 3,
      name: 'Emma Davis',
      rating: 5,
      text: 'Very professional and reliable. Booked for a day tour and the experience was wonderful. Driver knew so much about the area!',
      date: '2 months ago'
    },
    {
      id: 4,
      name: 'Michael Chen',
      rating: 5,
      text: 'Used their service multiple times. Always on time, friendly drivers, and fair pricing. Highly satisfied.',
      date: '3 weeks ago'
    },
    {
      id: 5,
      name: 'Linda Anderson',
      rating: 5,
      text: 'Safe journey, comfortable ride. The drivers are experienced and the vehicles are well-maintained. Worth every penny!',
      date: '1 month ago'
    }
  ]

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  const goToReview = (index) => {
    setCurrentIndex(index)
  }

  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  return (
    <section className="reviews-section">
      <div className="container">
        <div className="reviews-header">
          <h2>What Our Customers Say</h2>
          <p>Trusted by hundreds of satisfied clients across Hermanus</p>
          <a href="https://www.google.com/search?q=dialadriverhermanus" target="_blank" rel="noopener noreferrer" className="google-link">
            View all reviews on Google
          </a>
        </div>

        <div className="reviews-carousel">
          <div className="review-card">
            <div className="review-header">
              <div className="reviewer-info">
                <h3>{reviews[currentIndex].name}</h3>
                <span className="review-date">{reviews[currentIndex].date}</span>
              </div>
              <div className="review-rating">
                <span className="stars">{renderStars(reviews[currentIndex].rating)}</span>
              </div>
            </div>
            <p className="review-text">"{reviews[currentIndex].text}"</p>
          </div>

          <button className="carousel-btn prev" onClick={prevReview} aria-label="Previous review">❮</button>
          <button className="carousel-btn next" onClick={nextReview} aria-label="Next review">❯</button>

          <div className="carousel-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => goToReview(index)}
                aria-label={`Go to review ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <div className="reviews-stats">
          <div className="stat">
            <div className="stat-value">★★★★★</div>
            <div className="stat-label">5.0 Rating</div>
          </div>
          <div className="stat">
            <div className="stat-value">{reviews.length}+</div>
            <div className="stat-label">Verified Reviews</div>
          </div>
          <div className="stat">
            <div className="stat-value">Google</div>
            <div className="stat-label">Trusted Platform</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
