
import './Product.css'

import {useDispatch} from 'react-redux'
import { addProd } from '../redux/cartSlice'




const Product = ({id,title,desc,price,image}) => {

    const product = {
        id: id,
        title: title,
        price: price,
        image: image,
        qty: 1,
        subtotal: price
    }

    const dispatch = useDispatch()
  return (
    <div className='home'>
      <div className="home_wrapper">
      <div className="image"><img src={image} alt="prod-image" /></div>
      <div className="prod_desc">
        <h2>{title}</h2>
        <p>{desc}</p>
        <h4 className="price">{price}$</h4>
        <div className="scale">
        <span className="minus">-</span><span className="number">0</span><span className="plus">+</span></div>
        <button className='add_to_cart' onClick={()=>dispatch(addProd(product))}>Add To Cart</button>
      </div>
      </div>
    </div>
  )
}

export default Product
