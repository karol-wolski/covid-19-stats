import React from 'react'
import ToggleTheme from '../toggleTheme/ToggleTheme'
import LanguageSwitch from '../selectLang/SelectLang'
import Wrapper from './Navigation.style'

const Navigation = () => {
  return (
    <Wrapper>
      <ToggleTheme />
      <LanguageSwitch />
    </Wrapper>
  )
}

export default Navigation
