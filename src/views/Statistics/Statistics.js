import React, { useState } from 'react'
import FooterComponent from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SelectCountry from '../../components/selectCountry/SelectCountry'
import TableCountries from '../../components/tableCountries/TableCountries'
import Stats from '../../components/Stats/Stats'

const Statistics = () => {
  const [country, setCountry] = useState('all')

  const handleCountryChange = (prop = 'all') => {
    setCountry(prop)
  }
  return (
    <>
      <Header handleCountryChange={handleCountryChange} />
      <SelectCountry
        handleCountryChange={handleCountryChange}
        selectCountry={country}
      />
      <Stats localisation={country} />
      {country === 'all' && (
        <TableCountries handleCountryChange={handleCountryChange} />
      )}
      <FooterComponent />
    </>
  )
}

export default Statistics
