import React, { useContext, useState } from 'react'
import './NavBar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../contaxt/StoreContaxt';
const NavBar = ({setshowLogin}) => {

    const [menu,setMenu]=useState("home");

    const {gettotalcartamount} =useContext(StoreContext)

  return (
    <div className='NavBar'>
        <Link to='./'><img src={assets.logo} alt="" className="logo" /></Link>
        
        <ul className="navbar-menu">
            <Link to='/' className={menu=="home"?"active":""} onCack={()=>setMenu("home")} >home</Link>
            <a href='#Explore-Menu' className={menu=="menu"?"active":""} onCack={()=>setMenu("menu")} >menu</a>
            <a href='#App-Download' className={menu=="mobile-app"?"active":""} onCack={()=>setMenu("mobile-app")} >mobile-app</a>
            <a href='#footer' className={menu=="contact-us"?"active":""} onCack={()=>setMenu("contact-us")} >contact us</a>
        </ul>

        <div className="navbar-right">
            <img src={assets.search_icon} alt="" />

            <div className="navbar-search-icon">
                <Link to='./cart'><img src={assets.basket_icon} alt="" /></Link>
                <div  className={gettotalcartamount()>0?"dot":""}></div>
                
            </div>
            <button onClick={()=>setshowLogin(true)}>Sign in</button>
        </div>
        
    </div>
  )
}

export default NavBar
