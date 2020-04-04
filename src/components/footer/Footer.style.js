import styled from 'styled-components'

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1.5rem 0;
`

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
`

const Anchor = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.baseline2};
`

export { Footer, Paragraph, Anchor }
