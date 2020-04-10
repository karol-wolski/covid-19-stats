import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Td, Container } from './TableCountries.style'
import Request from '../../helpers/RequestCovidApi'
import replace from '../../helpers/replace'
import LoaderComponent from '../Loader/Loader'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'

const TableComponent = ({ handleCountryChange }) => {
  const [data, setData] = useState([])
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)
  const [loading, setLoading] = useState(true)
  const [errors, setErrors] = useState(false)
  useEffect(() => {
    fetchData('/statistics', Request, setData, setErrors, setLoading)
  }, [])

  const sortTable = (what, order) => {
    const temps = data
    if (what === 'country') {
      temps.response.sort((a, b) =>
        order
          ? a.country.charCodeAt(0) - b.country.charCodeAt(0)
          : b.country.charCodeAt(0) - a.country.charCodeAt(0)
      )
      setOrderCountry(!order)
    } else if (what === 'cases') {
      temps.response.sort((a, b) =>
        order ? a.cases.total - b.cases.total : b.cases.total - a.cases.total
      )
      setOrderCases(!order)
    } else if (what === 'recovered') {
      temps.response.sort((a, b) =>
        order ? a.cases.total - b.cases.total : b.cases.total - a.cases.total
      )
      setOrderRecovered(!order)
    } else if (what === 'deaths') {
      temps.response.sort((a, b) =>
        order
          ? a.deaths.total - b.deaths.total
          : b.deaths.total - a.deaths.total
      )
      setOrderDeaths(!order)
    }
    setData(temps)
  }

  return (
    <Container>
      {loading && <LoaderComponent />}
      {errors && (
        <Error>
          An error has occurred from the server, please come back later.
        </Error>
      )}
      {data.response && (
        <Table>
          <Thead>
            <tr>
              <th onClick={() => sortTable('country', orderCountry)}>
                Country
              </th>
              <th onClick={() => sortTable('cases', orderCases)}>Cases</th>
              <th onClick={() => sortTable('recovered', orderRecovered)}>
                Recovered
              </th>
              <th onClick={() => sortTable('deaths', orderDeaths)}>Deaths</th>
            </tr>
          </Thead>
          <Tbody>
            {data.response.map(
              ({ country, cases, deaths }) =>
                country !== 'All' && (
                  <tr key={country}>
                    <Td
                      pointer
                      role="gridcell"
                      onClick={() => handleCountryChange(country)}
                      onKeyPress={() => handleCountryChange(country)}>
                      {replace(country, '-', ' ', true)}
                    </Td>
                    <Td>{cases.total}</Td>
                    <Td>{cases.recovered}</Td>
                    <Td>{deaths.total}</Td>
                  </tr>
                )
            )}
          </Tbody>
        </Table>
      )}
    </Container>
  )
}

export default TableComponent
