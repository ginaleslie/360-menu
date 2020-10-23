import { addDecorator } from "@storybook/react"
import { withThemesProvider } from "storybook-addon-styled-component-theme"
import { theme } from "../src/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

// const themes = [theme1, theme2];
addDecorator(withThemesProvider([theme]))
