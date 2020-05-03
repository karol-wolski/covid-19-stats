import React, { useState, useEffect } from 'react'
import { FormattedMessage } from 'react-intl'
import Request from '../../helpers/RequestCovidApi'
import fetchData from '../../helpers/fetchData'
import Error from '../errors/Errors'
import LoaderComponent from '../Loader/Loader'
import { Container, Paragraph } from './CalculationOfData.style'
import countPercent from '../../helpers/countPercent'

const CalculationOfData = ({ localisation }) => {
  const [data, setData] = useState([])
  const [errors, setErrors] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(
      `/statistics?country=${localisation}`,
      Request,
      setData,
      setErrors,
      setLoading
    )
  }, [localisation])

  return (
    <>
      {loading && <LoaderComponent />}
      {errors && (
        <Error>
          <FormattedMessage
            id="errorServer"
            defaultMessage="An error has occurred from the server, please come back later."
          />
        </Error>
      )}
      {data.response &&
        data.response.map(({ cases, deaths, tests }) => (
          <Container key="Calculations">
            {tests.total > 0 && (
              <Paragraph>
                <FormattedMessage
                  id="percentPeoplePositiveTest"
                  defaultMessage="{number}% of people tested have a positive test result."
                  values={{
                    number: countPercent(cases.total, tests.total),
                  }}
                />
              </Paragraph>
            )}
            <Paragraph>
              <FormattedMessage
                id="percentPeopleDiagnosedRecovered"
                defaultMessage="{number}% of people diagnosed have recovered."
                values={{
                  number: countPercent(cases.recovered, cases.total),
                }}
              />
            </Paragraph>
            <Paragraph>
              <FormattedMessage
                id="percentPeopleDiagnosedDied"
                defaultMessage="{number}% of people diagnosed have died."
                values={{
                  number: countPercent(deaths.total, cases.total),
                }}
              />
            </Paragraph>
          </Container>
        ))}
    </>
  )
}

export default CalculationOfData
