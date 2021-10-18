import React, { createContext, useState, useEffect, useContext } from 'react'
import { singleProduct, storeProduct } from "./data";

const allCategories = ['all', ...new Set(storeProduct.map(pro => pro.category))];

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [products, setProducts] = useState(storeProduct);
  const [detailProduct, setDetailProduct] = useState(singleProduct)
  const [categories, setCategories] = useState(allCategories)
  const [cart, setCart] = useState([]);
  const [cartSubTotal, setCartSubTotal] = useState(0)
  const [cartTotal, setCartTotal] = useState(0)
  const [cartTax, setCartTax] = useState(0)

  const filteredItem = category => {
    if(category === "all") {
      setProducts(storeProduct)
      return;
    } 
     const menuItem = storeProduct.filter(pro => pro.category === category);
     setProducts(menuItem)
  }

  const addTotals = () => {
    let subTotal = 0;
    cart.map(item => (subTotal += item.total));
    let tempTax = subTotal * 0.1;
    let tax = parseFloat(tempTax.toFixed(2))
    let total = parseFloat(subTotal + tax).toFixed(2);
    setCartSubTotal(subTotal);
    setCartTax(tax)
    setCartTotal(total)
  }

  const handleDetails = id => {
    let tempPro = storeProduct.find(pro => pro.id === id)
    setDetailProduct(tempPro);
  }
  const getItem = id => {
    return products.find(pro => pro.id === id)
  }
  const addToCart = id => {
    let tempProduct = [...products]
    let index = tempProduct.indexOf(getItem(id))
    let newProduct = tempProduct[index];
    newProduct.inCart = true;
    newProduct.count = 1;
    const price = newProduct.price;
    newProduct.total = price
    setProducts(tempProduct)
    setCart([...cart, newProduct])
    addTotals()
  }

  const removeCartItem = id => {
    let tempProduct = [...products]
    let tempCart = [...cart]

    tempCart = tempCart.filter(pro => pro.id !== id)

    const index = tempProduct.indexOf(getItem(id))
    let removedPro = tempProduct[index]
    removedPro.inCart = false;
    removedPro.count = 0;
    removedPro.total = 0;
    setCart([...tempCart])
    addTotals()
  }

  const increment = id => {
    let tempCart = [...cart]
    let index = tempCart.indexOf(getItem(id));
    let newPro = tempCart[index]
    newPro.count = newPro.count + 1
    newPro.total = newPro.count * newPro.price
    setCart([...tempCart])
    addTotals()
  }
  const decrement = id => {
    const tempCart = [...cart]
    let index = tempCart.indexOf(getItem(id))
    let newPro = tempCart[index];
    newPro.count = newPro.count - 1
    if (newPro.count === 0) {
      removeCartItem(id)
    } else {
      newPro.total = newPro.count * newPro.price
      setCart([...tempCart])
      addTotals()
    }
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <AppContext.Provider value={
      {
        products, detailProduct, setProducts, setDetailProduct,
        handleDetails, cart, setCart, addToCart, increment, decrement, clearCart, cartTax, cartTotal, removeCartItem,
        filteredItem, categories
      }
    }>
      {children}
    </AppContext.Provider>
  )
}
const useGlobalContext = () => useContext(AppContext)

export { AppProvider, useGlobalContext, AppContext };