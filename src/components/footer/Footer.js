import React from 'react'
import { FormattedMessage } from 'react-intl'
import { Footer, Paragraph, Anchor } from './Footer.style'

const FooterComponent = () => {
  return (
    <Footer>
      <Paragraph>
        <FormattedMessage id="createdBy" defaultMessage="Created by " />{' '}
        <Anchor href="#">Karol Wolski</Anchor>.
      </Paragraph>
      <Paragraph>
        <FormattedMessage id="poweredBy" defaultMessage="Powered by " />{' '}
        <Anchor href="https://rapidapi.com/api-sports/api/covid-193">
          COVID-19 Api
        </Anchor>
      </Paragraph>
    </Footer>
  )
}

export default FooterComponent
