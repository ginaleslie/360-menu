import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const ProductImageStyled = styled.img`
  width: 100%;
  height: auto;
`

const ProductImage = ({ image, name }) => (
  <ProductImageStyled src={image} alt={name} />
)

ProductImage.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default ProductImage
