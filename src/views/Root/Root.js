import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import GlobalStyle from '../../themes/GlobalStyle'
import Statistics from '../Statistics/Statistics'
import { ThemeProviderWrapper } from '../../context/ThemeContext'
import { IntlProviderWrapper } from '../../context/LangContext'

const Root = () => {
  return (
    <IntlProviderWrapper>
      <ThemeProviderWrapper>
        <GlobalStyle />
        <BrowserRouter basename="covid-19-stats">
          <Route path="/" component={Statistics} exact />
        </BrowserRouter>
      </ThemeProviderWrapper>
    </IntlProviderWrapper>
  )
}

export default Root
