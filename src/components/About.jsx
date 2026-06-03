import './About.css'

function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>About Whale Travelers</h2>
            <p>
              Led by Freddy and a trusted team of experienced local drivers from Hermanus and the Overberg, 
              Whale Travelers is your go-to transportation and tour operator in the Whale Capital of the World. 
              We combine deep local knowledge with professional service, making every journey memorable.
            </p>
            <ul className="features">
              <li>Freddy &amp; a team of trusted Hermanus-born drivers</li>
              <li>Specialists in whale watching, wine tours &amp; airport transfers</li>
              <li>Clean, modern, well-maintained vehicles for all group sizes</li>
              <li>Transparent pricing — no hidden fees, ever</li>
              <li>24/7 availability, 365 days a year</li>
            </ul>
            
            <h3 style={{marginTop: '2rem', marginBottom: '1rem'}}>Our Service Area</h3>
            <p style={{marginBottom: '1rem'}}>
              Based in Hermanus, we serve the entire Western Cape region:
            </p>
            <ul className="features">
              <li>Hermanus, Gansbaai, Stanford, De Kelders &amp; Arniston</li>
              <li>Cape Town &amp; Cape Town International Airport (24/7)</li>
              <li>Hemel-en-Aarde &amp; Overberg wine estates</li>
              <li>Garden Route — Knysna, Mossel Bay, George &amp; beyond</li>
              <li>Cape Point, Cape Peninsula &amp; Winelands day trips</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
