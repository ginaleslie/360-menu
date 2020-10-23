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
<<<<<<< Updated upstream
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
=======
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Categories />
      <div>
        <h2>{activeCategory.name}</h2>
        <ProductCardGrid>
          {data
            .filter(product => product.category.includes(activeCategory.id))
            .map((product, index) => (
              <ProductCard key={`${product.name}_${index}`}>
                <ProductName size="medium" color="light">
                  {product.name}
                </ProductName>
                <Price size="small" color="dark" amount={product.unitCost} />
                <button onClick={() => add(product)}>add</button>
              </ProductCard>
            ))}
        </ProductCardGrid>
>>>>>>> Stashed changes
      </div>
    </div>
  )
}

export default Products
