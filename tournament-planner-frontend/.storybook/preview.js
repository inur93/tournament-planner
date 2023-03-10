
import { muiTheme } from 'storybook-addon-material-ui'
import { theme } from '../src/config/Theme'
export const decorators = [
  muiTheme([theme])
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}