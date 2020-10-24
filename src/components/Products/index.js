import React, { useContext } from "react"
import ApplicationContext from "../../context/Application"
import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query"

import "../Styles/index.css"

import ProductName from "../ProductName"
import Price from "../Price"
import { ProductCard, ProductCardGrid } from "./styles"

const queryCache = new QueryCache()

export default function App() {
  const {
    setTotal,
    setCart,
    activeCategory,
    products,
    setProducts,
  } = useContext(ApplicationContext)

  const { error } = useQuery("productData", () =>
    fetch("https://project-indie-api.netlify.app/.netlify/functions/products")
      .then(res => res.json())
      .then(res => setProducts(res.products))
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
      <div>
        <h2>{activeCategory.name}</h2>

        <ProductCardGrid>
          {products
            .filter(product => product.category.includes(activeCategory.id))
            .map((product, index) => (
              <ProductCard key={`${product.name}_${index}`}>
                <ProductName>{product.name}</ProductName>
                <Price size="small" color="dark" amount={product.unitCost} />
                <button onClick={() => add(product)}>add</button>
              </ProductCard>
            ))}
        </ProductCardGrid>
      </div>
    </ReactQueryCacheProvider>
  )
}
