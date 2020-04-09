import React, { useEffect, useState } from 'react'
import { Container, CasesGroup, Headline, LastUpdate } from './Stats.style'
import Tile from '../tile/Tile'
import Request from '../../helpers/RequestCovidApi'
import { DateTime } from '../../helpers/DateTime'
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
          An error has occurred from the server, please come back later.
        </Error>
      )}
      {data.response &&
        data.response.map(({ country, cases, deaths, time }) => (
          <Container key={country}>
            <Headline>
              {country === 'All'
                ? 'World stats'
                : `Stats for ${replace(country, '-', ' ', true)}`}
            </Headline>
            <LastUpdate>Last update: {DateTime(time)}</LastUpdate>
            <CasesGroup row="3">
              <Tile value="Today" rowAll />
              <Tile title="Detected" value={setCorrectValue(cases.new)} />
              <Tile
                type="danger"
                title="Deaths"
                value={setCorrectValue(deaths.new)}
              />
            </CasesGroup>
            <CasesGroup row="3" border>
              <Tile value="Total" rowAll />
              <Tile title="Detected" value={cases.total} />
              <Tile type="danger" title="Deaths" value={deaths.total} />
            </CasesGroup>
            <CasesGroup row="3">
              <Tile value="Cases" rowAll />
              <Tile title="Active" value={cases.active} />
              <Tile type="success" title="Recovered" value={cases.recovered} />
            </CasesGroup>
          </Container>
        ))}
    </>
  )
}

export default GlobalStats
