import './Activities.css'
import { siteConfig } from '../config'
import TourVideos from './TourVideos'
import TourGallery from './TourGallery'
import WhaleWatchingVideo from './WhaleWatchingVideo'
import SEO from './SEO'

// Import images
import whaleWatching from '../assets/hermanus/whale-watching.jpg'
import grottoBeach from '../assets/hermanus/grotto-beach.jpg'
import market from '../assets/hermanus/local-market.jpg'
import walkerBay from '../assets/hermanus/walker-bay-sunset.jpg'
import fernkloof from '../assets/hermanus/fernkloof-nature.jpg'
import sharkDiving from '../assets/hermanus/shark-cage-diving.jpg'
import fynbos from '../assets/hermanus/fynbos-flowers.jpg'

function Activities({ onNavigate }) {
  // Local optimized images of Hermanus for visually rich page
  const activities = [
    {
      id: 1,
      category: 'Whale Watching',
      icon: '🐋',
      title: 'Southern Right Whales - June to December Season',
      image: whaleWatching,
      description: 'Experience the majestic Southern Right Whales from June to December. Shore and boat tours available throughout the season.',
      highlights: ['Best viewing: July–October', 'Shore viewing and guided boat trips', 'Experienced whale watching tour operators']
    },
    {
      id: 2,
      category: 'Adventures',
      icon: '🏄‍♂️',
      title: 'Water Sports & Beach Activities in Hermanus',
      image: grottoBeach,
      description: 'Surfing, kayaking and coastal adventures for all levels at Grotto Beach and surrounding areas.',
      highlights: ['Surfing at De Kelders Beach', 'Kayak trips on Walker Bay', 'Guided coastal hiking trails']
    },
    {
      id: 3,
      category: 'Dining',
      icon: '🍽️',
      title: 'Restaurants & Local Food in Hermanus',
      image: market,
      description: 'Fresh seafood restaurants, cozy cafes and local markets offering authentic Western Cape cuisine.',
      highlights: ['Seafront dining experiences', 'Local fresh seafood markets', 'Cafes and artisan bakeries']
    },
    {
      id: 4,
      category: 'Accommodations',
      icon: '🏨',
      title: 'Hotels & Guesthouses in Hermanus',
      image: walkerBay,
      description: 'Hotels, guesthouses and boutique stays with stunning ocean views and world-class amenities.',
      highlights: ['Luxury oceanfront hotels', 'Charming guesthouses', 'Self-catering vacation rentals']
    },
    {
      id: 5,
      category: 'Nature',
      icon: '🥾',
      title: 'Hiking & Nature Reserves - Fernkloof Trail',
      image: fernkloof,
      description: 'Stunning coastal trails and nature reserves including the world-renowned 60km Fernkloof hiking trail.',
      highlights: ['Fernkloof Nature Reserve - 60km trails', 'Scenic cliff-edge coastal walks', 'Guided birdwatching tours']
    },
    {
      id: 6,
      category: 'Wildlife',
      icon: '🦭',
      title: 'Marine Life & Shark Cage Diving',
      image: sharkDiving,
      description: 'Penguins, seals and abundant birdlife — and thrilling shark cage diving in nearby Gansbaai.',
      highlights: ['Penguin colonies at Dyer Island', 'Seal and dolphin sightings', 'Guided shark diving experiences']
    },
    {
      id: 7,
      category: 'Shopping',
      icon: '🛍️',
      title: 'Local Markets & Artisan Crafts in Hermanus',
      image: fynbos,
      description: 'Browse authentic artisan markets and local produce showcasing Western Cape craftsmanship.',
      highlights: ['Craft and artisan markets', 'Farmer markets with local produce', 'Unique regional souvenirs and gifts']
    }
  ]

  return (
    <>
      <SEO 
        title="Hermanus Activities & Tours | Whale Watching & Attractions | Dial-a-Driver"
        description="Discover top activities and tours in Hermanus: whale watching, wine estates, Grotto Beach, shark diving, and more. We provide reliable shuttle services for all your adventures."
      />
      <section className="activities">
      <div className="activities-container container">
        <div className="activities-header">
          <h2>Discover Hermanus</h2>
          <p>Explore world-class attractions and experiences. Let {siteConfig.business.name} get you there safely and comfortably.</p>
        </div>

        <WhaleWatchingVideo />

        <div className="activities-grid">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              {activity.image && <img src={activity.image} alt={activity.title} className="activity-image" loading="lazy" />}
              <div className="activity-icon">{activity.icon}</div>
              <h3>{activity.title}</h3>
              <p className="category">{activity.category}</p>
              <p className="description">{activity.description}</p>
              <ul className="highlights">
                {activity.highlights.map((highlight, index) => (
                  <li key={index}>✓ {highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <TourVideos />
        <TourGallery />

        <div className="cta-section">
          <h3>Ready to explore Hermanus?</h3>
          <p>Book your transportation with {siteConfig.business.name} and enjoy a comfortable journey to any of these attractions.</p>
          <button className="book-btn" onClick={() => onNavigate?.('booking')}>Book a Ride Now</button>
        </div>
      </div>
      </section>
    </>
  )
}

export default Activities
