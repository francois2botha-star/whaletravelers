import { useState, useEffect } from 'react'
import './Carousel.css'

// Import all images
import whaleWatching from '../assets/hermanus/whale-watching.jpg'
import cliffPath from '../assets/hermanus/cliff-path.jpg'
import grottoBeach from '../assets/hermanus/grotto-beach.jpg'
import fernkloof from '../assets/hermanus/fernkloof-nature.jpg'
import walkerBay from '../assets/hermanus/walker-bay-sunset.jpg'
import wine from '../assets/hermanus/wine-tasting.jpg'
import fynbos from '../assets/hermanus/fynbos-flowers.jpg'
import oldHarbour from '../assets/hermanus/old-harbour.jpg'
import sharkDiving from '../assets/hermanus/shark-cage-diving.jpg'
import market from '../assets/hermanus/local-market.jpg'

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  const slides = [
    {
      id: 1,
      title: 'Southern Right Whales',
      description: 'Experience the majestic Southern Right Whales in Walker Bay, world-renowned for land-based whale watching from June to December.',
      image: whaleWatching,
      alt: 'Southern Right Whales in Walker Bay during whale watching season'
    },
    {
      id: 2,
      title: 'Cliff Path & Coastal Views',
      description: 'Stroll along the 12km Cliff Path offering breathtaking ocean views and prime whale-watching spots along the rugged coastline.',
      image: cliffPath,
      alt: 'Scenic cliff path hiking trail with ocean views in Hermanus'
    },
    {
      id: 3,
      title: 'Grotto Beach',
      description: 'Relax on the pristine Blue Flag Grotto Beach, stretching 18km with golden sands perfect for swimming and beach walks.',
      image: grottoBeach,
      alt: 'Beautiful Blue Flag Grotto Beach in Hermanus with golden sand'
    },
    {
      id: 4,
      title: 'Fernkloof Nature Reserve',
      description: 'Explore 60km of hiking trails through 1,600 hectares of indigenous fynbos, home to over 1,475 plant species.',
      image: fernkloof,
      alt: 'Fernkloof Nature Reserve hiking trails with fynbos vegetation'
    },
    {
      id: 5,
      title: 'Walker Bay Sunset',
      description: 'Witness spectacular sunsets over Walker Bay, painting the sky in brilliant hues while dolphins play in the waves below.',
      image: walkerBay,
      alt: 'Stunning sunset over Walker Bay with dolphins in Hermanus'
    },
    {
      id: 6,
      title: 'Local Wine Region',
      description: 'Discover the Hemel-en-Aarde Valley wine route, featuring world-class Pinot Noir and Chardonnay from boutique estates.',
      image: wine,
      alt: 'Wine tasting at Hemel-en-Aarde Valley vineyards near Hermanus'
    },
    {
      id: 7,
      title: 'Fynbos Flowers',
      description: 'Marvel at the colorful fynbos wildflowers unique to the Western Cape, creating vibrant carpets across the landscape in spring.',
      image: fynbos,
      alt: 'Colorful fynbos wildflowers blooming in spring near Hermanus'
    },
    {
      id: 8,
      title: 'Old Harbour Museum',
      description: 'Step back in time at the Old Harbour Museum, showcasing Hermanus\'s rich fishing heritage and maritime history.',
      image: oldHarbour,
      alt: 'Historic Old Harbour Museum showcasing maritime heritage in Hermanus'
    },
    {
      id: 9,
      title: 'Shark Cage Diving',
      description: 'Experience the thrill of coming face-to-face with Great White Sharks in nearby Gansbaai, the shark diving capital.',
      image: sharkDiving,
      alt: 'Adventure shark cage diving experience in Gansbaai near Hermanus'
    },
    {
      id: 10,
      title: 'Local Markets',
      description: 'Browse authentic local crafts, artisanal goods, and fresh produce at vibrant community markets throughout Hermanus.',
      image: market,
      alt: 'Local craft market and artisanal goods in Hermanus'
    }
  ]

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (!isAutoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlay, slides.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
    setIsAutoPlay(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
    setIsAutoPlay(false)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
    setIsAutoPlay(false)
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div className="carousel-slides">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="carousel-image"
                loading={index === currentIndex ? 'eager' : 'lazy'}
              />
              <div className="carousel-overlay"></div>
              <div className="carousel-caption">
                <h3>{slide.title}</h3>
                <p className="carousel-description">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          className="carousel-nav carousel-nav-prev"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button
          className="carousel-nav carousel-nav-next"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Indicators */}
        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === currentIndex}
            ></button>
          ))}
        </div>

        {/* Play/Pause */}
        <button
          className="carousel-autoplay-btn"
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          aria-label={isAutoPlay ? 'Pause autoplay' : 'Play autoplay'}
          title={isAutoPlay ? 'Pause' : 'Play'}
        >
          {isAutoPlay ? '⏸' : '▶'}
        </button>
      </div>
    </div>
  )
}

export default Carousel
