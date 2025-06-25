import React, { useState } from 'react'
import cartimg from "../assets/mycart/9inchPrint (1).png"
import cartimg2 from "../assets/mycart/12inchPrint (1).jpg"
import cartimg3 from "../assets/mycart/cromPrint (1).jpg"
import "./Cart.css"
import { RiDeleteBinLine } from 'react-icons/ri'

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '9 inch print balloon',
      price: 123,
      quantity: 1,
      image: cartimg
    },
    {
      id: 2,
      name: '12 inch print balloon',
      price: 123,
      quantity: 1,
      image: cartimg2
    },
    {
      id: 3,
      name: 'Crom print balloon',
      price: 123,
      quantity: 1,
      image: cartimg3
    }
  ])

  const increaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    )
  }

  const decreaseQty = (id) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    )
  }

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  const grandTotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="Cart container">
      <h1>MY CART</h1>

      <div className='details'>
        <h3>
          <div className='div1'>Product</div>
          <div className='div2'>Quantity</div>
          <div className='div3'>Price</div>
        </h3>

        {cartItems.map(item => (
          <div className='product' key={item.id}>
            <div className='product-detail'>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
            <div className='product-quantity'>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              {item.quantity}
              <button onClick={() => increaseQty(item.id)}>+</button>
              <RiDeleteBinLine onClick={() => removeItem(item.id)} style={{ cursor: 'pointer', marginLeft: '10px' }} />
            </div>
            <div className='product-price'>
              ₹ {item.price * item.quantity}
            </div>
          </div>
        ))}
      </div>

      <div className='checkout'>
        <h2>Grand Total: Rs. {grandTotal}</h2>
        <button className='btn btn-success'>Checkout</button>
      </div>
    </div>
  )
}

export default Cart
