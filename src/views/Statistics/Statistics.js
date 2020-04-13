import React, { useState } from 'react'
import FooterComponent from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SelectCountry from '../../components/selectCountry/SelectCountry'
import TableCountries from '../../components/tableCountries/TableCountries'
import Stats from '../../components/Stats/Stats'
import TableComponent from '../../components/tableCountryHistory/TableCountryHistory'
import ToggleTheme from '../../components/toggleTheme/ToggleTheme'

const Statistics = () => {
  const [country, setCountry] = useState('all')

  const handleCountryChange = (prop = 'all') => {
    setCountry(prop)
  }
  return (
    <>
      <Header handleCountryChange={handleCountryChange}>
        <ToggleTheme />
      </Header>
      <SelectCountry
        handleCountryChange={handleCountryChange}
        selectCountry={country}
      />
      <Stats localisation={country} />
      {country === 'all' ? (
        <TableCountries handleCountryChange={handleCountryChange} />
      ) : (
        <TableComponent localisation={country} />
      )}

      <FooterComponent />
    </>
  )
}

export default Statistics
