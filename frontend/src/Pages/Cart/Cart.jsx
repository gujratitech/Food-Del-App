import React, { useContext, useState } from 'react'
import './Cart.css'
import { StoreContext } from '../../contaxt/StoreContaxt'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

    const { cartitems, food_list, removefromcart ,gettotalcartamount} = useContext(StoreContext)
     
    const[promo,setpromo]=useState("20OFF");

    const navigate =useNavigate();

    return (

        <div className="cart">

            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Item</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />

                {
                food_list.map((item, index) => {
                    if (cartitems[item._id] > 0) {
                        return (
                            <div>
                                <div className="cart-items-title cart-items-item">
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>₹{item.price}</p>
                                    <p>{cartitems[item._id]}</p>
                                    <p>₹{item.price * cartitems[item._id]}</p>
                                    <p onClick={()=>removefromcart(item._id)} className='cross'>x</p>
                                </div>
                                <hr />
                            </div>
                        )
                    }
                })}

            </div>

            <div className="cart-bottom">
                <div className="cart-total">

                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>SubTotal</p>
                            <p>₹{gettotalcartamount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>₹{gettotalcartamount()===0?0:2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <b>Total</b>
                            <b>₹{gettotalcartamount()===0?0:gettotalcartamount()+2}</b>
                        </div>
                    </div>
                    <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>

                </div>

                <div className="cart-promocode">
                    <div>
                        <p>IF you have a promocode Enter it Here</p>
                        <div className="cart-promocode-input">
                            <input type="text" placeholder='promo code' />
                            <button >Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
