import React, { useContext } from "react"
import { Button, Styled } from "./styles"
import Icon from "../Icon"
import CategoryName from "../CategoryName"
import ProductsContext from "../../context/Products"

const CategoryButton = ({
  icon,
  iconSize,
  click,
  text,
  color,
  bg,
  bgHover,
  disabled,
  iconColor,
}) => {
  return (
    <Button onClick={click} bg={bg} bgHover={bgHover} disabled={disabled}>
      <div>
        <Styled>
          <Icon name={icon} size={iconSize} color={iconColor} />
        </Styled>
        <CategoryName color={color}>{text}</CategoryName>
      </div>
    </Button>
  )
}

CategoryButton.defaultProps = {
  color: "white",
  iconSize: "large",
  icon: "PANINI",
  text: "Panini",
  bg: "secondary",
  bgHover: "secondaryHover",
  click: () => alert("Clicked"),
  disabled: false,
}

export default CategoryButton
