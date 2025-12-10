import React, { useContext } from 'react'
import './placeOrder.css'
import { StoreContext } from '../../contaxt/StoreContaxt'
const PlaceOrder = () => {

    const {gettotalcartamount} =useContext(StoreContext)

    return (
        <form className="place-order">
            <div className="place-order-left">

                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder='Enter your first name' />
                    <input type="text" placeholder='Enter your last name' />
                </div>
                <input type="email" placeholder='Enter your Email address' />
                <input type="text" placeholder='Enter your street' />
                <div className="multi-fields">
                    <input type="text" placeholder='Enter your City' />
                    <input type="text" placeholder='Enter your State' />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder='Enter your Zip code' />
                    <input type="text" placeholder='Enter your country' />
                </div>
                <input type="text" placeholder='Enter your phone' />


            </div>
            
            <div className="place-order-right">
                <div className="cart-total">

                    <h2>Cart Totals</h2>
                    <div>

                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>₹{gettotalcartamount()}</p>
                        </div>
                       
                        <hr />
                        <br />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{gettotalcartamount()===0?0:2}</p>
                        </div>
                        
                        <hr />
                        <br />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
                        </div>
                    </div>
                    <button >PROCEED TO PAYMENT</button>

                </div>
            </div>
        </form>
    )
}

export default PlaceOrder
