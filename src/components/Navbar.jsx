import React from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import {useSelector,useDispatch} from 'react-redux'
const Navbar = () => {
  const count = useSelector((state)=>state.cart.count)
  return (
    <div className='navbar'>
      <Link className='link' to={'/'}>StoreX</Link>
      <Link className='link' to={'/cart'}><AiOutlineShoppingCart/><span>{count}</span></Link>
    </div>
  )
}

export default Navbar
