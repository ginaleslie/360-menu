import styled from "styled-components"

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: ${props => props.theme.image[props.maxHeight]};
  border-radius: ${props => props.theme.image[props.borderRad]};
  object-fit: cover;
`
export const Container = styled.div`
  max-height: 100%;
  max-width: ${props => props.theme.image[props.maxWidth]};
  min-width: ${props => props.theme.image[props.minWidth]};
`
