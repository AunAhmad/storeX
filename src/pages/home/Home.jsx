import React, { useEffect, useState } from 'react'
import './Home.css'


import Product from '../../components/Product'


const Home = () => {
  const [products,setProducts] = useState([])

useEffect(()=>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then((data)=>{
    setProducts(data.products)})
},[])
 console.log(products)
  

            
  
  return (
   <div className="products">
    {products.map((prod)=>{
      return (
        <Product key={prod.id} id={prod.id} title={prod.title} desc={prod.description} price={prod.price} image={prod.images[0]} />
      )
    })}
   </div>
  )
}

export default Home
