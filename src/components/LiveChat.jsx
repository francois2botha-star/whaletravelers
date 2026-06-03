import { useState } from 'react'
import './LiveChat.css'

function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: 'Hello! 👋 Welcome to Dial a Driver Hermanus. How can I help you today?',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('')

  const quickReplies = [
    { id: 1, text: '📅 Book a Ride', action: 'booking' },
    { id: 2, text: '💰 Get Pricing', action: 'pricing' },
    { id: 3, text: '📞 Contact Info', action: 'contact' },
    { id: 4, text: '❓ FAQs', action: 'faq' }
  ]

  const botResponses = {
    booking: 'Great! You can book a ride by clicking the "Book Now" button at the top of the page, or call us at +27 (0)72 123 4567. We offer 24/7 service!',
    pricing: 'Our pricing starts from R150 for sedan trips. Rates vary based on distance, vehicle type, and time of day. Use our Pricing Calculator above for an instant quote!',
    contact: '📞 Phone: +27 (0)72 123 4567\n📱 WhatsApp: +27 (0)72 123 4567\n✉️ Email: info@dialadriver-hermanus.co.za\n⏰ Available 24/7',
    faq: 'Common questions:\n• We accept card, bank transfer, and cash\n• Free cancellation up to 2 hours before pickup\n• Airport transfers available 24/7\n• Wheelchair accessible vehicles available\n\nSee our full FAQ section below!'
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleQuickReply = (action) => {
    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: quickReplies.find(q => q.action === action).text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages(prev => [...prev, userMessage])

    // Add bot response after a delay
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: botResponses[action],
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
    }, 800)
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: messages.length + 2,
        type: 'bot',
        text: 'Thanks for your message! For immediate assistance, please call us at +27 (0)72 123 4567 or use WhatsApp. A team member will respond shortly! 🚗',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMessage])
    }, 1000)
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button 
        className={`chat-toggle-btn ${isOpen ? 'open' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <div className="chat-avatar">🚗</div>
              <div>
                <h3>Dial a Driver Support</h3>
                <p className="chat-status">
                  <span className="status-indicator"></span>
                  Online - Available 24/7
                </p>
              </div>
            </div>
            <button className="chat-close-btn" onClick={toggleChat}>✕</button>
          </div>

          <div className="chat-messages">
            {messages.map(message => (
              <div key={message.id} className={`message ${message.type}`}>
                <div className="message-content">
                  <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
                  <span className="message-time">{message.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="quick-replies">
            {quickReplies.map(reply => (
              <button
                key={reply.id}
                className="quick-reply-btn"
                onClick={() => handleQuickReply(reply.action)}
              >
                {reply.text}
              </button>
            ))}
          </div>

          <form className="chat-input-form" onSubmit={handleSendMessage}>
            <input
              type="text"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="chat-input"
            />
            <button type="submit" className="chat-send-btn" aria-label="Send message">
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}

export default LiveChat
