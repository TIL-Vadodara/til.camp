import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Media from 'react-media'
import IconLogo from '../../icons/Logo'
import Navigation from '../Navigation'
import { small, media } from '../../config/theme/breakpoints'
import * as spacings from '../../config/theme/spacings'

const HeaderLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media.medium`justify-content:space-between`};
`

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;

  ${media.medium`margin-right: ${spacings.xLarge}`};
`

const StyledLogo = styled(IconLogo)`
  width: 30px;
  height: 30px;

  ${media.medium`
    width: 45px;
    height: 45px;
  `};
`

const Header = () => (
  <HeaderLayout>
    <LogoLink to="/">
      <StyledLogo />
    </LogoLink>

    <Media query={small}>{matches => (matches ? null : <Navigation />)}</Media>
  </HeaderLayout>
)

Header.propTypes = {
  pageTitle: PropTypes.string,
}

export default Header
