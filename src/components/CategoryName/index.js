import React from "react"
import PropTypes from "prop-types"
import CategoryNameText from "./styles"

const CategoryName = ({ children, size, color }) => (
  <CategoryNameText size={size} color={color}>
    {children}
  </CategoryNameText>
)

CategoryName.propTypes = {
  size: PropTypes.oneOf(["xsmall", "small"]),
  color: PropTypes.oneOf(["white", "primary", "secondary"]),
  children: PropTypes.node,
}
CategoryName.defaultProps = {
  size: "xsmall",
  color: "white",
}

export default CategoryName
