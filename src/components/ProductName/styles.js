// import styled from "styled-components"

// const ProductNameText = styled.p`
//   font-size: ${props => props.theme.fontSizes[props.size]};
//   color: ${props => props.theme.colors[props.color]};
// `
import React from "react"

const ProductNameText = ({ children, size, color }) => (
  <div>
    {children} {size} {color}
  </div>
)
export default ProductNameText
