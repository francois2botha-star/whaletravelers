import { useState } from 'react'
import './VehiclesGallery.css'

// Import vehicle images
import vehicle1 from '../assets/vehicles/vehicle (1).jpeg'
import vehicle2 from '../assets/vehicles/vehicle (2).jpeg'
import vehicle3 from '../assets/vehicles/vehicle (3).jpeg'
import vehicle4 from '../assets/vehicles/vehicle (4).jpeg'
import vehicle5 from '../assets/vehicles/vehicle (5).jpeg'
import vehicle6 from '../assets/vehicles/vehicle (6).jpeg'
import vehicle7 from '../assets/vehicles/vehicle (7).jpeg'
import vehicle8 from '../assets/vehicles/vehicle (8).jpeg'
import vehicle9 from '../assets/vehicles/vehicle (9).jpeg'

function VehiclesGallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  const vehicles = [
    {
      id: 1,
      image: vehicle1,
      alt: 'Premium chauffeur shuttle vehicle in Hermanus fleet'
    },
    {
      id: 2,
      image: vehicle2,
      alt: 'Comfortable sedan shuttle car for airport transfers in Hermanus'
    },
    {
      id: 3,
      image: vehicle3,
      alt: 'Luxury transportation vehicle for premium chauffeur service'
    },
    {
      id: 4,
      image: vehicle4,
      alt: 'Professional chauffeur driven vehicle for business travel'
    },
    {
      id: 5,
      image: vehicle5,
      alt: 'Modern shuttle service car in Western Cape'
    },
    {
      id: 6,
      image: vehicle6,
      alt: 'Clean well-maintained driver service vehicle for Hermanus transport'
    },
    {
      id: 7,
      image: vehicle7,
      alt: 'Professional chauffeur driven shuttle service vehicle'
    },
    {
      id: 8,
      image: vehicle8,
      alt: 'Reliable shuttle car for Hermanus and Cape Town airport transfers'
    },
    {
      id: 9,
      image: vehicle9,
      alt: 'Premium fleet vehicle for chauffeur services in Hermanus'
    }
  ]

  const openLightbox = (index) => setSelectedImageIndex(index)
  const closeLightbox = () => setSelectedImageIndex(null)
  
  const goToPrevious = () => {
    setSelectedImageIndex((prev) => (prev === 0 ? vehicles.length - 1 : prev - 1))
  }
  
  const goToNext = () => {
    setSelectedImageIndex((prev) => (prev === vehicles.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="vehicles-gallery-section">
      <div className="container">
        <div className="gallery-header">
          <h2>Our Fleet</h2>
          <p>Professional vehicles for comfortable and reliable transportation across Hermanus</p>
        </div>

        <div className="gallery-grid">
          {vehicles.map((vehicle, index) => (
            <div
              key={vehicle.id}
              className="gallery-item"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-image-wrapper">
                <img
                  src={vehicle.image}
                  alt={vehicle.alt}
                  className="gallery-image"
                  loading="lazy"
                />
                <div className="gallery-overlay">
                  <span className="view-text">View</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImageIndex !== null && (
          <div className="lightbox" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <img
                src={vehicles[selectedImageIndex].image}
                alt={vehicles[selectedImageIndex].alt}
                className="lightbox-image"
              />
              
              <button className="lightbox-close" onClick={closeLightbox}>✕</button>
              <button className="lightbox-prev" onClick={goToPrevious}>❮</button>
              <button className="lightbox-next" onClick={goToNext}>❯</button>
              
              <div className="lightbox-counter">
                {selectedImageIndex + 1} / {vehicles.length}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default VehiclesGallery
