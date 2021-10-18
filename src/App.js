import React from 'react'
import "./App.css"
import { Switch, Route } from 'react-router-dom'
import Products from './components/Products'
import Cart from './components/Cart'
import Nav from './components/Nav'
import Details from './components/Details'
import Error from './components/Error'
const App = () => {
  return (
    <main>
      <Nav />
      <div className="title">
        <h2>Our Products</h2>
        <div className="underline"></div>
      </div>
      <Switch>
        <Route exact path="/" component={Products}/>
        <Route path="/cart" component={Cart}/>
        <Route path="/details" component={Details}/>
        <Route path="*" component={Error}/>
      </Switch>
    </main>
  )
}

export default App
