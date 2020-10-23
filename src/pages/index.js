import React, { useState } from "react"
import "../components/Styles/index.css"

import Cart from "../components/Cart"
import Products from "../components/Products"

import CartContext from "../context/Cart"
import CategoryContext from "../context/Category"
import GlobalStyle from "../globalStyle"
import Theme from "../theme"
// import Categories from "../components/Categories"

const Home = () => {
  const [data, setData] = useState([])
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState({})
  return (
    <Theme>
      <GlobalStyle />
      <div className="homeGrid">
        <CartContext.Provider value={{ total, setTotal, cart, setCart }}>
          <CategoryContext.Provider
            value={{
              categories,
              setCategories,
              activeCategory,
              setActiveCategory,
              data,
              setData,
            }}
          >
            {/* <Categories /> */}
            <Products />
            <Cart />
          </CategoryContext.Provider>
        </CartContext.Provider>
      </div>
    </Theme>
  )
}

export default Home
