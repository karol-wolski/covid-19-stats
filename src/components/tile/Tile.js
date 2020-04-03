import React from 'react'
import { Div, Paragraph } from './Tile.style'

const Tile = ({ title, value, type, rowAll }) => {
  return (
    <Div rowAll={rowAll}>
      <h3>{title}</h3>
      <Paragraph type={type}>{value}</Paragraph>
    </Div>
  )
}

export default Tile
