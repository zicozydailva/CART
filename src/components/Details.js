import React from 'react';
import {Link} from 'react-router-dom'
import { useGlobalContext } from '../context'

function Details() {
  const { detailProduct, addToCart, increment, decrement } = useGlobalContext()
  const { id, title, img, price, count, desc, category, inCart } = detailProduct;


  return (
    <section className="details__section">
      <img src={img} alt={title} />
      <div className="item-info">
        <h4>{title}</h4>
        <h4>&#8358;{price}</h4>
      </div>
      {
        inCart ? <div className="">
          <button onClick={() => decrement(id)}>-</button>
          <span>{count}</span>
          <button onClick={() => increment(id)}>+</button>
        </div> : <button onClick={() => addToCart(id)}>Add To Cart</button>
      }
      
      <Link to="/">
        <button>View Products</button>
      </Link>
      <h5>Category: {category}</h5>
      <h5>Description: {desc}</h5>
    </section>
  )
}

export default Details
