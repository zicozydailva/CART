import React from 'react';
import {FaShoppingCart} from "react-icons/fa"
import {Link} from "react-router-dom"
import { useGlobalContext } from '../context';
const Nav = () => {
  const {cart} = useGlobalContext()
  return (
    <nav>
      <Link to="/">
        <h2>SHOP</h2>
      </Link>
      <Link to="/cart">
        <FaShoppingCart className="icon"/><span>{cart.length}</span>
      </Link>
    </nav>
  )
}

export default Nav
