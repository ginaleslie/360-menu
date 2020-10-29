import styled from "styled-components"
import "typeface-lora"

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  padding-bottom: ${props => props.theme.padding[props.padding]};
  font-family: "Lora", Georgia, serif;
`
