import React from 'react'
import { ThemeProvider } from 'styled-components/native'

const CustomThemeProvider = ({ children }) => {

  const theme = {
    colors: {
      
      primary: '#0049ff',
      secondary: '#1b3064',

      background: '#fff',
      text: '#000',
      
      error: '#ff3f2f',
      warning: '#fffac7',
      success: '#00d992',

      blue: {
        100: '#eef5ff',
        200: '#e0edff',
        300: '#1479FF',
        500: '#003ed8',
        400: '#006af7',
        600: '#152650',
        700: '#0041e5',
      },
    
      gray: {
        100: '#a6a6be',
        200: '#555555',
        300: '#dddddd',
      },
    },
  };

  return (
    <ThemeProvider theme={theme}>
      { children}
    </ThemeProvider>
  )
}

export default CustomThemeProvider
