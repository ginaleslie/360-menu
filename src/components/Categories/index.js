import React, { useContext } from "react"
import { useQuery } from "react-query"
import ProductsContext from "../../context/Products"
import { LoadingPage, LoadingEllipsis, SideBar, Logo } from "./styles"
import Icon from "../Icon"
import CategoryButton from "../CategoryButton"

const Categories = () => {
  const {
    setCategories,
    categories,
    setActiveCategory,
    activeCategory,
  } = useContext(ProductsContext)

  const { isLoading, error } = useQuery("repoData", () =>
    fetch("https://project-indie-api.netlify.app/.netlify/functions/categories")
      .then(res => res.json())
      .then(res => {
        setCategories(res.categories)
        setActiveCategory(res.categories[0])
      })
  )

  if (isLoading)
    return (
      <LoadingPage>
        <LoadingEllipsis>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingEllipsis>
      </LoadingPage>
    )

  if (error) return "An error has occurred: " + error.message

  return (
    <SideBar>
      <Logo>
        <Icon name="LOGO" size="xlarge" />
      </Logo>
      <div>
        {categories.map(category => {
          return (
            <div key={category.id}>
              <CategoryButton
                click={() => {
                  setActiveCategory(category)
                }}
                text={category.name}
                color={
                  activeCategory !== category && category.Products
                    ? "white"
                    : activeCategory !== category && !category.Products
                    ? "grayOne"
                    : "primary"
                }
                icon={category.icon}
                iconColor={
                  activeCategory !== category && category.Products
                    ? "white"
                    : activeCategory !== category && !category.Products
                    ? "grayOne"
                    : "primary"
                }
                disabled={!category.Products}
              />
            </div>
          )
        })}
        <CategoryButton
          text="Waiter"
          icon="WAITER"
          bg="primary"
          bgHover="primary"
        />
      </div>
    </SideBar>
  )
}

export default Categories
