import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
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
        <FormattedMessage id="selectCountry" defaultMessage="Select Country">
          {txt => (
            <option key="select" value="all">
              {txt}
            </option>
          )}
        </FormattedMessage>
        {countries.response &&
          countries.response.map(
            country =>
              country !== 'all' && (
                <FormattedMessage
                  id={country}
                  defaultMessage={country}
                  key={country}>
                  {msg => (
                    <option value={country}>
                      {replace(msg, '-', ' ', true)}
                    </option>
                  )}
                </FormattedMessage>
              )
          )}
      </Select>
      {errors && (
        <Error>
          <FormattedMessage
            id="errorServer"
            defaultMessage="An error has occurred from the server, please come back later."
          />
        </Error>
      )}
    </div>
  )
}

export default SelectCountry
