import React, { useContext } from "react"
import { useQuery } from "react-query"
import ApplicationContext from "../../context/Application"
import { LoadingPage, LoadingEllipsis, SideBar, Logo } from "./styles"
import Icon from "../Icon"
import CategoryButton from "../CategoryButton"

const Categories = () => {
  const { setCategories, categories, setActiveCategory } = useContext(
    ApplicationContext
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
      <div>
        {categories.map(category => {
          return (
            <div key={category.id}>
              <CategoryButton
                click={() => {
                  setActiveCategory(category)
                }}
                text={category.name}
                color={category ? "white" : "primary"}
                icon={category.icon}
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
