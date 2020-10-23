import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 1rem;
  margin: 0;
  text-decoration: none;
  //background: ${props => props.theme.colors[props.bg]};
  background-color: ${props => props.theme.colors[props.bg]};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors.darkHover};
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`
export const Center = styled.div`
  display: inline-flex;
`
export const Text = styled.p`
  color: ${props => props.theme.colors[props.color]};
  font-size: ${props => props.theme.fontSizes.xsmall};
  line-height: ${props => props.theme.fontSizes.xlarge};
`
