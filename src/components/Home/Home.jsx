import React from 'react'
import './Home.css'
import image_1 from '../../assets/image_1.jpeg'
import image_2 from '../../assets/image_2.jpeg'
// import image_3 from '../../assets/image_3.jpeg'

const Home = () => {
  return (
    <div className="homes">
      <div className="home-1">
        <img src={image_1} alt="" />
      
        <div className="home1-info-content">
          <p>We understand that finding the right medicine can be a daunting task.
          <br />That's why we've created a platform that makes it easy to discover the
          <br />perfect medicine for your needs, and explore a range of alternatives to
          <br />ensure you're making the best choice for your health.</p>
        </div>
        </div>
      <div className="home-2">
        <img src={image_2} alt="" />
      </div>
      <div className="how-it-works">
        <h1>How it works?</h1>
        <ol>
          <li>Search for a medicine by name or category.</li>
          <li>Explore a range of alternatives and compare their features.</li>
          <li>Choose the medicine that's right for you and purchase it online or in-store.</li>
        </ol>
        <p>Our platform is designed to be user-friendly and intuitive, so you can find the right medicine in no time. Plus, our team of experts is always available to answer any questions you may have and provide personalized recommendations.</p>
      </div>
    </div>
    
  )
}

export default Home