import React, { useEffect } from 'react'
import { Navbar } from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../features/ShopCart/productSlice'
import { addToCart } from '../features/ShopCart/cartSlice'

export const ProductList = () => {

 const {items:products, status} = useSelector((state) =>state.products)

  const dispatch = useDispatch()

 useEffect(() =>{
if (status==='idle') {
  dispatch(fetchProducts())
}
 }, [status])

if(status === 'loading') return <p>Loading products</p>
if(status === 'failed') return <p>Failed to Load products. Please try again.</p>

  return (
    <>
    <div>
        <Navbar/>
        <div className="product-list">
{
  products.map(products =>(
<div className="product-card">
  <img src={products.image} alt={products.title} className="src" />
  <h2> {products.title} </h2>
  <p> ${products.price} </p>
  <button onClick= {() =>dispatch(addToCart(products))}>Add to Cart</button>
</div>
  ))
  }
        </div>
    </div>
    </>
  )
}
