import React from 'react'

import Shipping from '../../assets/shipping.png'
import Advert from '../../assets/advert.png'
import Transform from '../../assets/transform2.png'
import './Services.css'

const Programs = () => {
  return (
    <div className='services'>
          <h2>Graphics Designs</h2>
          <span className='line'></span>
      <div className='programs'>    
       <div className='program'>
         <img src={Shipping} alt="shipping"/>
       </div>

        <div className='program'>
         <img src={Advert} alt="shipping"/>
       </div>

        <div className='program'>
         <img src={Transform} alt="shipping"/>
       </div>
       </div>
    </div>
  )
}

export default Programs