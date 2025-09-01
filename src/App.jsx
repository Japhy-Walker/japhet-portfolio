import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Testimonials from './Components/Testimonials/Testimonials'
import Demo from './Components/Demo/Demo'
import Footer from './Components/Footer/Footer'
import Services from './Components/Services/Services'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonials/>
      <Demo/>
      <Services/>
      <Footer/>
    
    </div>
  )
}

export default App