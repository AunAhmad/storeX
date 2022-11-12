import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'
import CartItem from '../../components/CartItem'

const Cart = () => {
  

  const count = useSelector((state)=>state.cart.count)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const products = useSelector((state)=>state.cart.products)

  return (
    <div className='container'>
      <div className="items">
      
      {products.map((prod)=>{
        return (
          <CartItem key={prod.id} item={prod}/>
        )
      })}
      </div>
      <div className="cart">
       <h3>Cart Totals</h3>
       <div className="total">
        <span className='total_text'>Total</span>
        <span className="total_price">$ {totalPrice}</span>
       </div>

      </div>
      
    </div>
  )
}

export default Cart
