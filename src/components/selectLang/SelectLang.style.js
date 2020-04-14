import styled from 'styled-components'

const Select = styled.select`
  border: 1px solid ${({ theme }) => theme.bgSite};
  background-color: ${({ theme }) => theme.baseline1};
  color: ${({ theme }) => theme.surface};
  padding: 0.5rem;
`

const Option = styled.option`
  margin: 0.5rem;
`

export { Select, Option }
