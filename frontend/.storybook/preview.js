import React from 'react'
import { ThemeProvider } from '@mui/material'
import { theme } from '../src/config/Theme'
import Toast from '../src/components/shared/Toast/Toast'
import { HashRouter as Router, Routes } from 'react-router-dom'
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  mockAddonConfigs: {
    globalMockData: [
      // {
      //   // An array of mock objects which will add in every story
      //   url: 'http://localhost:0000',
      //   method: 'PUT',
      //   status: 201,
      //   response: {},
      // }
    ],
    refreshStoryOnUpdate: true, // This re-render the story if there's any data changes
    // disable: true, // This disables the panel from all the stories
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Toast >
      <Router>
        
          {Story()}
        
      </Router>
      </Toast>
    </ThemeProvider>
  )
]