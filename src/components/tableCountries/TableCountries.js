import React, { useEffect, useState } from 'react'
import { Table, Thead, Tbody } from './TableCountries.style'
import Request from '../../helpers/RequestCovidApi'

const TableComponent = () => {
  const [response, setResponse] = useState([])
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await Request(`/statistics`)
        const json = await res.json()
        setResponse(json.response)
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
    <Table>
      <Thead>
        <tr>
          <th onClick={() => sortTable('country', orderCountry)}>Country</th>
          <th onClick={() => sortTable('cases', orderCases)}>Cases</th>
          <th onClick={() => sortTable('deaths', orderDeaths)}>Deaths</th>
        </tr>
      </Thead>
      <Tbody>
        {response &&
          response.map(
            ({ country, cases, deaths }) =>
              country !== 'All' && (
                <tr key={country}>
                  <td>{country}</td>
                  <td>{cases.total}</td>
                  <td>{deaths.total}</td>
                </tr>
              )
          )}
      </Tbody>
    </Table>
  )
}

export default TableComponent
