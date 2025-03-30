import React from 'react'
import { Navbar } from './Navbar'
import '../app.css'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
 const {items:cartItems, tempItems, totalPrice} = useSelector(state=> state.cart)
 const navigate = useNavigate()
  return (
  <>
  <Navbar/>
  <div className="wrapper">
  <div className="cart-page-container">
    <div className="card-container">
      <h1> Your Cart</h1>
      { cartItems.map((item) => (
 <div className="card-item">
 <img src={item.image} alt={item.title} className="src" />
 <div className="card-item-details">
   <h3>{item.title}</h3>
   <p>Price : ${item.price}</p>
   <div>
     <input type="number" min="1" />
     <button>Update</button>
     <button>Remove</button>
   </div>
 </div>
</div>
      ))
       }
    </div>
    <div className="card-total">
      <p>Total  ${totalPrice}</p>
      <button className="back-button" onClick={()=> navigate('/')}>
        Back to Shopping
      </button>
    </div>
  </div>
  </div>
  </>
  )
}

export default Cart