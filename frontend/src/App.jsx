import React, { useState } from 'react'
import NavBar from './Components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/home/Home';
import Cart from './Pages/Cart/Cart';
import PlaceOrder from './Pages/placeOrder/PlaceOrder';
import Footer from './Components/Footer/Footer'
import LoginPopup from './Components/LoginPopup/LoginPopup'

const App = () => {
  const [showLogin,setshowLogin]=useState(false)
  return (
    <>
    { showLogin? <LoginPopup setshowLogin={setshowLogin}/> :<></>}

     <div className='app'>
      <NavBar setshowLogin={setshowLogin}/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Order' element={<PlaceOrder/>}/>
      </Routes>
 
    </div>
    <Footer />
    </>
   
  )
}

export default App
