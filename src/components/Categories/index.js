import React, { useContext } from "react"
import { useQuery } from "react-query"
import CategoryContext from "../../context/Category"
import { LoadingPage, LoadingEllipsis, SideBar, Logo } from "./styles"
import Icon from "../Icon"
import CategoryButton from "../CategoryButton"

const Categories = () => {
  const { setCategories, categories, setActiveCategory } = useContext(
    CategoryContext
  )

  const { isLoading, error } = useQuery("repoData", () =>
    fetch("https://project-indie-api.netlify.app/.netlify/functions/categories")
      .then(res => res.json())
      .then(res => {
        setCategories(res.categories)
        setActiveCategory(res.categories[2])
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
  console.log(categories)

  return (
    <SideBar>
      <Logo>
        <Icon name="LOGO" size="xlarge" />
      </Logo>
      {categories.map(category => {
        return (
          <div key={category.id}>
            <CategoryButton
              click={() => {
                setActiveCategory(category)
              }}
              text={category.name}
              color={category ? "light" : "primary"}
              icon={<Icon name={category.icon} size="large" />}
            />
          </div>
        )
      })}
      <CategoryButton
        text="Waiter"
        color="light"
        icon={<Icon name="WAITER" size="large" bg="primary" />}
      />
    </SideBar>
  )
}

export default Categories
