import React from "react"
import { ThemeProvider } from "styled-components"

const theme = {
  name: "default",
  colors: {
    primary: "#E54A2D",
    light: "#FFFFFF",
    dark: "#222222",
    darkHover: "#000000",
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
