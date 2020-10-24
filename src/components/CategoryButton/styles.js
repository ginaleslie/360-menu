import styled from "styled-components"

export const Button = styled.button`
  width: 100%;
  max-width: 100px;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 15px;
  margin: 0;
  text-decoration: none;
  background-color: ${props => props.theme.colors[props.bg]};
  cursor: pointer;
  text-align: center;
  transition: background 250ms ease-in-out, transform 150ms ease;
  -webkit-appearance: none;
  -moz-appearance: none;

  &:hover,
  &:focus {
    background: ${props => props.theme.colors[props.bgHover]};
  }

  &:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }

  &:active {
    transform: scale(0.99);
  }
`
export const Styled = styled.div`
  display: inline-flex;
`
