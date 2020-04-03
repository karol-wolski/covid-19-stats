import React, { useEffect, useState } from 'react'
import { Container, CasesGroup, Headline, LastUpdate } from './Stats.style'
import Tile from '../tile/Tile'
import Request from '../../helpers/RequestCovidApi'
import DateTime from '../../helpers/DateTime'

const GlobalStats = ({ localisation }) => {
  const [response, setResponse] = useState([])
  useEffect(() => {
    async function fetchUrl() {
      try {
        const res = await Request(`/statistics?country=${localisation}`)
        const json = await res.json()
        setResponse(json.response)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUrl()
  }, [localisation])

  const setCorrectValue = param =>
    param !== null ? param.replace(/[^a-zA-Z0-9 ]/g, '') : 0

  return (
    <>
      {response &&
        response.map(({ country, cases, deaths, time }) => (
          <Container key={country}>
            <Headline>
              {country === 'All' ? 'World stats' : `Stats for ${country}`}
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
