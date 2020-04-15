import React, { useEffect, useState } from 'react'
import { FormattedMessage } from 'react-intl'
import ChartLine from '../chartLine/ChartLine'
import Request from '../../helpers/RequestCovidApi'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'
import { LI, UL } from './HistoricalDataCharts.style'
import SetDayBackInArrayObjects from '../../helpers/SetDayBackInArrayObjects'

const filterCaseArray = [
  {
    id: 'casesRecovered',
    name: 'recovered',
    dataKey: 'cases.recovered',
    color: 'green',
    isVisible: true,
  },
  {
    id: 'deathsTotal',
    name: 'deaths',
    dataKey: 'deaths.total',
    color: 'red',
    isVisible: true,
  },
  {
    id: 'casesTotal',
    name: 'cases',
    dataKey: 'cases.total',
    color: 'blue',
    isVisible: true,
  },
  {
    id: 'casesActive',
    name: 'active',
    dataKey: 'cases.active',
    color: 'grey',
    isVisible: true,
  },
]

const HistoricalDataCharts = ({ localisation }) => {
  const [data, setData] = useState([])
  const [test, setTest] = useState([])
  const [errors, setErrors] = useState()
  const [filter, setFilter] = useState(filterCaseArray)
  const [isChecked, setIsChecked] = useState({
    casesTotal: true,
    casesRecovered: true,
    casesActive: true,
    deathsTotal: true,
  })

  useEffect(() => {
    fetchData(`/history?country=${localisation}`, Request, setData, setErrors)
  }, [localisation])

  useEffect(() => {
    if (typeof data.response !== 'undefined') {
      const result = data.response

      const getFirstResultOfTheDay = result
        .reverse()
        .filter(
          (res, index, self) => index === self.findIndex(s => s.day === res.day)
        )

      const setDayBack = SetDayBackInArrayObjects(
        getFirstResultOfTheDay,
        'day',
        1
      )
      setTest(setDayBack)
    }
  }, [data])

  const setElementToShow = param => {
    const array = [...filter]
    const objIndex = filter.findIndex(({ id }) => id === param)
    array[objIndex] = {
      ...array[objIndex],
      isVisible: !array[objIndex].isVisible,
    }
    setFilter(array)
  }

  const setCheckedInput = param => {
    setIsChecked({
      ...isChecked,
      [param.target.name]: param.target.checked,
    })
  }

  const handleOnChange = e => {
    setCheckedInput(e)
    setElementToShow(e.target.name)
  }

  return (
    <div>
      <div>
        <span>Filters:</span>
        <UL>
          <LI>
            <label htmlFor="casesTotal">
              <input
                checked={isChecked.casesTotal}
                onChange={e => handleOnChange(e)}
                id="casesTotal"
                name="casesTotal"
                type="checkbox"
              />
              Total cases
            </label>
          </LI>
          <LI>
            <label htmlFor="casesActive">
              <input
                checked={isChecked.casesActive}
                onChange={e => handleOnChange(e)}
                id="casesActive"
                name="casesActive"
                type="checkbox"
              />
              Active cases
            </label>
          </LI>
          <LI>
            <label htmlFor="casesRecovered">
              <input
                checked={isChecked.casesRecovered}
                onChange={e => handleOnChange(e)}
                id="casesRecovered"
                name="casesRecovered"
                type="checkbox"
              />
              Recovered cases
            </label>
          </LI>
          <LI>
            <label htmlFor="deathsTotal">
              <input
                checked={isChecked.deathsTotal}
                onChange={e => handleOnChange(e)}
                id="deathsTotal"
                name="deathsTotal"
                type="checkbox"
              />
              Total deaths
            </label>
          </LI>
        </UL>
      </div>
      {errors && (
        <Error>
          <FormattedMessage
            id="errorServer"
            defaultMessage="An error has occurred from the server, please come back later."
          />
        </Error>
      )}
      <ChartLine data={test} filter={filter} />
    </div>
  )
}

export default HistoricalDataCharts
