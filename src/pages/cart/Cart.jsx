import React, { useState } from 'react'
import './Cart.css'
import {useSelector,useDispatch} from 'react-redux'
import CartItem from '../../components/CartItem'

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
        {totalPrice>0&&<span onClick={submitProd} className="checkout">Checkout</span>}
       </div>

      </div>
      
    </div>
  )
}

export default Cart
