import React from 'react'
import { useGlobalContext } from '../context'
import Categories from './Categories'
import ProductList from './ProductList'

const Products = () => {
  const { products } = useGlobalContext()
  return (
    <section>
      <Categories />
      <div className="section-center">
        {
          products.map(pro => {
            return <ProductList key={pro.id} product={pro} />
          })
        }
      </div>
    </section>
  )
}

export default Products
