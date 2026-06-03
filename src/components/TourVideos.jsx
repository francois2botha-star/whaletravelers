import './TourVideos.css'
import { useRef, useEffect, useState } from 'react'
import video1 from '../assets/activities gallery/WhatsApp Video 2026-01-31 at 8.32.25 PM.mp4'
import video2 from '../assets/activities gallery/WhatsApp Video 2026-01-31 at 8.43.21 PM.mp4'
import video3 from '../assets/activities gallery/WhatsApp Video 2026-01-31 at 8.43.33 PM.mp4'
import video4 from '../assets/activities gallery/WhatsApp Video 2026-01-31 at 8.43.36 PM.mp4'

function TourVideos() {
  const videos = [
    { id: 1, src: video1, title: 'Tour Video 1' },
    { id: 2, src: video2, title: 'Tour Video 2' },
    { id: 3, src: video3, title: 'Tour Video 3' },
    { id: 4, src: video4, title: 'Tour Video 4' }
  ]

  const [loadedVideos, setLoadedVideos] = useState(new Set())
  const containerRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.01
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoId = parseInt(entry.target.dataset.videoId)
          setLoadedVideos(prev => new Set([...prev, videoId]))
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const videoElements = containerRef.current?.querySelectorAll('[data-video-id]')
    videoElements?.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="tour-videos" ref={containerRef}>
      <h3>Experience Our Guided Tours</h3>
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-item" data-video-id={video.id}>
            {loadedVideos.has(video.id) ? (
              <video 
                controls 
                preload="none"
                className="tour-video"
              >
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="video-placeholder">
                <span className="loading-spinner">⏳</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TourVideos
