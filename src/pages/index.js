import React, { useState } from "react"
import "../components/Styles/index.css"

import Cart from "../components/Cart"
import Products from "../components/Products"

import ApplicationContext from "../context/Application"

import GlobalStyle from "../globalStyle"
import Theme from "../theme"
import Categories from "../components/Categories"

const Home = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState({})
  const [pastOrders, setPastOrders] = useState([])
  return (
    <Theme>
      <GlobalStyle />
      <div className="homeGrid">
        <ApplicationContext.Provider
          value={{
            total,
            setTotal,
            cart,
            setCart,
            categories,
            setCategories,
            activeCategory,
            setActiveCategory,
            products,
            setProducts,
            pastOrders,
            setPastOrders,
          }}
        >
          <Categories />
          <Products />
          <Cart />
        </ApplicationContext.Provider>
      </div>
    </Theme>
  )
}

export default Home
