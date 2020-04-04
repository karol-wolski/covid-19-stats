import React from 'react'
import { Footer, Paragraph, Anchor } from './Footer.style'

const FooterComponent = () => {
  return (
    <Footer>
      <Paragraph>
        Created by <Anchor href="#">Karol Wolski</Anchor>.
      </Paragraph>
      <Paragraph>
        Powered by{' '}
        <Anchor href="https://rapidapi.com/api-sports/api/covid-193">
          COVID-19 Api
        </Anchor>
      </Paragraph>
    </Footer>
  )
}

export default FooterComponent
