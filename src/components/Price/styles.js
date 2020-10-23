import styled from "styled-components"

const PriceText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
`
export default PriceText
