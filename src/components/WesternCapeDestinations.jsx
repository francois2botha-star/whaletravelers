import './WesternCapeDestinations.css'
import capeTownImage from '../assets/western cape/cape town.png'
import franschhoekImage from '../assets/western cape/franschhoek wine farms.png'
import capeAgulhasImage from '../assets/western cape/cape agulhas.jpg'
import gardenRouteImage from '../assets/western cape/garden route.jpg'
import somersetWestImage from '../assets/western cape/somerset wes.jpg'
import paarlImage from '../assets/western cape/paarl.jpg'

function WesternCapeDestinations({ onNavigate }) {
  const destinations = [
    {
      id: 1,
      name: 'Cape Town',
      image: capeTownImage,
      description: 'Iconic Table Mountain views and world-class beaches. Experience vibrant culture and stunning coastal scenery.',
      icon: '🏔️'
    },
    {
      id: 2,
      name: 'Franschhoek',
      image: franschhoekImage,
      description: 'Wine valley paradise with gourmet restaurants. Explore vineyards, fine dining, and scenic mountain views.',
      icon: '🍷'
    },
    {
      id: 3,
      name: 'Cape Agulhas',
      image: capeAgulhasImage,
      description: 'Southernmost tip of Africa with rugged beauty. Visit the iconic cape point and historic lighthouse.',
      icon: '🌍'
    },
    {
      id: 4,
      name: 'Garden Route',
      image: gardenRouteImage,
      description: 'Scenic coastal drive through towering forests. Discover Knysna, Plettenberg Bay, and pristine beaches.',
      icon: '🌲'
    },
    {
      id: 5,
      name: 'Somerset West',
      image: somersetWestImage,
      description: 'Gateway to the Winelands with wine estates nearby. Enjoy vineyards and mountain-backdrop dining.',
      icon: '🍇'
    },
    {
      id: 6,
      name: 'Paarl',
      image: paarlImage,
      description: 'Historic wine destination with granite mountain backdrop. Taste premium wines in a charming setting.',
      icon: '🏰'
    }
  ]

  return (
    <section className="western-cape-destinations">
      <div className="container">
        <div className="destinations-header">
          <h2>Explore the Western Cape</h2>
          <p>Dial a Driver covers the entire Western Cape region - Let us take you anywhere</p>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="card-image-wrapper">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  loading="lazy"
                  className="card-image"
                />
                <div className="card-overlay">
                  <span className="destination-icon">{destination.icon}</span>
                </div>
              </div>
              <div className="card-content">
                <h3>{destination.name}</h3>
                <p>{destination.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="destinations-footer">
          <div className="coverage-info">
            <h3>🚗 Full Western Cape Coverage</h3>
            <p>We provide professional shuttle and private driver services throughout the entire Western Cape region. Whether you're planning a day trip or a multi-day tour, Dial a Driver has you covered.</p>
            <button 
              className="cta-button"
              onClick={() => onNavigate?.('booking')}
            >
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WesternCapeDestinations
