import styled from "styled-components"

export const Container = styled.div`
  max-height: 100%;
  max-width: ${props => props.theme.image[props.maxWidth]};
  min-width: ${props => props.theme.image[props.minWidth]};
  border-radius: ${props => props.theme.image[props.borderRad]};
  background: ${props => props.theme.colors.secondary};
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(90, 90, 90, 0.1)
  );
  display: flex;
  position: relative;
`
export const Styled = styled.div`
  display: block;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  position: absolute;
`

export const StyledTwo = styled.div`
  display: block;
  top: 47%;
  left: 53%;
  transform: translate(-53%, -47%);
  position: absolute;
`
