import React, { useEffect, useState } from 'react'
import Select from './SelectCountry.style'
import Request from '../../helpers/RequestCovidApi'
import replace from '../../helpers/replace'

const SelectCountry = props => {
  const { handleCountryChange, selectCountry } = props
  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState()
  useEffect(() => {
    async function fetchUrl() {
      try {
        const response = await Request(`/countries`)
        const json = await response.json()
        setCountries(json.response)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUrl()
  }, [])

  useEffect(() => {
    return selectCountry === 'all'
      ? setSelectedCountry('Select country')
      : setSelectedCountry(selectCountry)
  }, [selectCountry])

  return (
    <div>
      <Select
        id="countries"
        onInput={event => handleCountryChange(event.target.value)}
        value={selectedCountry}>
        <option key="select" value="Select-Country">
          Select Country
        </option>
        {countries &&
          countries.map(
            country =>
              country !== 'all' && (
                <option key={country} value={country}>
                  {replace(country, '-', ' ', true)}
                </option>
              )
          )}
      </Select>
    </div>
  )
}

export default SelectCountry
