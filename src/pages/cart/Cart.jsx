import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'
const Cart = () => {
  

  const count = useSelector((state)=>state.cart.count)
  const products = useSelector((state)=>state.cart.products)

  return (
    <div>
      {count}
      {products.map((prod)=>{
        return (
          <ul>
            <li>{prod.name}</li>
            <li>{prod.price}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default Cart
