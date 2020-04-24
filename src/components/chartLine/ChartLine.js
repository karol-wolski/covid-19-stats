import React, { useEffect, useState } from 'react'
import { FormattedMessage, FormattedDate } from 'react-intl'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const ChartLine = ({ data, filter }) => {
  const [dataArray, setDataArray] = useState([])
  const [lines, setLines] = useState([])

  useEffect(() => {
    setDataArray(data)
    setLines(filter)
  }, [data, filter])

  return (
    <>
      {dataArray && (
        <ResponsiveContainer width="100%" height="80%" aspect={1.4}>
          <LineChart data={dataArray}>
            <XAxis dataKey="day" />
            <YAxis domain={[0, 'dataMax']} />
            <Tooltip
              labelStyle={{ color: 'black', fontWeight: 700 }}
              labelFormatter={value => <FormattedDate value={value} />}
            />
            <Legend />
            {lines.map(
              ({ name, dataKey, color, isVisible }) =>
                isVisible && (
                  <Line
                    key={name}
                    type="monotone"
                    name={<FormattedMessage id={name} defaultMessage={name} />}
                    dataKey={dataKey}
                    stroke={color}
                    dot={false}
                  />
                )
            )}
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  )
}

export default ChartLine
