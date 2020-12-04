import React, { useState } from "react"
import { HomeGrid } from "../components/Styles/index.js"

import Cart from "../components/Cart"
import Products from "../components/Products"

import ProductsContext from "../context/Products"
import CartContext from "../context/Cart"

import GlobalStyle from "../globalStyle"
import Theme from "../theme"
import Categories from "../components/Categories"

import EditProduct from "../components/EditProduct"

const Home = () => {
  const [products, setProducts] = useState([])

  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState({})

  const [activeProduct, setActiveProduct] = useState(null)

  // everything on the orders list
  const [orders, setOrders] = useState([])

  const updateNewOrdersToActive = () => {
    const newOrders = orders
      .filter(order => order.type === "new")
      .map(order => ({
        ...order,
        type: "active",
      }))

    setOrders([
      ...orders.filter(order => order.type === "active"),
      ...newOrders,
    ])
  }
  const addToOrders = product => setOrders([...orders, product])

  const removeOrderAtIndex = index => {
    const oldOrders = [...orders.filter(order => order.type === "active")]

    const newOrders = [...orders.filter(order => order.type === "new")]

    // const newOrdersE = newOrders.filter(({ id }) => id !== index)
    newOrders.splice(index, 1)

    setOrders([...oldOrders, ...newOrders])
  }

  return (
    <Theme>
      <GlobalStyle />
      <HomeGrid>
        <ProductsContext.Provider
          value={{
            categories,
            setCategories,
            activeCategory,
            setActiveCategory,
            products,
            setProducts,
            activeProduct,
            setActiveProduct,
          }}
        >
          <CartContext.Provider
            value={{
              orders,
              setOrders,
              removeOrderAtIndex,
              addToOrders,
              updateNewOrdersToActive,
            }}
          >
            <Categories />
            <Products />
            {Boolean(activeProduct) ? <EditProduct /> : <Cart />}
          </CartContext.Provider>
        </ProductsContext.Provider>
      </HomeGrid>
    </Theme>
  )
}

export default Home
