import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import LoaderComponent from '../Loader/Loader'
import Request from '../../helpers/RequestCovidApi'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'
import { CONTINENTS, ENDPOINT_STATISTICS } from '../../constants/constants'
import StatisticsTable from '../statisticsTable/statisticsTable'
import {
  Container,
  NavTabs,
  Option,
  Tabs,
  Tab,
} from './ToggleableCountriesContinentsStats.style'

const CountriesContinentsStats = ({ handleCountryChange }) => {
  const [resp, setResp] = useState([])
  const [countries, setCountries] = useState([])
  const [continents, setContinents] = useState([])
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  const [isActive, setIsActive] = useState(true)

  useEffect(() => {
    fetchData(ENDPOINT_STATISTICS, Request, setResp, setErrors, setLoading)
  }, [])

  useEffect(() => {
    const tempCountries = []
    const tempContinents = []
    if (typeof resp.response !== 'undefined') {
      const data = resp.response
      data
        .filter(el => el.country !== 'All')
        .map(el =>
          CONTINENTS.includes(el.country)
            ? tempContinents.push(el)
            : tempCountries.push(el)
        )
    }
    setContinents(tempContinents)
    setCountries(tempCountries)
  }, [resp])

  return (
    <Container>
      <NavTabs>
        <Option isActive={isActive} onClick={() => setIsActive(!isActive)}>
          <FormattedMessage id="countries" defaultMessage="Countries" />
        </Option>
        <Option isActive={!isActive} onClick={() => setIsActive(!isActive)}>
          <FormattedMessage id="continents" defaultMessage="Continents" />
        </Option>
      </NavTabs>
      <Tabs>
        {loading && <LoaderComponent />}
        {errors ? (
          <Error>
            <FormattedMessage
              id="errorServer"
              defaultMessage="An error has occurred from the server, please come back later."
            />
          </Error>
        ) : (
          <>
            <Tab isActive={isActive}>
              <StatisticsTable
                handleCountryChange={handleCountryChange}
                dataArray={countries}
                name="country"
              />
            </Tab>
            <Tab isActive={!isActive}>
              <StatisticsTable
                handleCountryChange={handleCountryChange}
                dataArray={continents}
                name="continent"
              />
            </Tab>
          </>
        )}
      </Tabs>
    </Container>
  )
}

export default CountriesContinentsStats
