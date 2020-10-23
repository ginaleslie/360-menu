import styled from "styled-components"
import React from "react"

const ProductNameText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
`

export default ProductNameText
