import React from 'react'
import { useGlobalContext } from '../context'
import {Link} from "react-router-dom"
const Cart = () => {
  const {cart, increment, decrement, removeCartItem, clearCart, cartTax, cartTotal} = useGlobalContext();

  if(cart.length < 1) {
    return <div className="emptyCart">
      <h1>Cart is Currently Empty</h1>
      <Link to="/">
        <button>View Products</button>
      </Link>
    </div>
  }
  return (
    <div>
      {
        cart.map(product => {
          const {id, title, price, img,  count, inCart} = product
          return <div key={id} className="">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h2>&#8358;{price}</h2>
            <button onClick={() => decrement(id)}>-</button>
            <span>{count}</span>
            <button onClick={() => increment(id)}>+</button><br />
            <button onClick={() => removeCartItem(id)}>REMOVE</button>

          </div>
        })
      }
      <button onClick={() => clearCart()}>CLEAR CART</button>
      <div className="totals">
        <h2>Tax: {cartTax}</h2>
        <h2>Total: {cartTotal}</h2>
      </div>
    </div>
  )
}

export default Cart
