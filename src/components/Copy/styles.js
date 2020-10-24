import styled from "styled-components"
import "typeface-work-sans"

export const Text = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  font-family: "Work Sans", sans-serif;
`
