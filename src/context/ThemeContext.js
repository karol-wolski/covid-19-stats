import React, { useState, useEffect, createContext } from 'react'
import { ThemeProvider } from 'styled-components'
import LightTheme from '../themes/LightTheme'
import DarkTheme from '../themes/DarkTheme'
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../helpers/LocalStorage'

const Context = createContext()

const themes = {
  dark: {
    mode: 'dark',
    pallete: DarkTheme,
  },
  light: {
    mode: 'light',
    pallete: LightTheme,
  },
}

const ThemeProviderWrapper = ({ children }) => {
  const localStorage = getFromLocalStorage('theme')
  const [theme, setTheme] = useState({
    mode: localStorage ? themes[localStorage].mode : themes.dark.mode,
    pallete: localStorage ? themes[localStorage].pallete : themes.dark.pallete,
    switchTo: param => setTheme({ ...theme, ...themes[param] }),
  })

  useEffect(() => {
    saveToLocalStorage('theme', theme.mode)
  }, [theme])

  const { pallete } = theme

  return (
    <Context.Provider value={theme}>
      <ThemeProvider theme={pallete}>{children}</ThemeProvider>
    </Context.Provider>
  )
}

export { ThemeProviderWrapper, Context as ThemeContext }
