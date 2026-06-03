import './BookingConfirmation.css'
import { useState, useEffect } from 'react'

export default function BookingConfirmation({ isOpen, onClose, bookingData }) {
  const [status, setStatus] = useState('confirmed') // confirmed, assigned, enroute, arrived
  const [eta, setEta] = useState(null)

  useEffect(() => {
    if (isOpen) {
      // Simulate status progression
      const confirmTimer = setTimeout(() => setStatus('assigned'), 2000)
      return () => clearTimeout(confirmTimer)
    }
  }, [isOpen])

  if (!isOpen) return null

  const confirmationNumber = `DDA-${Date.now().toString().slice(-8)}`
  const etaMinutes = Math.floor(Math.random() * 15) + 8

  const statusSteps = [
    { step: 'confirmed', label: 'Booking Confirmed', icon: '✓' },
    { step: 'assigned', label: 'Driver Assigned', icon: '👤' },
    { step: 'enroute', label: 'Driver En Route', icon: '🚗' },
    { step: 'arrived', label: 'Driver Arrived', icon: '📍' }
  ]

  return (
    <div className="booking-confirmation-overlay">
      <div className="booking-confirmation-modal">
        <button className="close-btn" onClick={onClose}>✕</button>

        <div className="confirmation-header">
          <div className="checkmark-circle">✓</div>
          <h2>Booking Confirmed!</h2>
          <p className="confirmation-number">Confirmation #: {confirmationNumber}</p>
        </div>

        {/* Status Timeline */}
        <div className="status-timeline">
          {statusSteps.map((item, idx) => (
            <div 
              key={item.step} 
              className={`timeline-item ${status === item.step ? 'active' : ''} ${statusSteps.findIndex(s => s.step === status) > idx ? 'completed' : ''}`}
            >
              <div className="timeline-circle">{item.icon}</div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>

        {/* Booking Details */}
        <div className="confirmation-details">
          <h3>Booking Details</h3>
          
          <div className="detail-row">
            <span className="label">Service:</span>
            <span className="value">{bookingData?.activeTab === 'shuttle' ? 'Shuttle Service' : 'Chauffeur-Driven Service'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Vehicle:</span>
            <span className="value">{bookingData?.vehicleType || 'Standard Sedan'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Pickup:</span>
            <span className="value">{bookingData?.pickupLocation || 'Location pending'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Dropoff:</span>
            <span className="value">{bookingData?.dropoffLocation || 'Location pending'}</span>
          </div>

          <div className="detail-row">
            <span className="label">Date & Time:</span>
            <span className="value">{bookingData?.date} at {bookingData?.time}</span>
          </div>

          <div className="detail-row">
            <span className="label">Passengers:</span>
            <span className="value">{bookingData?.passengers} person(s)</span>
          </div>

          <div className="detail-row">
            <span className="label">Name:</span>
            <span className="value">{bookingData?.name} {bookingData?.surname}</span>
          </div>

          <div className="detail-row">
            <span className="label">Contact:</span>
            <span className="value">{bookingData?.phone}</span>
          </div>
        </div>

        {/* ETA Section */}
        {status === 'assigned' && (
          <div className="eta-section">
            <h3>Estimated Arrival</h3>
            <p className="eta-time">~{etaMinutes} minutes</p>
            <p className="eta-note">Driver will arrive at your pickup location</p>
          </div>
        )}

        {/* Driver Info (when assigned) */}
        {status === 'assigned' && (
          <div className="driver-info">
            <h3>Your Driver</h3>
            <div className="driver-card">
              <div className="driver-avatar">👨‍✈️</div>
              <div className="driver-details">
                <h4>John Smith</h4>
                <div className="rating">⭐⭐⭐⭐⭐ (247 trips)</div>
                <p className="vehicle">Vehicle: White Toyota Corolla</p>
              </div>
              <button className="call-driver-btn">📞 Call</button>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="confirmation-actions">
          <button className="btn-secondary" onClick={onClose}>Close</button>
          <button className="btn-primary" onClick={() => {
            // Could navigate to booking history
            onClose()
          }}>View Booking Details</button>
        </div>
      </div>
    </div>
  )
}
