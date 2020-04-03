import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../../themes/GlobalStyle'
import theme from '../../themes/DarkTheme'
import Statistics from '../Statistics/Statistics'

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <BrowserRouter>
      <Route path="/" component={Statistics} exact />
    </BrowserRouter>
  </ThemeProvider>
)

export default Root
