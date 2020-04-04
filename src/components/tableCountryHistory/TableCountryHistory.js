import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Container,
  Wrapper,
} from './TableCountryHistory.style'
import Request from '../../helpers/RequestCovidApi'

const TableComponent = ({ localisation }) => {
  const [response, setResponse] = useState([])
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)
  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await Request(`/history?country=${localisation}`)
        const json = await res.json()
        setResponse(json.response)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUrl()
  }, [localisation])

  const sortTable = (what, order) => {
    const temps = [...response]
    if (what === 'date') {
      temps.sort((a, b) =>
        order
          ? new Date(a.day).getTime() - new Date(b.day).getTime()
          : new Date(b.day).getTime() - new Date(a.day).getTime()
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
    <Wrapper>
      <h3>Last 10 days</h3>
      <Container>
        <Table>
          <Thead>
            <tr>
              <th onClick={() => sortTable('date', orderCountry)}>Date</th>
              <th onClick={() => sortTable('cases', orderCases)}>Cases</th>
              <th onClick={() => sortTable('recovered', orderRecovered)}>
                Recovered
              </th>
              <th onClick={() => sortTable('deaths', orderDeaths)}>Deaths</th>
            </tr>
          </Thead>
          <Tbody>
            {response &&
              response
                .filter(
                  (res, index, self) =>
                    index === self.findIndex(s => s.day === res.day)
                )
                .filter((i, index) => index > 0 && index <= 10)
                .map(({ day, cases, deaths }) => (
                  <tr key={day}>
                    <td>{day}</td>
                    <td>{cases.total}</td>
                    <td>{cases.recovered}</td>
                    <td>{deaths.total}</td>
                  </tr>
                ))}
          </Tbody>
        </Table>
      </Container>
    </Wrapper>
  )
}

export default TableComponent
