import styled from "styled-components"
import "typeface-lora"

const PriceText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  padding-right: ${props => props.theme.padding[props.paddingRight]};
  font-family: "Lora", Georgia, serif;
`
export default PriceText
