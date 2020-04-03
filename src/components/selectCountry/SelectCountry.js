import React, { useEffect, useState } from 'react'
import Select from './SelectCountry.style'
import Request from '../../helpers/RequestCovidApi'

const SelectCountry = props => {
  const { handleCountryChange } = props
  const [countries, setCountries] = useState([])
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

  return (
    <div>
      <Select
        id="countries"
        onInput={event => handleCountryChange(event.target.value)}>
        <option key="all" value="all">
          Global Stats
        </option>
        {countries &&
          countries.map(country => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
      </Select>
    </div>
  )
}

export default SelectCountry
