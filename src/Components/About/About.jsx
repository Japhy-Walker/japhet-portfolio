import React from 'react'
import image from '../../assets/Japhet.png'
import './About.css'


const About = () => {
  return (
    <div className='about' id='about'>
      <div className="container">
         <img src={image}/>
         <div className="col-2">
            <h2>About</h2>
            <span className='line'></span>
            <p>Restal Financials is a venture capital firm that provides financial leverage such as pre-seed,
            seed, and series A funding to start-up businesses to enable them to achieve their organizational goals and objectives. 
          
                 
          We also provide financial management services such as Inventory management, Bookkeeping, financial projections,
            forecast & analysis, and general financial consultation. 
            </p>
            <p>I am Japhet Agbamu, a Fullstack Developer and website consultant for an independently 
              owned financial planning company called Restal Financials.</p>
              <button className='button'>
                <a href='https://restalfinancials.com/Restal_financials/about.php' style={{color:'#fff'}}>
                Explore More
                </a>
                </button>
         </div>
      </div> 
    </div>
  )
}

export default About