import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../src/styles/global-style";
import { theme } from "../src/styles/theme";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "Light",
    values: [
      {
        name: 'Light',
        value: theme.colors.light_color
      },
      {
        name: 'DarkBlue',
        value: theme.colors.dark_color
      }
    ]
  },
  layout: 'fullscreen'
}

export const decorators = [
  (Story)=>(
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyle/>
    </ThemeProvider>
  )
]
