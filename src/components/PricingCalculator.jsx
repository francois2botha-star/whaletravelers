import { useState } from 'react'
import './PricingCalculator.css'

const RATES = {
  sedan: { label: 'Sedan (1-4 pax)', ratePerKm: 14, baseFare: 120 },
  suv: { label: 'SUV / MPV (1-7 pax)', ratePerKm: 16, baseFare: 150 },
  minibus: { label: 'Minibus (8-14 pax)', ratePerKm: 19, baseFare: 200 },
}

const POPULAR_ROUTES = [
  { from: 'Hermanus, Western Cape', to: 'Cape Town International Airport', label: 'Hermanus to CPT Airport' },
  { from: 'Hermanus, Western Cape', to: 'Cape Town City Centre', label: 'Hermanus to Cape Town' },
  { from: 'Hermanus, Western Cape', to: 'Gansbaai, Western Cape', label: 'Hermanus to Gansbaai' },
  { from: 'Hermanus, Western Cape', to: 'Hemel-en-Aarde Wine Valley', label: 'Hermanus to Wine Valley' },
  { from: 'Hermanus, Western Cape', to: 'Knysna, Western Cape', label: 'Hermanus to Knysna' },
]

export default function PricingCalculator() {
  const [pickup, setPickup] = useState('')
  const [dropoff, setDropoff] = useState('')
  const [vehicleType, setVehicleType] = useState('sedan')
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [manualKm, setManualKm] = useState('')
  const [useManual, setUseManual] = useState(false)

  const calculate = () => {
    setError('')
    setResult(null)

    if (useManual) {
      const km = parseFloat(manualKm)
      if (!km || km <= 0) {
        setError('Please enter a valid distance in km.')
        return
      }
      computeFare(km)
      return
    }

    if (!pickup.trim() || !dropoff.trim()) {
      setError('Please enter both a pickup and a dropoff location.')
      return
    }

    setLoading(true)
    estimateWithoutAPI(pickup, dropoff)
  }

  const estimateWithoutAPI = (from, to) => {
    const coords = {
      hermanus: { lat: -34.4225, lng: 19.2360 },
      'cape town': { lat: -33.9249, lng: 18.4241 },
      'cape town international': { lat: -33.9715, lng: 18.6021 },
      'cpt airport': { lat: -33.9715, lng: 18.6021 },
      airport: { lat: -33.9715, lng: 18.6021 },
      gansbaai: { lat: -34.5833, lng: 19.3500 },
      stanford: { lat: -34.4406, lng: 19.4700 },
      arniston: { lat: -34.6228, lng: 20.2167 },
      'de kelders': { lat: -34.5556, lng: 19.3756 },
      'hemel-en-aarde': { lat: -34.3700, lng: 19.2000 },
      'wine valley': { lat: -34.3700, lng: 19.2000 },
      knysna: { lat: -34.0357, lng: 23.0466 },
      'mossel bay': { lat: -34.1833, lng: 22.1500 },
      george: { lat: -33.9633, lng: 22.4618 },
      stellenbosch: { lat: -33.9320, lng: 18.8600 },
      franschhoek: { lat: -33.9135, lng: 19.1215 },
    }

    const findCoord = (str) => {
      const s = str.toLowerCase()
      for (const key of Object.keys(coords)) {
        if (s.includes(key)) return coords[key]
      }
      return null
    }

    const a = findCoord(from)
    const b = findCoord(to)

    if (!a || !b) {
      setError('Location not recognised. Please enter distance manually.')
      setLoading(false)
      return
    }

    const R = 6371
    const dLat = ((b.lat - a.lat) * Math.PI) / 180
    const dLng = ((b.lng - a.lng) * Math.PI) / 180
    const x =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((a.lat * Math.PI) / 180) *
        Math.cos((b.lat * Math.PI) / 180) *
        Math.sin(dLng / 2) ** 2

    const straightLine = R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x))
    const roadKm = Math.round(straightLine * 1.25)
    computeFare(roadKm)
    setLoading(false)
  }

  const computeFare = (km) => {
    const rate = RATES[vehicleType]
    const fare = Math.round(rate.baseFare + km * rate.ratePerKm)
    const fareReturn = Math.round(fare * 1.85)
    setResult({ km: Math.round(km), fare, fareReturn, vehicle: rate.label })
  }

  const applyRoute = (route) => {
    setPickup(route.from)
    setDropoff(route.to)
    setUseManual(false)
  }

  return (
    <section className="pricing-calculator-section">
      <div className="container">
        <div className="calculator-wrapper">
          <div className="calculator-header">
            <h2>Fare Estimator</h2>
            <p>Get an instant fare estimate for your trip</p>
          </div>

          <div className="calculator-content">
            <div className="popular-routes">
              <p className="routes-label">Popular routes:</p>
              <div className="routes-chips">
                {POPULAR_ROUTES.map((r, i) => (
                  <button key={i} className="route-chip" onClick={() => applyRoute(r)}>
                    {r.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calculator-inputs">
              <div className="input-group toggle-group">
                <label>
                  <input
                    type="checkbox"
                    checked={useManual}
                    onChange={(e) => setUseManual(e.target.checked)}
                  />
                  {' '}Enter distance manually
                </label>
              </div>

              {!useManual ? (
                <>
                  <div className="input-group">
                    <label htmlFor="calc-pickup">Pickup location</label>
                    <input
                      id="calc-pickup"
                      type="text"
                      value={pickup}
                      onChange={(e) => setPickup(e.target.value)}
                      placeholder="e.g. Hermanus, Western Cape"
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="calc-dropoff">Dropoff location</label>
                    <input
                      id="calc-dropoff"
                      type="text"
                      value={dropoff}
                      onChange={(e) => setDropoff(e.target.value)}
                      placeholder="e.g. Cape Town International Airport"
                    />
                  </div>
                </>
              ) : (
                <div className="input-group">
                  <label htmlFor="calc-km">Distance (km)</label>
                  <input
                    id="calc-km"
                    type="number"
                    min="1"
                    value={manualKm}
                    onChange={(e) => setManualKm(e.target.value)}
                    placeholder="e.g. 120"
                  />
                </div>
              )}

              <div className="input-group">
                <label>Vehicle type</label>
                <div className="vehicle-options">
                  {Object.entries(RATES).map(([key, val]) => (
                    <button
                      key={key}
                      className={`vehicle-btn ${vehicleType === key ? 'active' : ''}`}
                      onClick={() => setVehicleType(key)}
                    >
                      {val.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="calc-btn" onClick={calculate} disabled={loading}>
                {loading ? 'Calculating...' : 'Calculate fare'}
              </button>

              {error && <p className="calc-error">{error}</p>}
            </div>

            {result && (
              <div className="calculator-result">
                <div className="result-header">
                  <h3>Estimated fare</h3>
                  <p className="result-vehicle">{result.vehicle}</p>
                </div>

                <div className="result-prices">
                  <div className="price-card">
                    <span className="price-label">One way</span>
                    <span className="price-value">R {result.fare.toLocaleString()}</span>
                    <span className="price-km">~{result.km} km</span>
                  </div>

                  <div className="price-card return">
                    <span className="price-label">Return trip</span>
                    <span className="price-value">R {result.fareReturn.toLocaleString()}</span>
                    <span className="price-km">Both ways</span>
                  </div>
                </div>

                <p className="result-note">
                  This is an estimate. Final price is confirmed on booking.
                </p>

                <a
                  href={`https://wa.me/27716294457?text=Hi%20Whale%20Travelers!%20I%20want%20to%20book%20a%20trip%20from%20${encodeURIComponent(pickup || `${manualKm}km`)}%20to%20${encodeURIComponent(dropoff || 'destination')}%20-%20estimated%20R${result.fare}`}
                  target="_blank"
                  rel="noreferrer"
                  className="book-via-wa"
                >
                  Book this trip via WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
