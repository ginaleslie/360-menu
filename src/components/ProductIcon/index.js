import React from "react"
import PropTypes from "prop-types"
import { Container, Styled, StyledTwo } from "./styles"
import Icon from "../Icon"

const ProductIcon = ({ icon, maxWidth, borderRad, minWidth }) => (
  <Container maxWidth={maxWidth} minWidth={minWidth} borderRad={borderRad}>
    <Styled>
      <Icon name={icon} size="xlarge" color="grayOne" />
    </Styled>
    <StyledTwo>
      <Icon name={icon} size="xlarge" color="grayTwo" />
    </StyledTwo>
  </Container>
)

ProductIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  maxWidth: PropTypes.oneOf(["widthFood", "widthDrink", "widthCart"]),
  minWidth: PropTypes.oneOf(["widthFood", "widthDrink", "minCart"]),
  borderRad: PropTypes.oneOf(["borderFood", "borderDrink", "borderCart"]),
}

export default ProductIcon
