import styled from "styled-components"
import "typeface-work-sans"

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  padding-bottom: ${props => props.theme.padding[props.padding]};
  font-family: "Work Sans", sans serif;
  text-transform: uppercase;
  letter-spacing: 1px;
`
