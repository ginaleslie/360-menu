import React from "react"
import PropTypes from "prop-types"
import ProductNameText from "./styles"

const ProductName = ({ children, size, color }) => (
  <ProductNameText size={size} color={color}>
    {children}
  </ProductNameText>
)

ProductName.propTypes = {
  size: PropTypes.oneOf(["medium", "large"]),
  color: PropTypes.oneOf(["white", "secondary", "grayOne"]),
  children: PropTypes.node,
}
ProductName.defaultProps = {
  size: "medium",
  color: "secondary",
}

export default ProductName
