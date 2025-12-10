import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setshowLogin}) => {

    const [curstate,setcurstate]=useState("Sign Up")

  return (
    <div className="LoginPopup">
        <form  className="LoginPopup-container">

            <div className="LoginPopup-title">
                <h2>{curstate}</h2>
                <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            
            <div className="LoginPopup-inputs">
                {curstate==="Login"?<></>: <input type="text"  placeholder='your name' required/>}
                <input type="email" placeholder='your email' required/>
                <input type="password" placeholder='password' required/>
            </div>

            <button>{curstate==="Sign Up"?"Create account":"Login"}</button>

            <div className="LoginPopup-condition">
                <input type="checkbox" required/>
                <p> By continuing , I agree to the terms of use & privacy policy .</p>
            </div>

            { curstate==="Login"?
             <p>Create a new account ? <span onClick={()=>setcurstate("Sign Up")}>Click here</span></p>
             :
             <p>Already have an account ? <span onClick={()=>setcurstate("Login")}>Login here</span></p>
            }
           
        </form>
    </div>
  )
}

export default LoginPopup
