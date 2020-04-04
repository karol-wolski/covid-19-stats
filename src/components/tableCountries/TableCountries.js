import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody, Td, Container } from './TableCountries.style'
import Request from '../../helpers/RequestCovidApi'
import replace from '../../helpers/replace'
import LoaderComponent from '../Loader/Loader'

const TableComponent = ({ handleCountryChange }) => {
  const [response, setResponse] = useState([])
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await Request(`/statistics`)
        const json = await res.json()
        setResponse(json.response)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUrl()
  }, [])

  const sortTable = (what, order) => {
    const temps = [...response]
    if (what === 'country') {
      temps.sort((a, b) =>
        order
          ? a.country.charCodeAt(0) - b.country.charCodeAt(0)
          : b.country.charCodeAt(0) - a.country.charCodeAt(0)
      )
      setOrderCountry(!order)
    } else if (what === 'cases') {
      temps.sort((a, b) =>
        order ? a.cases.total - b.cases.total : b.cases.total - a.cases.total
      )
      setOrderCases(!order)
    } else if (what === 'recovered') {
      temps.sort((a, b) =>
        order ? a.cases.total - b.cases.total : b.cases.total - a.cases.total
      )
      setOrderRecovered(!order)
    } else if (what === 'deaths') {
      temps.sort((a, b) =>
        order
          ? a.deaths.total - b.deaths.total
          : b.deaths.total - a.deaths.total
      )
      setOrderDeaths(!order)
    }
    setResponse(temps)
  }

  return (
    <Container>
      {loading && <LoaderComponent />}
      <Table>
        <Thead>
          <tr>
            <th onClick={() => sortTable('country', orderCountry)}>Country</th>
            <th onClick={() => sortTable('cases', orderCases)}>Cases</th>
            <th onClick={() => sortTable('recovered', orderRecovered)}>
              Recovered
            </th>
            <th onClick={() => sortTable('deaths', orderDeaths)}>Deaths</th>
          </tr>
        </Thead>
        <Tbody>
          {response &&
            response.map(
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
    </Container>
  )
}

export default TableComponent
