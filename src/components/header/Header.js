import React from 'react'
import { Link } from 'react-router-dom'
import Header from './Header.style'

const HeaderComponent = ({ children, handleCountryChange }) => {
  return (
    <Header>
      <h1>
        <Link to="/" onClick={() => handleCountryChange('all')}>
          Covid-19 Statistics
        </Link>
      </h1>
      {children}
    </Header>
  )
}

export default HeaderComponent
