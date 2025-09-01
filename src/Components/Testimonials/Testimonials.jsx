import React from 'react'
import pic1 from '../../assets/Japhet3.jpg'
import pic2 from '../../assets/Japhet4.jpg'
import pic3 from '../../assets/Japhet2.jpg'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials' id='testimonials'>
       <div className="container">
          <h2>Testimonials</h2>
          <span className='line'></span>
          <div className="content">
            <div className="card">
                <img src={pic1} alt='Smart But Foolish'/>
               
            </div>
            <div className="card">
                <img src={pic2} alt='Under-age Matrimony'/>
               
            </div>
            <div className="card">
                <img src={pic3} alt='Men Are Wicked'/>
                
            </div>
          </div>
        </div> 
    </div>
  )
}

export default Testimonials