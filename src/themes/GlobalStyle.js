import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

html {
  font-size: 62.5%;
}

body {
  font-family: 'Lato', sans-serif;
  font-size: 1.6rem;
  background-color: ${({ theme }) => theme.bgSite};
  color: ${({ theme }) => theme.baseline1};
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1.5rem;
}
`

export default GlobalStyle
