import React, { useState } from 'react'
import FooterComponent from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SelectCountry from '../../components/selectCountry/SelectCountry'
import TableCountries from '../../components/tableCountries/TableCountries'
import TableComponent from '../../components/tableCountryHistory/TableCountryHistory'
import Stats from '../../components/Stats/Stats'

const Statistics = () => {
  const [country, setCountry] = useState('all')

  const handleCountryChange = (prop = 'all') => {
    setCountry(prop)
  }
  return (
    <>
      <Header />
      <SelectCountry handleCountryChange={handleCountryChange} />
      <Stats localisation={country} />
      {country === 'all' ? (
        <TableCountries />
      ) : (
        <TableComponent localisation={country} />
      )}
      <FooterComponent />
    </>
  )
}

export default Statistics
