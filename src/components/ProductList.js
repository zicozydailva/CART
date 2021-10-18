import React from 'react'
import {Link} from "react-router-dom";
import { useGlobalContext } from '../context';

const ProductList = ({product}) => {
    const {id, title, price, desc, category, img, rating} = product;
    const {handleDetails} = useGlobalContext()
  return (
    <div className="menu-item">
      <Link to="/details" onClick={() => handleDetails(id)}>
      <img src={img} alt={title} className="photo" />
      <div className="item-info">
      <h4>{title}</h4>
      <h4>&#8358;{price}</h4>
      </div>
      <h4>Category: {category}</h4>
      <h4>Description: {desc}</h4>
      <h4>Rating: {rating}</h4>
      </Link>
    </div>
  )
}

export default ProductList
