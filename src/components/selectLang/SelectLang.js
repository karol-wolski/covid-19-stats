import React, { useState } from 'react'
import { IntlContext } from '../../context/LangContext'
import { Select, Option } from './SelectLang.style'

const LanguageSwitch = () => {
  const { switchTo, locale } = React.useContext(IntlContext)
  const [selectedLanguage, setSelectedLanguage] = useState(locale)

  const changeLanguage = param => {
    setSelectedLanguage(param)
    switchTo(param)
  }

  return (
    <>
      <Select
        id="selectLang"
        defaultValue={selectedLanguage}
        onInput={event => changeLanguage(event.target.value)}>
        <Option value="en">English</Option>
        <Option value="pl">Polish</Option>
      </Select>
    </>
  )
}

export default LanguageSwitch
