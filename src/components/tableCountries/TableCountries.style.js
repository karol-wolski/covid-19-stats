import styled from 'styled-components'

const Table = styled.table`
  width: 100%;
  margin: 1.5rem 0;
  text-align: center;
`

const Thead = styled.thead`
  th {
    padding: 1rem 0;
    cursor: pointer;
  }
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

export { Table, Thead, Tbody, Td, Container }
