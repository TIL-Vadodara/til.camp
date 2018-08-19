import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Media from 'react-media'
import Header from '../components/Header'
import Navigation from '../components/Navigation'

import * as spacings from '../config/theme/spacings'
import { small, media } from '../config/theme/breakpoints'

import './injectGlobal'

const navigationContainerHeight = '44px'

const Container = styled.div`
  padding: ${spacings.large};
  padding-bottom: ${spacings.xxLarge};

  ${media.medium`
    padding: ${spacings.xLarge};
  `};
`

const HeaderContainer = styled.header`
  margin-bottom: ${spacings.large};

  ${media.medium`
    margin-bottom: ${spacings.xLarge};
  `};
`
const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 800px;
`

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${navigationContainerHeight};
  background-color: white;
  box-shadow: 0 0 4px 0 hsla(0, 0%, 0%, 0.2);
`

const Layout = ({ children, data }) => (
  <Container>
    <Helmet>
      <link
        href="https://fonts.googleapis.com/css?family=Hind+Vadodara:400,600,700"
        rel="stylesheet"
      />
      <title>{data.site.siteMetadata.title}</title>
    </Helmet>

    <ContentContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      {children()}
    </ContentContainer>

    <Media query={small}>
      {matches =>
        matches ? (
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        ) : null
      }
    </Media>
  </Container>
)

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.any,
}

export default Layout

// eslint-disable-next-line no-undef
export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
