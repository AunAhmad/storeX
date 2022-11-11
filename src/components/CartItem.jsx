import React from 'react'
import './CartItem.css'
const CartItem = ({item}) => {
  return (
    <div className='item'>
        <img src={item.image} alt="image" className="item_image" />
        <span className="title">{item.title}</span>
        <span className="price">$ {item.price}</span>
        <span className="qty">{item.qty}</span>
        <span className="subtotal">$ {item.subtotal}</span>
      
    </div>
  )
}

export default CartItem
