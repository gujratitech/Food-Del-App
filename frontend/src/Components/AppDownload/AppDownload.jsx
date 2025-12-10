import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
  return (
    <div className='App-Download' id='App-Download'>
        <p>For Beter Experience Download <br/> 
DeliGo App</p>
        <div className="App-Download-platform">
            <img src={assets.play_store} alt="" /><img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}

export default AppDownload
