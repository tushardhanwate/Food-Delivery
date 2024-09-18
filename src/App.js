
import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder'
import Cart from './Pages/Card/Cart'
import Footer from './Components/Footer/Footer'
import Loginpop from './Components/Loginpop/Loginpop'
const App = () => {
  const[showlogin,setShowlogin]=useState(false)
  return (
    <>
    {showlogin?<Loginpop setShowlogin={setShowlogin}/>:<> </>}   {/* showlogin true asl t login pop show honar  : an false asn t frangment sow honar*/ }
    <div className='App'>
      <Navbar setShowlogin={setShowlogin}/>
     
      <Routes>
<Route path ='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>}/>
<Route path ='/order' element={<PlaceOrder/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
