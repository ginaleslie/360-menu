import styled from "styled-components"
import "typeface-lora"

const ProductNameText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  font-family: "Lora", georgia, serif;
`

export default ProductNameText
