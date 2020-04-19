import React, { useEffect, useState } from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { Table, Tbody, Td, Th } from './statisticsTable.style'
import replace from '../../helpers/replace'

const StatisticsTable = ({ handleCountryChange, name, dataArray }) => {
  const [data, setData] = useState([])
  const [orderCases, setOrderCases] = useState(false)
  const [orderDeaths, setOrderDeaths] = useState(false)
  const [orderRecovered, setOrderRecovered] = useState(false)

  useEffect(() => {
    setData(dataArray)
  }, [dataArray])

  const sortTable = (what, order) => {
    const temps = data
    if (what === 'cases') {
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
    <Table>
      <thead>
        <tr>
          <Th>
            <FormattedMessage id={name} defaultMessage={name} />
          </Th>
          <Th onClick={() => sortTable('cases', orderCases)} isEvent>
            <FormattedMessage id="cases" defaultMessage="Cases" />
          </Th>
          <Th onClick={() => sortTable('recovered', orderRecovered)} isEvent>
            <FormattedMessage id="recovered" defaultMessage="Recovered" />
          </Th>
          <Th onClick={() => sortTable('deaths', orderDeaths)} isEvent>
            <FormattedMessage id="deaths" defaultMessage="Deaths" />
          </Th>
        </tr>
      </thead>
      <Tbody>
        {data.map(({ country, cases, deaths }) => (
          <tr key={country}>
            <Td
              pointer
              role="gridcell"
              onClick={() => handleCountryChange(country)}
              onKeyPress={() => handleCountryChange(country)}>
              <FormattedMessage id={country} defaultMessage={country}>
                {txt => replace(txt, '-', ' ', true)}
              </FormattedMessage>
            </Td>
            <Td>
              <FormattedNumber value={cases.total} />
            </Td>
            <Td>
              <FormattedNumber value={cases.recovered} />
            </Td>
            <Td>
              <FormattedNumber value={deaths.total} />
            </Td>
          </tr>
        ))}
      </Tbody>
    </Table>
  )
}

export default StatisticsTable
