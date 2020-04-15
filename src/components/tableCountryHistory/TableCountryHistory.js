import React, { useEffect, useState } from 'react'
import { FormattedMessage, FormattedNumber, FormattedDate } from 'react-intl'
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
  const [response, setResponse] = useState([])
  const [data, setData] = useState([])
  const [errors, setErrors] = useState()
  const [orderCountry, setOrderCountry] = useState(false)
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)
  const numOfRecords = 11
  const numOfRecordsToShow = 10

  useEffect(() => {
    fetchData(
      `/history?country=${localisation}`,
      Request,
      setResponse,
      setErrors
    )
  }, [localisation])

  useEffect(() => {
    if (typeof response.response !== 'undefined') {
      const getFirstObjectWithEveryDay = response.response
        .reverse()
        .filter(
          (res, index, self) => index === self.findIndex(s => s.day === res.day)
        )
        .reverse()

      const sliceElementsWithArray = getFirstObjectWithEveryDay.slice(
        0,
        numOfRecords
      )
      const addFieldNewRecoveredToObject = sliceElementsWithArray
      addFieldNewRecoveredToObject.reverse().map(({ cases }, index, arr) => {
        if (index > 0)
          addFieldNewRecoveredToObject[index].cases.recovered_new =
            cases.recovered - arr[index - 1].cases.recovered
        return addFieldNewRecoveredToObject
      })

      const reverseArray = addFieldNewRecoveredToObject.reverse()

      const sliceElementToShow = reverseArray.slice(0, numOfRecordsToShow)
      setData(sliceElementToShow)
    }
  }, [response])

  const sortTable = (what, order) => {
    const temps = data
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
        order
          ? a.cases.recovered - b.cases.recovered
          : b.cases.recovered - a.cases.recovered
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
      <h3>
        <FormattedMessage
          id="lastDays"
          defaultMessage="Last {number} days"
          values={{
            number: '10',
          }}
        />
      </h3>
      <Container>
        {errors && (
          <Error>
            <FormattedMessage
              id="errorServer"
              defaultMessage="An error has occurred from the server, please come back later."
            />
          </Error>
        )}
        {response.response && (
          <Table>
            <Thead>
              <tr>
                <th onClick={() => sortTable('date', orderCountry)}>
                  <FormattedMessage id="date" defaultMessage="Date" />
                </th>
                <th onClick={() => sortTable('cases', orderCases)}>
                  <FormattedMessage
                    id="casesNew"
                    defaultMessage="Cases (New)"
                  />
                </th>
                <th onClick={() => sortTable('recovered', orderRecovered)}>
                  <FormattedMessage
                    id="recoveredNew"
                    defaultMessage="Recovered (New)"
                  />
                </th>
                <th onClick={() => sortTable('deaths', orderDeaths)}>
                  <FormattedMessage
                    id="deathsNew"
                    defaultMessage="Deaths (New)"
                  />
                </th>
              </tr>
            </Thead>
            <Tbody>
              {data.map(({ time, cases, deaths }) => (
                <tr key={time}>
                  <td>
                    <FormattedDate value={DayBack(time, 1)} />
                  </td>
                  <td>
                    <FormattedNumber value={cases.total} />
                    {cases.new !== null && (
                      <span>
                        {' '}
                        (<FormattedNumber value={cases.new} />)
                      </span>
                    )}
                  </td>
                  <td>
                    <FormattedNumber value={cases.recovered} />
                    {cases.recovered_new !== 0 && (
                      <span>
                        {' '}
                        (<FormattedNumber value={cases.recovered_new} />)
                      </span>
                    )}
                  </td>
                  <td>
                    <FormattedNumber value={deaths.total} />
                    {deaths.new !== null && (
                      <span>
                        {' '}
                        (<FormattedNumber value={deaths.new} />)
                      </span>
                    )}
                  </td>
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
