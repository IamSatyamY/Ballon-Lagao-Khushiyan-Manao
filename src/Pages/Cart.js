import React from 'react'
import './Cart.css'
const Cart = () => {
  return (
    <div className='cartpage1'>
        <h2>Items to buy</h2>
        <div className='cartpage'>
            {/* cart products */}
            <div className='cart-products'>
                <div className='product'>
                    <div className='item'>500pcs Custom Printed Balloons – Personalized Balloons for Events, Business Branding, Store Décor, Grand Openings</div>
                    <div className='quantity'>5</div>
                    <div className='amount'>123</div>
                </div>
                <div className='product'>
                    <div className='item'>2000 Custom Printed Latex Balloons with Logo – Personalized Balloons for Events, Promotions, Grand Openings, Parties & Marketing Décor</div>
                    <div className='quantity'>8</div>
                    <div className='amount'>456</div>
                </div>
            </div>

            {/* checkout */}
            <div className='checkout'>
                checkout
            </div>


        </div>
    </div>
  )
}

export default Cart