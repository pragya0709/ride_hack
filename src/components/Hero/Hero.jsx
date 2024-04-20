import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Find the Right Medicine for You.</h1>
        <p>Discover the perfect medicine for your needs, and explore a range of alternatives to ensure you're making the best choice for your health.</p>
          <center>
        <div className="search-container">
        <input type="text" placeholder="Search..." className="search-input" />
          </div>
            </center>

      </div>
    </div>
  )
}

export default Hero
