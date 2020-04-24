import styled from 'styled-components'

const UL = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
`

const LI = styled.li`
  padding: 1rem;
  justify-self: center;
`

export { UL, LI }
