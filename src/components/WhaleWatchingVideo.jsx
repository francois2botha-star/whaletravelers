import './WhaleWatchingVideo.css'

function WhaleWatchingVideo() {
  return (
    <section className="whale-video-section">
      <div className="container">
        <div className="video-content">
          <div className="video-text">
            <h2>Experience the Magic of Whale Watching</h2>
            <p>Watch these magnificent Southern Right Whales in their natural habitat off the coast of Hermanus. Our experienced guides will take you on an unforgettable journey into the ocean.</p>
            <ul className="whale-highlights">
              <li>✓ Best season: June to December</li>
              <li>✓ Peak viewing: July to October</li>
              <li>✓ Professional, experienced guides</li>
              <li>✓ Land and boat tours available</li>
            </ul>
          </div>
          
          <div className="video-wrapper">
            <iframe
              className="whale-video"
              width="100%"
              height="500"
              src="https://www.youtube.com/embed/OvJr2QgybEU?autoplay=0&modestbranding=1&rel=0"
              title="Whale Watching in Hermanus"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhaleWatchingVideo
