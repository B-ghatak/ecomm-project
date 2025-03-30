import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <h1>
          <Link to="/" >Shopsy.com</Link>
        </h1>


        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
        </div>
    </nav>
  )
}

// export default Navbar 

