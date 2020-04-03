import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  h1 {
    font-size: 2rem;

    @media (min-width: 640px) {
      font-size: 3rem;
    }
  }
`

export default Header
