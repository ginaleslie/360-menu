import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  name: "default",
  colors: {
    primary: "#E54A2D",
    secondary: "#222222",
    secondaryHover: "#000000",
    white: "#FFFFFF",
    grayOne: "#4F4F4F",
    grayTwo: "#828282",
    grayThree: "#BDBDBD",
  },
  fontSizes: {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "20px",
    xlarge: "24px",
  },
  padding: {
    xsmall: "7px",
    small: "12px",
    medium: "20px",
    large: "30px",
    xlarge: "40px",
  },
  image: {
    widthFood: "105px",
    borderFood: "5px 0 0 5px",
    widthDrink: "178px",
    borderDrink: "5px 5px 0 0",
    widthCart: "390px",
    minCart: "150px",
    borderCart: "0 0 0 50px",
    heightCart: "200px",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
export { theme }
