import styled from "styled-components"
import "typeface-work-sans"

export const Button = styled.button`
  position: sticky;
  z-index: 60;
  bottom: 0;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  outline: none;
  border: none;
  color: ${props => props.theme.colors.white};
  font-family: "Work Sans", sans-serif;
  text-transform: uppercase;
  font-size: 18px;
  text-align: center;
  padding: 25px 0;
  letter-spacing: 0.1em;
  cursor: pointer;
`
