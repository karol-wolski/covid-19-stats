import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;

  h1 {
    font-size: 2.4rem;

    @media (min-width: 640px) {
      font-size: 3rem;
    }

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.baseline1};
    }
  }
`

export default Header
