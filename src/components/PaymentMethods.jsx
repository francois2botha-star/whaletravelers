import { useState } from 'react'
import './PaymentMethods.css'

function PaymentMethods({ onPaymentSelect }) {
  const [selectedMethod, setSelectedMethod] = useState('')

  const paymentMethods = [
    {
      id: 'card',
      name: 'Credit/Debit Card',
      icon: '💳',
      description: 'Visa, Mastercard, American Express',
      popular: true
    },
    {
      id: 'bank',
      name: 'Bank Transfer (EFT)',
      icon: '🏦',
      description: 'Direct bank transfer',
      popular: false
    },
    {
      id: 'cash',
      name: 'Cash',
      icon: '💵',
      description: 'Pay driver directly',
      popular: true
    },
    {
      id: 'wallet',
      name: 'Digital Wallet',
      icon: '📱',
      description: 'Apple Pay, Google Pay, Samsung Pay',
      popular: false
    }
  ]

  const handleSelectMethod = (methodId) => {
    setSelectedMethod(methodId)
    if (onPaymentSelect) {
      onPaymentSelect(methodId)
    }
  }

  return (
    <div className="payment-methods-section">
      <div className="payment-header">
        <h3>Select Payment Method</h3>
        <p>Choose your preferred way to pay</p>
      </div>

      <div className="payment-options">
        {paymentMethods.map(method => (
          <div 
            key={method.id}
            className={`payment-option ${selectedMethod === method.id ? 'selected' : ''}`}
            onClick={() => handleSelectMethod(method.id)}
          >
            {method.popular && <span className="popular-badge">Popular</span>}
            
            <div className="payment-icon">{method.icon}</div>
            
            <div className="payment-info">
              <h4 className="payment-name">{method.name}</h4>
              <p className="payment-description">{method.description}</p>
            </div>

            <div className="payment-check">
              {selectedMethod === method.id && <span>✓</span>}
            </div>
          </div>
        ))}
      </div>

      {selectedMethod === 'card' && (
        <div className="payment-details">
          <div className="card-form">
            <div className="form-row">
              <div className="form-field full-width">
                <label htmlFor="cardNumber">Card Number</label>
                <input 
                  type="text" 
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength="19"
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="cardName">Cardholder Name</label>
                <input 
                  type="text" 
                  id="cardName"
                  placeholder="John Smith"
                />
              </div>
            </div>
            
            <div className="form-row two-cols">
              <div className="form-field">
                <label htmlFor="expiry">Expiry Date</label>
                <input 
                  type="text" 
                  id="expiry"
                  placeholder="MM/YY"
                  maxLength="5"
                />
              </div>
              <div className="form-field">
                <label htmlFor="cvv">CVV</label>
                <input 
                  type="text" 
                  id="cvv"
                  placeholder="123"
                  maxLength="4"
                />
              </div>
            </div>

            <div className="secure-notice">
              <span className="lock-icon">🔒</span>
              <p>Your payment information is encrypted and secure</p>
            </div>
          </div>
        </div>
      )}

      {selectedMethod === 'bank' && (
        <div className="payment-details">
          <div className="bank-details">
            <h4>Bank Transfer Details</h4>
            <div className="bank-info">
              <div className="bank-row">
                <span className="label">Bank:</span>
                <span className="value">Standard Bank</span>
              </div>
              <div className="bank-row">
                <span className="label">Account Name:</span>
                <span className="value">Dial a Driver Hermanus (Pty) Ltd</span>
              </div>
              <div className="bank-row">
                <span className="label">Account Number:</span>
                <span className="value">123 456 7890</span>
              </div>
              <div className="bank-row">
                <span className="label">Branch Code:</span>
                <span className="value">051 001</span>
              </div>
              <div className="bank-row">
                <span className="label">Reference:</span>
                <span className="value">Your Booking ID</span>
              </div>
            </div>
            <p className="bank-note">📧 Please email proof of payment to: payments@dialadriver-hermanus.co.za</p>
          </div>
        </div>
      )}

      {selectedMethod === 'cash' && (
        <div className="payment-details">
          <div className="cash-details">
            <div className="cash-icon">💵</div>
            <h4>Cash Payment</h4>
            <p>Pay your driver directly at the end of your journey.</p>
            <ul className="cash-tips">
              <li>✓ Please have exact change if possible</li>
              <li>✓ Receipt will be provided upon payment</li>
              <li>✓ Tips are appreciated but not mandatory</li>
            </ul>
          </div>
        </div>
      )}

      {selectedMethod === 'wallet' && (
        <div className="payment-details">
          <div className="wallet-details">
            <div className="wallet-icons">
              <span className="wallet-icon">🍎 Apple Pay</span>
              <span className="wallet-icon">📱 Google Pay</span>
              <span className="wallet-icon">📲 Samsung Pay</span>
            </div>
            <p>Select your preferred digital wallet at checkout. Payment will be processed through your chosen wallet app.</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default PaymentMethods
