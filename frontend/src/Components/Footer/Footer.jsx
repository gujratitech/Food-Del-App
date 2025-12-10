import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <img className='logo' src={assets.logo} alt="" />
                <p>add anything you waant thd edht slejg  frtvnnk grvsvcxhnkl goifdfweap gkyno ioorgd troehgv ihergn thr on the eate of the cagood choice.</p>
                <div className="footer-content-socialicon">
                    <img src={assets.facebook_icon} alt="" /><img src={assets.twitter_icon} alt="" /><img src={assets.linkedin_icon} alt="" />
                </div>
            </div>

            
            <div className="footer-content-center">
               <h2>COMPANY</h2>
               <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
               </ul>
            </div>


            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>official@DeliGo.com</li>
                </ul>
            </div>
        </div>

        <hr />
        <p className="footer-copyright">
            Copyright 2024 &copy; DeliGo.com - All rights reserved.
        </p>
    </div>
  )
}

export default Footer
