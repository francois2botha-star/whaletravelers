import './TourGallery.css'

function TourGallery() {
  const galleryImages = import.meta.glob('../assets/activities gallery/*.{jpg,jpeg}', { eager: true, import: 'default' })
  
  const altTexts = [
    'Hermanus whale watching tour photo',
    'Scenic Hermanus coastal attractions',
    'Professional shuttle service in Hermanus',
    'Hermanus tourism and activities',
    'Western Cape guided tour experience',
    'Hermanus adventure and recreation',
    'Local Hermanus cultural experience',
    'Hermanus landscape and nature tours',
    'Premium transportation for Hermanus tours'
  ]
  
  const images = Object.entries(galleryImages).map(([path, src], index) => ({
    id: index + 1,
    src: src,
    alt: altTexts[index] || `Hermanus tour and activity photo ${index + 1}`
  }))

  return (
    <div className="tour-gallery">
      <div className="gallery-grid">
        {images.map((image) => (
          <div key={image.id} className="gallery-item">
            <img 
              src={image.src} 
              alt={image.alt} 
              loading="lazy"
              className="gallery-image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourGallery
