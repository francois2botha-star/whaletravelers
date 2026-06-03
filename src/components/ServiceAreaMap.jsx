import './ServiceAreaMap.css'

export default function ServiceAreaMap() {
  return (
    <section className="service-area-map">
      <div className="container">
        <h2>Our Service Area</h2>
        <p className="section-subtitle">Premium transportation throughout the Western Cape and Overberg regions</p>

        <div className="map-container">
          {/* Accurate South Africa Map with Western Cape Focus */}
          <svg viewBox="0 0 1000 800" className="service-map-svg">
            {/* Background */}
            <rect width="1000" height="800" fill="#e8f4f8" />

            {/* Simplified South Africa Coastline */}
            <g className="south-africa-map" opacity="0.6">
              {/* Western Cape Province Shape */}
              <path d="M 100 200 L 200 150 L 350 100 L 450 120 L 500 180 L 480 320 L 420 400 L 300 450 L 150 420 L 80 350 Z" 
                    fill="#f0f0f0" stroke="#666" strokeWidth="2" />
              
              {/* Rest of SA simplified */}
              <path d="M 500 180 L 700 100 L 850 150 L 900 300 L 880 500 L 750 600 L 650 550 L 600 400 L 500 320 Z" 
                    fill="#f5f5f5" stroke="#999" strokeWidth="1" opacity="0.5" />
            </g>

            {/* Primary Service Area - Hermanus & Walker Bay */}
            <circle cx="200" cy="380" r="70" fill="#25d366" opacity="0.35" />
            <circle cx="200" cy="380" r="70" fill="none" stroke="#25d366" strokeWidth="3" />
            
            {/* Extended Service Area - Overberg Region */}
            <circle cx="200" cy="380" r="140" fill="#0066cc" opacity="0.1" />
            <circle cx="200" cy="380" r="140" fill="none" stroke="#1a5f7a" strokeWidth="2" strokeDasharray="8,4" />
            
            {/* Cape Town Airport Route */}
            <circle cx="480" cy="250" r="80" fill="#d97706" opacity="0.15" />
            <circle cx="480" cy="250" r="80" fill="none" stroke="#d97706" strokeWidth="2" strokeDasharray="8,4" />

            {/* Route Line from Hermanus to Cape Town */}
            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                <polygon points="0 0, 10 3, 0 6" fill="#ea580c" />
              </marker>
            </defs>
            <path d="M 200 380 Q 340 315 480 250" stroke="#ea580c" strokeWidth="3" fill="none" markerEnd="url(#arrowhead)" />

            {/* Location Markers */}
            <g className="location-marker">
              <circle cx="200" cy="380" r="10" fill="#25d366" stroke="white" strokeWidth="2" />
              <text x="200" y="425" textAnchor="middle" className="location-label">Hermanus</text>
              <text x="200" y="445" textAnchor="middle" className="location-sublabel">Primary Hub</text>
            </g>

            <g className="location-marker">
              <circle cx="170" cy="420" r="6" fill="#1a5f7a" />
              <text x="170" y="445" textAnchor="middle" className="location-label" style={{fontSize: '12px'}}>De Kelders</text>
            </g>

            <g className="location-marker">
              <circle cx="240" cy="430" r="6" fill="#1a5f7a" />
              <text x="240" y="455" textAnchor="middle" className="location-label" style={{fontSize: '12px'}}>Gansbaai</text>
            </g>

            <g className="location-marker">
              <circle cx="340" cy="300" r="6" fill="#1a5f7a" />
              <text x="340" y="325" textAnchor="middle" className="location-label" style={{fontSize: '12px'}}>Stellenbosch</text>
            </g>

            <g className="location-marker">
              <circle cx="480" cy="250" r="10" fill="#d97706" stroke="white" strokeWidth="2" />
              <text x="480" y="295" textAnchor="middle" className="location-label">Cape Town Airport</text>
            </g>

            {/* Legend */}
            <g className="map-legend">
              <rect x="30" y="30" width="220" height="180" fill="white" stroke="#ddd" rx="8" />
              <text x="50" y="55" className="legend-title" style={{fontWeight: 'bold', fontSize: '14px'}}>Service Coverage</text>
              <circle cx="50" cy="80" r="6" fill="#25d366" />
              <text x="70" y="85" className="legend-text">Primary (Hermanus)</text>
              <circle cx="50" cy="110" r="6" fill="none" stroke="#1a5f7a" strokeWidth="2" />
              <text x="70" y="115" className="legend-text">Extended (Overberg)</text>
              <circle cx="50" cy="140" r="6" fill="#d97706" />
              <text x="70" y="145" className="legend-text">Airport Transfers</text>
            </g>
          </svg>
        </div>

        {/* Service Details Grid */}
        <div className="service-zones-grid">
          <div className="service-zone-card primary">
            <div className="zone-icon">🏝️</div>
            <h3>Hermanus Hub</h3>
            <p>Walkers Bay & surrounding regions</p>
            <ul className="zone-features">
              <li>✓ Whale watching tours</li>
              <li>✓ Wine estate routes</li>
              <li>✓ Beach transfers</li>
              <li>✓ Local attractions</li>
            </ul>
          </div>

          <div className="service-zone-card extended">
            <div className="zone-icon">🌍</div>
            <h3>Overberg Region</h3>
            <p>Extended service throughout Western Cape</p>
            <ul className="zone-features">
              <li>✓ Gansbaai trips</li>
              <li>✓ De Kelders caves</li>
              <li>✓ Stellenbosch routes</li>
              <li>✓ Scenic tours</li>
            </ul>
          </div>

          <div className="service-zone-card airport">
            <div className="zone-icon">✈️</div>
            <h3>Cape Town Airport</h3>
            <p>24/7 airport transfer service</p>
            <ul className="zone-features">
              <li>✓ CTIA transfers</li>
              <li>✓ City center routes</li>
              <li>✓ Hotel pickups</li>
              <li>✓ Nighttime service</li>
            </ul>
          </div>
        </div>

        {/* Service Info */}
        <div className="service-info">
          <div className="info-box">
            <h3>Coverage & Response</h3>
            <p><strong>Primary Area:</strong> 15-20 minute response time</p>
            <p><strong>Extended Area:</strong> 30-45 minute response time</p>
            <p><strong>Airport Service:</strong> 24/7 availability</p>
          </div>
          <div className="info-box">
            <h3>Service Highlights</h3>
            <p>✓ Professional drivers with local knowledge</p>
            <p>✓ Fleet suited for all trip types</p>
            <p>✓ Competitive rates throughout region</p>
            <p>✓ Advance booking recommended</p>
          </div>
        </div>
      </div>
    </section>
  )
}
