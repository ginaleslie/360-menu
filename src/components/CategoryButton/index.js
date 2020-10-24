import React from "react"
import { Button, Styled } from "./styles"
import Icon from "../Icon"
import CategoryName from "../CategoryName"

const CategoryButton = ({
  icon,
  iconSize,
  click,
  text,
  color,
  bg,
  bgHover,
}) => (
  <Button onClick={click} bg={bg} bgHover={bgHover}>
    <div>
      <Styled>
        <Icon name={icon} size={iconSize} />
      </Styled>
      <CategoryName color={color}>{text}</CategoryName>
    </div>
  </Button>
)

CategoryButton.defaultProps = {
  color: "white",
  iconSize: "large",
  icon: "PANINI",
  text: "Panini",
  bg: "secondary",
  bgHover: "secondaryHover",
  click: () => alert("Clicked"),
}

export default CategoryButton
