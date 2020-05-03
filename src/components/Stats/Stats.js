import React, { useEffect, useState } from 'react'
import { FormattedMessage, FormattedTime } from 'react-intl'
import { Container, CasesGroup, Headline, LastUpdate } from './Stats.style'
import Tile from '../tile/Tile'
import Request from '../../helpers/RequestCovidApi'
import replace from '../../helpers/replace'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'

const GlobalStats = ({ localisation }) => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState()

  useEffect(() => {
    fetchData(
      `/statistics?country=${localisation}`,
      Request,
      setData,
      setErrors
    )
  }, [localisation])

  const setCorrectValue = param =>
    param !== null ? param.replace(/[^a-zA-Z0-9 ]/g, '') : 0

  return (
    <>
      {errors && (
        <Error>
          <FormattedMessage
            id="errorServer"
            defaultMessage="An error has occurred from the server, please come back later."
          />
        </Error>
      )}
      {data.response &&
        data.response.map(({ country, cases, deaths, time, tests }) => (
          <Container key={country}>
            <Headline>
              {country === 'All' ? (
                <FormattedMessage
                  id="worldStats"
                  defaultMessage="World Stats"
                />
              ) : (
                <>
                  <FormattedMessage id={country} defaultMessage={country}>
                    {txt => `${replace(txt, '-', ' ', true)}`}
                  </FormattedMessage>
                </>
              )}
            </Headline>
            <LastUpdate>
              <FormattedMessage id="lastUpdate" defaultMessage="Last update" />{' '}
              <FormattedTime value={new Date(time)} />
            </LastUpdate>
            <CasesGroup row="3" border>
              <Tile title="today" large rowAll />
              <Tile title="detected" value={setCorrectValue(cases.new)} />
              <Tile
                type="danger"
                title="deaths"
                value={setCorrectValue(deaths.new)}
              />
            </CasesGroup>
            <CasesGroup row="3" border>
              <Tile title="total" large rowAll />
              <Tile title="detected" value={cases.total} />
              <Tile type="danger" title="deaths" value={deaths.total} />
            </CasesGroup>
            <CasesGroup row="3" border={tests.total > 0}>
              <Tile title="cases" large rowAll />
              <Tile title="active" value={cases.active} />
              <Tile type="success" title="recovered" value={cases.recovered} />
            </CasesGroup>
            {tests.total > 0 && (
              <CasesGroup row="3">
                <Tile title="tests" large rowAll />
                <Tile title="total" value={tests.total} />
              </CasesGroup>
            )}
          </Container>
        ))}
    </>
  )
}

export default GlobalStats
