import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { Toggle, Label } from './ToggleTheme.style'

const ToggleTheme = () => {
  const { switchTo, mode } = useContext(ThemeContext)
  const statement = mode === 'dark' ? 'light' : 'dark'
  return (
    <>
      <Label htmlFor="themeToggle">Set theme</Label>
      <Toggle
        id="themeToggle"
        active={mode}
        onClick={() => switchTo(statement)}
      />
    </>
  )
}

export default ToggleTheme
