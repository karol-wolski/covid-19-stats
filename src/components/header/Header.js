import React from 'react'
import Header from './Header.style'

const HeaderComponent = ({ children }) => {
  return (
    <Header>
      <h1>Covid-19 Statistics</h1>
      {children}
    </Header>
  )
}

export default HeaderComponent
