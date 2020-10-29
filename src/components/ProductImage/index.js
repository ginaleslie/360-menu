import React from "react"
import PropTypes from "prop-types"
import { Image, Container } from "./styles"

const ProductImage = ({
  source,
  alt,
  maxWidth,
  borderRad,
  minWidth,
  maxHeight,
}) => (
  <Container maxWidth={maxWidth} minWidth={minWidth}>
    <Image src={source} alt={alt} borderRad={borderRad} maxHeight={maxHeight} />
  </Container>
)

ProductImage.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  maxHeight: PropTypes.oneOf(["heightCart"]),
  maxWidth: PropTypes.oneOf(["widthFood", "widthDrink", "widthCart"]),
  minWidth: PropTypes.oneOf(["widthFood", "widthDrink", "minCart"]),
  borderRad: PropTypes.oneOf(["borderFood", "borderDrink", "borderCart"]),
}

export default ProductImage
