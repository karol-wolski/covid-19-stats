import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  margin: 1.5rem 0;

  ${({ rowAll }) =>
    rowAll &&
    `
    @media(min-width: 360px) and (max-width: 767px) {
      grid-column-start: 1;
      grid-column-end: 4;
    }
  `}
`

const Paragraph = styled.p`
  font-weight: 700;
  font-size: 2.8rem;
  color: ${({ theme, type }) => {
    if (type === 'danger') {
      return theme.danger
    }
    if (type === 'success') {
      return theme.success
    }
    return theme.baseline1
  }};
`
export { Div, Paragraph }
