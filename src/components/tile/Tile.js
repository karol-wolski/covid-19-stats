import React from 'react'
import { FormattedMessage, FormattedNumber } from 'react-intl'
import { Div, Paragraph, H3, H4 } from './Tile.style'

const Tile = ({ title, value, type, rowAll, large }) => {
  return (
    <Div rowAll={rowAll}>
      {large ? (
        <H3>
          <FormattedMessage id={title} defaultMessage={title} />
        </H3>
      ) : (
        <H4>
          <FormattedMessage id={title} defaultMessage={title} />
        </H4>
      )}
      {value && (
        <Paragraph type={type}>
          <FormattedNumber value={value} />
        </Paragraph>
      )}
    </Div>
  )
}

export default Tile
