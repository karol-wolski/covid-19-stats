import React, { useEffect, useState } from 'react'
import {
  Table,
  Thead,
  Tbody,
  Container,
  Wrapper,
} from './TableCountryHistory.style'
import Request from '../../helpers/RequestCovidApi'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'
import { DayBack } from '../../helpers/DateTime'

const TableComponent = ({ localisation }) => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState()
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)
  useEffect(() => {
    fetchData(`/history?country=${localisation}`, Request, setData, setErrors)
  }, [localisation])

  const sortTable = (what, order) => {
    const temps = [...data]
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
    setData(temps)
  }

  return (
    <Wrapper>
      <h3>Last 10 days</h3>
      <Container>
        {errors && (
          <Error>
            An error has occurred from the server, please come back later.
          </Error>
        )}
        {data.response && (
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
              {data.response
                .reverse()
                .filter(
                  (res, index, self) =>
                    index === self.findIndex(s => s.day === res.day)
                )
                .reverse()
                .filter((i, index) => index < 10)
                .map(({ time, cases, deaths }) => (
                  <tr key={time}>
                    <td>{DayBack(time, 1)}</td>
                    <td>{cases.total}</td>
                    <td>{cases.recovered}</td>
                    <td>{deaths.total}</td>
                  </tr>
                ))}
            </Tbody>
          </Table>
        )}
      </Container>
    </Wrapper>
  )
}

export default TableComponent
