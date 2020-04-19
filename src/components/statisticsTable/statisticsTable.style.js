import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  margin: 1.5rem 0;
  text-align: center;
`

const Th = styled.th`
  padding: 1rem 0;
  cursor: ${({ isEvent }) => (isEvent ? 'pointer' : 'cursor')};
`

const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background: ${({ theme }) => theme.surface};
  }
`

const Td = styled.td`
  padding: 1rem;
  ${({ pointer }) =>
    pointer &&
    `
    cursor: pointer;
    `}
`

const Container = styled.div`
  overflow-x: auto;
  min-height: 20rem;
  position: relative;
`

export { Table, Th, Tbody, Td, Container }
