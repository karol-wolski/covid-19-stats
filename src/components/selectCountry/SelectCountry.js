import React, { useEffect, useState } from 'react'
import Select from './SelectCountry.style'
import Request from '../../helpers/RequestCovidApi'
import replace from '../../helpers/replace'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'

const SelectCountry = props => {
  const { handleCountryChange, selectCountry } = props
  const [countries, setCountries] = useState([])
  const [errors, setErrors] = useState(false)
  const [selectedCountry, setSelectedCountry] = useState()

  useEffect(() => {
    fetchData('/countries', Request, setCountries, setErrors)
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
        <option key="select" value="all">
          Select Country
        </option>
        {countries.response &&
          countries.response.map(
            country =>
              country !== 'all' && (
                <option key={country} value={country}>
                  {replace(country, '-', ' ', true)}
                </option>
              )
          )}
      </Select>
      {errors && (
        <Error>
          An error has occurred from the server, please come back later.
        </Error>
      )}
    </div>
  )
}

export default SelectCountry
