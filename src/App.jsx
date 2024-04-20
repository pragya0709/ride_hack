import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Home from './components/Home/Home'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <div className="container">
        <Home />
      </div>
    </div>
  )
}

export default App
