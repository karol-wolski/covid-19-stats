import React, { useContext } from 'react'
import Loader from 'react-loader-spinner'
import { ThemeContext } from 'styled-components'
import Wrapper from './Loader.style'

const LoaderComponent = () => {
  const theme = useContext(ThemeContext)
  return (
    <Wrapper>
      <Loader type="ThreeDots" color={theme.baseline1} height={75} width={75} />
    </Wrapper>
  )
}

export default LoaderComponent
