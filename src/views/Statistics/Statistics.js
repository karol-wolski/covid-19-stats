import React, { useState } from 'react'
import FooterComponent from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import SelectCountry from '../../components/selectCountry/SelectCountry'
import Stats from '../../components/Stats/Stats'
import TableComponent from '../../components/tableCountryHistory/TableCountryHistory'
import Navigation from '../../components/navigation/Navigation'
import ToggleableCountriesContinentsStats from '../../components/toggleableCountriesContinentsStats/ToggleableCountriesContinentsStats'
import HistoricalDataCharts from '../../components/historicalDataCharts/HistoricalDataCharts'

const Statistics = () => {
  const [country, setCountry] = useState('all')

  const handleCountryChange = (prop = 'all') => {
    setCountry(prop)
  }
  return (
    <>
      <Header handleCountryChange={handleCountryChange}>
        <Navigation />
      </Header>
      <SelectCountry
        handleCountryChange={handleCountryChange}
        selectCountry={country}
      />
      <Stats localisation={country} />
      {country === 'all' ? (
        <ToggleableCountriesContinentsStats
          handleCountryChange={handleCountryChange}
        />
      ) : (
        <>
          <TableComponent localisation={country} />
          <HistoricalDataCharts localisation={country} />
        </>
      )}

      <FooterComponent />
    </>
  )
}

export default Statistics
