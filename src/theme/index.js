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
  fonts: ["sans-serif"],
  fontSizes: {
    xsmall: "12px",
    small: "14px",
    medium: "16px",
    large: "20px",
    xlarge: "24px",
  },
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
export { theme }
