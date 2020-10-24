import styled from "styled-components"

export const ProductCard = styled.div`
  background: ${props => props.theme.colors.light};
  border: 1px solid #f2f2f2;
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.17);
  }
`
export const ProductCardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 40px;
  grid-gap: 15px;
`
