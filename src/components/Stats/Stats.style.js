import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0;
`

const CasesGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  ${({ border, theme }) =>
    border &&
    `
      border-top: 1px dashed;
      border-bottom: 1px dashed;
      border-color: ${theme.surface};
  `}

  @media (min-width: 360px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(${({ row }) => row}, 1fr);
  }
`

const Headline = styled.h2`
  margin: 1rem 0;
`

const Paragraph = styled.p`
  text-align: center;
  font-size: 1.8rem;
  padding: 1rem 0;
`

const Cases = styled.span`
  display: block;
  font-weight: 700;
  font-size: 5rem;
  margin-right: 1rem;
`

const LastUpdate = styled.p`
  font-size: 1.2rem;
`

const Info = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.6rem;
  color: ${({ theme, type }) => {
    if (type === 'danger') {
      return theme.danger
    }
    if (type === 'success') {
      return theme.success
    }
    if (type === 'info') {
      return theme.info
    }
    return theme.baseline1
  }};

  span {
    display: block;
  }
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export {
  Container,
  CasesGroup,
  Paragraph,
  Headline,
  Info,
  Div,
  Cases,
  LastUpdate,
}
