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

const H3 = styled.h3`
  font-weight: 700;
  font-size: 2.8rem;
`

const H4 = styled.h4`
  font-size: 1.87rem;
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
export { Div, Paragraph, H3, H4 }
