import React from "react"
import PropTypes from "prop-types"

const ProductButton = ({ children, handleAddProduct }) => {
  return (
    <>
      <button onClick={handleAddProduct}>{children}</button>
    </>
  )
}

export default ProductButton
