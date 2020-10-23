import React, { useState, useContext } from "react"
import CartContext from "../../context/Cart"
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query"
import Categories from "../Categories"
import "../Styles/index.css"
import CategoryContext from "../../context/Category"
import ProductName from "../ProductName"
import Price from "../Price"
import { ProductCard, ProductCardGrid } from "./styles"

const queryCache = new QueryCache()

export default function App() {
  const { setTotal, setCart } = useContext(CartContext)
  const { activeCategory, data, setData } = useContext(CategoryContext)

  const { error } = useQuery("repoData", () =>
    fetch("https://project-indie-api.netlify.app/.netlify/functions/products")
      .then(res => res.json())
      .then(res => setData(res.products))
  )

  if (error) return "An error has occurred: " + error.message

  function add(product) {
    setCart(current => [
      ...current,
      { name: product.name, price: product.unitCost },
    ])
    setTotal(current => current + product.unitCost)
  }

  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Categories />
      <div>
        <h2>{activeCategory.name}</h2>
        <ProductCardGrid>
          {data
            .filter(product => product.category.includes(activeCategory.id))
            .map((product, index) => (
              <ProductCard key={`${product.name}_${index}`}>
                <ProductName size="medium" color="dark">
                  {product.name}
                </ProductName>
                <Price size="small" color="dark" amount={product.unitCost} />
                <button onClick={() => add(product)}>add</button>
              </ProductCard>
            ))}
        </ProductCardGrid>
      </div>
    </ReactQueryCacheProvider>
  )
}
