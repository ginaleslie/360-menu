import React, { useState } from "react"
import "../components/Styles/index.css"

import Cart from "../components/Cart"
import Products from "../components/Products"

import ProductsContext from "../context/Products"
import CartContext from "../context/Cart"

import GlobalStyle from "../globalStyle"
import Theme from "../theme"
import Categories from "../components/Categories"
import Copy from "../components/Copy"
import EditProduct from "../components/EditProduct"

const Home = () => {
  const [products, setProducts] = useState([])
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState([])
  const [activeCategory, setActiveCategory] = useState({})
  // const [isSelected, setIsSelected] = useState(false)

  // // stores Product details
  // const [editOrder, setEditOrder] = useState([])

  // // adds order to cart
  // const [newOrders, setNewOrders] = useState([])

  // const [activeOrders, setActiveOrders] = useState([])

  // this stores the currently selected/active product
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
    const newOrders = [...orders]
    newOrders.splice(index, 1)
    setOrders(newOrders)
  }

  return (
    <Theme>
      <GlobalStyle />
      <div className="homeGrid" id="root">
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
              total,
              setTotal,
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
      </div>
    </Theme>
  )
}

export default Home
