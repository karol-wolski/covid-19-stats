import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from '../../themes/GlobalStyle'
import Statistics from '../Statistics/Statistics'
import { ThemeProviderWrapper } from '../../context/ThemeContext'

const Root = () => {
  return (
    <ThemeProviderWrapper>
      <GlobalStyle />
      <BrowserRouter basename="covid-19-stats">
        <Route path="/" component={Statistics} exact />
      </BrowserRouter>
    </ThemeProviderWrapper>
  )
}

export default Root
