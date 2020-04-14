import React, { useState, createContext, useEffect } from 'react'
import { IntlProvider } from 'react-intl'
import localesEn from '../locales/en.json'
import localesPl from '../locales/pl.json'
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from '../helpers/LocalStorage'

const Context = createContext()

const locales = {
  en: {
    locale: 'en',
    messages: localesEn,
  },
  pl: {
    locale: 'pl',
    messages: localesPl,
  },
}
const language = window.navigator.language || 'en'
const [languageWithoutRegionCode] = language.toLowerCase().split('-')

const IntlProviderWrapper = ({ children }) => {
  const localStorage = getFromLocalStorage('lang')
  const [state, setState] = useState({
    locale: localStorage
      ? locales[localStorage].locale
      : languageWithoutRegionCode,
    messages: localStorage
      ? locales[localStorage].messages
      : locales[languageWithoutRegionCode].messages,
    switchTo: param => setState({ ...state, ...locales[param] }),
  })

  useEffect(() => {
    saveToLocalStorage('lang', state.locale)
  }, [state])

  const { locale, messages } = state
  return (
    <Context.Provider value={state}>
      <IntlProvider locale={locale} messages={messages} defaultLocale="en">
        {children}
      </IntlProvider>
    </Context.Provider>
  )
}

export { IntlProviderWrapper, Context as IntlContext }
