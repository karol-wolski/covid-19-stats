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

  td {
    padding: 1rem 0;

    span {
      color: ${({ theme }) => theme.baseline1};
      display: block;
      margin-top: 0.5rem;
      @media (min-width: 640px) {
        display: inline-block;
        margin: 0 0 0 1rem;
      }
    }
  }
`

const Container = styled.div`
  overflow-x: auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export { Table, Thead, Tbody, Container, Wrapper }
