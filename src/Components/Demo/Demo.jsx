import React from 'react'
import './Demo.css'


const Demo = () => {
  return (
    <div className='demo' id='demo'>
       <div className="container">
         <div className="col-1">
           <p>Elevate Your Business With Us,</p>
           <p>Website Creation Services</p>
           <p>We craft stunning, responsive websites tailored to elevate your brand and engage your audience.
           <p style={{color: 'crimson'}}>
            Toggle the menu button on the right or click the button below to visit the website of one of our clients. </p>
           </p>
           
           <button className='button'>
              <a href='https://restalfinancials.com/Restal_financials/index.php' style={{color:'#fff'}}>
               Visit site
              </a>
            </button>
         </div>
         <div className="col-2">
           <iframe width='570' height='320' src='https://restalfinancials.com/Restal_financials/fin.php' title='Instagram Video Player' frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
         </div>
       </div>
    </div>
  )
}

export default Demo