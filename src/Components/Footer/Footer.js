import React from 'react'
import'./Footer.css'
import { assets } from '../../Assets/assets'
const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="Footer-content">
            <div className="Footer-content-left">
                     <img src={assets.logo} alt="" />
                     <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum error labore veritatis veniam nobis et.</p>
           <div className="Footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />

           </div>
            </div>
            <div className="Footer-content-center">
           <h2> company</h2>
           <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>privacy policy</li>
           </ul>
            </div>
            <div className="Footer-content-right">
<h2>GET IN TOUCH</h2>
<ul>
    <li>+919657551604</li>
    <li>tushardhanwte35@gmail.com</li>
</ul>
            </div>

        </div>
      <hr />
      <p className='Footr-copyright'> Copyright 2024 tomato.com</p>  
        </div>
  )
}

export default Footer
