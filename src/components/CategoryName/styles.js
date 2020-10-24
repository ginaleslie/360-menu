import styled from "styled-components"
import "typeface-work-sans"

const CategoryNameText = styled.p`
  font-size: ${props => props.theme.fontSizes[props.size]};
  color: ${props => props.theme.colors[props.color]};
  line-height: ${props => props.theme.fontSizes.xlarge};
  margin: 0;
  font-family: "Work Sans", georgia, serif;
`

export default CategoryNameText
