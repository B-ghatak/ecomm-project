import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { ProductList } from './components/ProductList';
import Cart from './components/Cart';
import './app.css'

export const App = () => {
  return (
 <Router>
  <Routes>
<Route path = '/' element ={<ProductList/>} />
<Route path = '/cart' element ={<Cart/>} />
  </Routes>
 </Router>
  )
}


export default App;
