import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'
import CartItem from '../../components/CartItem'
import Thank from '../Thank'
import { Link } from 'react-router-dom'

const Cart = () => {
  const [cartItem,setCartItem] = useState(true);

 

  const count = useSelector((state)=>state.cart.count)
  const totalPrice = useSelector((state)=>state.cart.totalPrice)
  const products = useSelector((state)=>state.cart.products);
  
  const submitProd = ()=>{
    console.log(products)
  }

  return (
    <div className='container'>
      <div className="items">
      
      {products.map((prod)=>{
        if(prod.qty>0){
          return(
            <CartItem key={prod.id} item={prod} />
          )
        }
      })}
      </div>
      <div className="cart">
       
       <div className="total">
        <h3>Cart Totals</h3>
        
        <span className="total_price">$ {totalPrice}</span>
        {totalPrice>0&&<Link className='thank_link' to='/thank'><span onClick={submitProd} className="checkout">Checkout</span></Link>}
       </div>

      </div>
      
    </div>
  )
}

export default Cart
