import React from 'react'
import './Cart.css'
import items  from "../data/Data"
const Cart = () => {
  return (
    <div className='cartpage1'>
        <h2>Items to buy</h2>
        <div className='cartpage'>
            {/* cart products */}
            <div className='cart-products'>
                {
                    items.map(function(val,i){
                        return(
                            <div className='product'>
                                <div className='item-img'>
                                    <img src={val.imgNm}/>
                                </div>
                                {/* <div className='item'>{val.}</div> */}
                                <div className='quantity'>{val.desc}</div>
                                <div className='amount'>{val.price}</div>
                            </div>
                        )
                    })
                }

                {/* <div className='product'>
                    <div className='item-img'></div>
                    <div className='item'>500pcs Custom Printed Balloons – Personalized Balloons for Events, Business Branding, Store Décor, Grand Openings</div>
                    <div className='quantity'>5</div>
                    <div className='amount'>123</div>
                </div>
                <div className='product'>
                    <div className='item-img'></div>
                    <div className='item'>2000 Custom Printed Latex Balloons with Logo – Personalized Balloons for Events, Promotions, Grand Openings, Parties & Marketing Décor</div>
                    <div className='quantity'>8</div>
                    <div className='amount'>456</div>
                </div> */}
            </div>

            {/* checkout */}
            <div className='checkout'>
                <h1>checkout</h1>
                <p>Total items : 5</p>
                <p>Total price : ₹ 12,500</p>
                <button>Checkout</button><br/>
                <span><a href="/">Continue Shopping</a></span>
            </div>


        </div>
    </div>
  )
}

export default Cart