import React, { useState } from 'react'
import './Navabar.css'
import { assets } from '../Assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'
const Navbar = ({setShowlogin}) => {
    const[menu,setMenu]=useState("Menu")
    const{ getTotalCArtAmount}=useState(StoreContext);
  return (
    <div className='Navbar'>
      <Link to='/'> <img src={assets.logo }alt="" className='Logo' /> </Link>
      <ul className='Navbar-menu'>
        {/* click kelyavr kontya section la jail tyasathi   <a> tag cha vapr */}
        <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</Link>
        <a href='#Exportmenu' onClick={()=>setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</a>
        <a href='#App-download' onClick={()=>setMenu("Mobile-app")} className={menu==="Mobile-app"?"active":""}>Mobile-app</a>
        <a href='#Footer' onClick={()=>setMenu("Contact-us")} className={menu==="Contact-us"?"active":""} >Contact us </a> 
        
{/*   optional hover sathi 
        <li >Home</li>
        <li >Menu</li>
        <li >Mobile-app</li>
        <li>Contact us </li>
          */}

      </ul>
      <div className="Navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="Navbar-search-icon">
           <Link to='/Cart'> <img src={assets.basket_icon} alt="" /> </Link>

            <div className = {getTotalCArtAmount===0?" ":"Dot"}></div> 
        </div>
            <button className='Navbar-button' onClick={()=>setShowlogin(true)}> Sign In</button>
      </div>
    </div>
  )
}

export default Navbar
