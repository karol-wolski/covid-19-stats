import React, { useContext } from 'react'
import { FormattedMessage } from 'react-intl'
import { ThemeContext } from '../../context/ThemeContext'
import { Toggle, Label } from './ToggleTheme.style'

const ToggleTheme = () => {
  const { switchTo, mode } = useContext(ThemeContext)
  const statement = mode === 'dark' ? 'light' : 'dark'
  return (
    <>
      <Label htmlFor="themeToggle">
        <FormattedMessage id="chooseTheme" defaultMessage="Choose theme" />
      </Label>
      <Toggle
        id="themeToggle"
        active={mode}
        onClick={() => switchTo(statement)}
      />
    </>
  )
}

export default ToggleTheme
