import './CompanyOverview.css'

function CompanyOverview() {
  return (
    <section className="company-overview">
      <div className="container">
        <div className="overview-content">
          <div className="overview-icon">🎯</div>
          
          <h2>Our Mission</h2>
          
          <p className="overview-text">
            We specialize in offering exceptional transportation solutions customized to meet our clients' specific needs. Established in 2021, Dial a Driver has demonstrated sustainable growth, even amid economic challenges. As a client-centric company, we are dedicated to delivering reliable transport services at competitive rates, prioritizing safety and excellence.
          </p>
          
          <p className="overview-question">
            <strong>How may I help you with our transportation services?</strong>
          </p>
          
          <div className="overview-stats">
            <div className="stat">
              <span className="stat-number">2021</span>
              <span className="stat-label">Founded</span>
            </div>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Client-Centric</span>
            </div>
            <div className="stat">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Available</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CompanyOverview
