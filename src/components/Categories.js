import React from 'react'
import {useGlobalContext} from "../context"

const Categories = () => {
  const {categories, filteredItem} = useGlobalContext()
  return (
    <div className="btn-container">
      {
        categories.map((category, index) => {
          return <button type="button" key={index} onClick={() => filteredItem(category)}>
            {category}
          </button>
        })
      }
    </div>
  )
}

export default Categories
