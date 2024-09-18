import { assets } from '../../Assets/assets'
import'./Appdownload.css'
import React from 'react'

const AppDownload = () => {
  return (
          <> 
      <div className='App-download '  id='App-download'>
        <p>For Better Experiance Download <br />tomato App </p>
       <div className="App-download-platform"> 
       <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
        </div>

    </div>
    </>
  )
}

export default AppDownload
