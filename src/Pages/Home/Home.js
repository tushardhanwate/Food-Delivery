import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExportMenu from '../../Components/Exportmenu/ExportMenu'
import Fooddisplay from '../../Components/Fooddisplay/Fooddisplay'
import AppDownload from '../../Components/AppDownload/AppDownload'
const Home = () => {
  const[category ,setCategory]=useState("all")
  return (
    <div>
      <Header/>
    <ExportMenu category={category}  setCategory={setCategory}/> { /* props pas kele Explore menu la     category={category}  setCategory={setCategory}*/}
    <Fooddisplay category={category} />
    <AppDownload />
    </div>
  )
}

export default Home
