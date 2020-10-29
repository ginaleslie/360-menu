import React, { useContext } from "react"
import ProductsContext from "../../context/Products"

import { useQuery, QueryCache, ReactQueryCacheProvider } from "react-query"

import FoodCard from "../FoodCard"
import DrinkCard from "../DrinkCard"
import Heading from "../Heading"

import { CardGrid, Container, Scroll } from "./styles"

const queryCache = new QueryCache()

export default function App() {
  const { products, setProducts, activeCategory, setIsSelected } = useContext(
    ProductsContext
  )

  const { error } = useQuery("productData", () =>
    fetch("https://project-indie-api.netlify.app/.netlify/functions/products")
      .then(res => res.json())
      .then(res => setProducts(res.products))
  )

  if (error) return "An error has occurred: " + error.message

  console.log(activeCategory)
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Scroll>
        <Container>
          <Heading size="large" color="primary" paddingBtm="xlarge">
            Table 19
          </Heading>
          <Heading paddingBtm="large">{activeCategory.name} Menu</Heading>

          <CardGrid>
            {activeCategory.name === "Drink"
              ? products
                  .filter(
                    product =>
                      product.category.includes(activeCategory.id) &&
                      activeCategory.id === "recEG6YAEjBY5aQaM"
                  )
                  .map((product, index) => (
                    <DrinkCard
                      key={`${product.name}_${index}`}
                      product={product}
                    ></DrinkCard>
                  ))
              : products
                  .filter(product =>
                    product.category.includes(activeCategory.id)
                  )
                  .map((product, index) => (
                    <FoodCard
                      key={`${product.name}_${index}`}
                      product={product}
                    ></FoodCard>
                  ))}
          </CardGrid>
        </Container>
      </Scroll>
    </ReactQueryCacheProvider>
  )
}
