import React, { useState } from "react"
import "../components/Styles/index.css"

import Cart from "../components/Cart"
import Products from "../components/Products"

import CartContext from "../context/Cart"

const Home = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  return (
    <div className="homeGrid">
      <CartContext.Provider value={{ total, setTotal, cart, setCart }}>
        <Products />
        <Cart />
      </CartContext.Provider>
    </div>
  )
}

export default Home
