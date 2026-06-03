import { useState } from 'react'
import './PromoCode.css'

function PromoCode() {
  const [promoCode, setPromoCode] = useState('')
  const [appliedPromo, setAppliedPromo] = useState(null)
  const [error, setError] = useState('')
  const [loyaltyPoints, setLoyaltyPoints] = useState(1250) // Example user points

  const promoCodes = {
    'WELCOME10': { discount: 10, type: 'percentage', description: 'Welcome discount' },
    'SUMMER25': { discount: 25, type: 'percentage', description: 'Summer special' },
    'AIRPORT50': { discount: 50, type: 'fixed', description: 'Airport transfer discount' },
    'LOYALTY20': { discount: 20, type: 'percentage', description: 'Loyalty member discount' },
    'WHALE15': { discount: 15, type: 'percentage', description: 'Whale watching special' }
  }

  const loyaltyTiers = [
    { name: 'Bronze', minPoints: 0, maxPoints: 999, benefits: ['5% discount', 'Priority support'], color: '#cd7f32' },
    { name: 'Silver', minPoints: 1000, maxPoints: 2499, benefits: ['10% discount', 'Priority booking', 'Free upgrades'], color: '#c0c0c0' },
    { name: 'Gold', minPoints: 2500, maxPoints: 4999, benefits: ['15% discount', 'VIP service', 'Free airport lounge'], color: '#ffd700' },
    { name: 'Platinum', minPoints: 5000, maxPoints: 999999, benefits: ['20% discount', 'Dedicated driver', '24/7 concierge'], color: '#e5e4e2' }
  ]

  const getCurrentTier = () => {
    return loyaltyTiers.find(tier => 
      loyaltyPoints >= tier.minPoints && loyaltyPoints <= tier.maxPoints
    )
  }

  const getNextTier = () => {
    const currentTier = getCurrentTier()
    const currentIndex = loyaltyTiers.indexOf(currentTier)
    return currentIndex < loyaltyTiers.length - 1 ? loyaltyTiers[currentIndex + 1] : null
  }

  const handleApplyPromo = (e) => {
    e.preventDefault()
    const upperCode = promoCode.toUpperCase()
    
    if (promoCodes[upperCode]) {
      setAppliedPromo(promoCodes[upperCode])
      setError('')
    } else {
      setError('Invalid promo code. Please try again.')
      setAppliedPromo(null)
    }
  }

  const handleRemovePromo = () => {
    setAppliedPromo(null)
    setPromoCode('')
    setError('')
  }

  const currentTier = getCurrentTier()
  const nextTier = getNextTier()
  const progressToNextTier = nextTier 
    ? ((loyaltyPoints - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100 
    : 100

  return (
    <div className="promo-loyalty-section">
      <div className="container">
        {/* Promo Code Section */}
        <div className="promo-section">
          <h3>Have a Promo Code?</h3>
          <p>Enter your code to unlock special discounts</p>
          
          <form className="promo-form" onSubmit={handleApplyPromo}>
            <div className="promo-input-group">
              <input 
                type="text" 
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                className="promo-input"
                disabled={!!appliedPromo}
              />
              {!appliedPromo ? (
                <button type="submit" className="promo-apply-btn">
                  Apply
                </button>
              ) : (
                <button 
                  type="button" 
                  className="promo-remove-btn"
                  onClick={handleRemovePromo}
                >
                  Remove
                </button>
              )}
            </div>
            
            {error && <p className="promo-error">{error}</p>}
            
            {appliedPromo && (
              <div className="promo-success">
                <span className="success-icon">✓</span>
                <div className="success-text">
                  <strong>{appliedPromo.description}</strong>
                  <p>
                    Save {appliedPromo.type === 'percentage' ? `${appliedPromo.discount}%` : `R${appliedPromo.discount}`} on your booking
                  </p>
                </div>
              </div>
            )}
          </form>

          <div className="available-promos">
            <h4>Active Promotions</h4>
            <div className="promo-tags">
              <span className="promo-tag">WELCOME10 - 10% off first ride</span>
              <span className="promo-tag">SUMMER25 - 25% summer special</span>
              <span className="promo-tag">AIRPORT50 - R50 off airport rides</span>
            </div>
          </div>
        </div>

        {/* Loyalty Program Section */}
        <div className="loyalty-section">
          <div className="loyalty-header">
            <div>
              <h3>Rewards Program</h3>
              <p>Earn points with every ride and unlock exclusive benefits</p>
            </div>
            <div className="loyalty-points-badge">
              <div className="points-number">{loyaltyPoints}</div>
              <div className="points-label">Points</div>
            </div>
          </div>

          {/* Current Tier */}
          <div className="current-tier-card" style={{ borderColor: currentTier.color }}>
            <div className="tier-badge" style={{ background: currentTier.color }}>
              {currentTier.name}
            </div>
            <h4>Your Status: {currentTier.name} Member</h4>
            <div className="tier-benefits">
              {currentTier.benefits.map((benefit, index) => (
                <div key={index} className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Progress to Next Tier */}
          {nextTier && (
            <div className="tier-progress">
              <div className="progress-info">
                <span>Progress to {nextTier.name}</span>
                <span>{nextTier.minPoints - loyaltyPoints} points needed</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill"
                  style={{ 
                    width: `${progressToNextTier}%`,
                    background: nextTier.color
                  }}
                ></div>
              </div>
            </div>
          )}

          {/* All Tiers */}
          <div className="all-tiers">
            <h4>Membership Tiers</h4>
            <div className="tiers-grid">
              {loyaltyTiers.map(tier => (
                <div 
                  key={tier.name} 
                  className={`tier-card ${tier.name === currentTier.name ? 'active' : ''}`}
                  style={{ borderColor: tier.color }}
                >
                  <div className="tier-icon" style={{ background: tier.color }}>
                    {tier.name === 'Bronze' && '🥉'}
                    {tier.name === 'Silver' && '🥈'}
                    {tier.name === 'Gold' && '🥇'}
                    {tier.name === 'Platinum' && '💎'}
                  </div>
                  <h5>{tier.name}</h5>
                  <p className="tier-points">
                    {tier.minPoints} - {tier.maxPoints === 999999 ? '∞' : tier.maxPoints} pts
                  </p>
                  <ul className="tier-perks">
                    {tier.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* How to Earn Points */}
          <div className="earn-points-section">
            <h4>How to Earn Points</h4>
            <div className="earn-points-grid">
              <div className="earn-point-card">
                <div className="earn-icon">🚗</div>
                <h5>Every Ride</h5>
                <p>Earn 10 points per R100 spent</p>
              </div>
              <div className="earn-point-card">
                <div className="earn-icon">🎂</div>
                <h5>Birthday Bonus</h5>
                <p>500 bonus points on your birthday</p>
              </div>
              <div className="earn-point-card">
                <div className="earn-icon">👥</div>
                <h5>Referrals</h5>
                <p>250 points for each friend referred</p>
              </div>
              <div className="earn-point-card">
                <div className="earn-icon">⭐</div>
                <h5>Reviews</h5>
                <p>50 points for leaving a review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PromoCode
