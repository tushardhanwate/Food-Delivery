import React, { useState } from 'react'
import './Loginpop.css'
import { assets } from '../../Assets/assets'

const Loginpop = ({setShowlogin}) => {
    const[currentstate,setCurrentstate]=useState("Login")
  return (
    <div className='Login-popup'>
        <form  className="Login-popup-container">
            <div className="Login-popup-title">
                <h2>{currentstate}</h2>
                <img onClick={()=>setShowlogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="Login-popup-input">
                {currentstate==="Login"?<></>: <input type="text" placeholder='your name'  required/>}
                <input type="email" placeholder='your email'  required/>
                <input type="password" placeholder='your pasword'  required/>
            </div>
            <button>{currentstate==="Sign Up" ?"Create account":"Login"}</button>
            <div className="Login-poup-condition">
                <input type="checkbox" required />
                <p> By continuing,i agre to the terms of use and privacy policy</p>
            </div>
            {currentstate==="Login"?<p> Create a new account? <span onClick={()=>setCurrentstate("sign up")}> click her</span> </p>
              :<p> Already have an account <span onClick={()=>setCurrentstate("Login")}>Login here </span> </p>
            }
        </form>
    </div>
  )
}

export default Loginpop
