<<<<<<< Updated upstream

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}
=======
import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
// import { theme } from "../src/theme"
import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  Story => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
]
>>>>>>> Stashed changes
