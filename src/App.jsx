import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Solutions from './components/Solutions'
import Pricing from './components/Pricing'
import FAQs from './components/FAQs'
import Contact from './components/Contact'


function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Home />
      <Solutions />
      <Pricing />
      <FAQs />
      <Contact />
    </div>
  )
}

export default App

