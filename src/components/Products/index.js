import React, { useState, useContext } from "react"
import { menu } from "../Data"
import CartContext from "../../context/Cart"
import "../Styles/index.css"

const Products = () => {
  const { setTotal } = useContext(CartContext)
  const { setCart } = useContext(CartContext)
  function add(product) {
    setCart(current => [
      ...current,
      { name: product.name, price: product.price },
    ])
    setTotal(current => current + product.price)
  }

  // console.log(cart)

  return (
    <div>
      <h1>Food items</h1>
      <div className="productsGrid">
        {menu.map((product, index) => {
          return (
            <ul key={`${product.name}_${index}`}>
              <div>
                <li>{product.name}</li>
                <div>
                  {product.size === null ? null : <li>{product.size}</li>}
                  <li>{product.price}</li>
                </div>
              </div>
              <div>
                {product.description === null ? null : (
                  <li>{product.description}</li>
                )}
              </div>
              <button onClick={() => add(product)}>add</button>
            </ul>
          )
        })}
      </div>
    </div>
  )
}

export default Products
