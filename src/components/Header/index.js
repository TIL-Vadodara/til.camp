import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

import { brandColor } from '../../constants/colors'
import * as routes from '../../constants/routes'
import Logo from '../Logo'

const LogoContainer = styled.div`
  margin-bottom: 20px;
  text-align: center;
`

const Navigation = styled.div`
  display: flex;
  justify-content: center;
`

const NavigationItem = styled.div`
  flex-basis: content;
  text-transform: uppercase;
  font-size: 12px;
`

const activeClassName = 'active'
const StyledNavLink = styled(NavLink).attrs({
  activeClassName,
})`
  display: block;
  height: 44px;
  line-height: 44px;
  padding: 0 12px;

  &.${activeClassName} {
    position: relative;
    color: ${brandColor};

    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 5px;
      height: 4px;
      width: 4px;
      transform: translateX(-2px);
      border-radius: 100%;
      background-color: ${brandColor};
    }
  }
`

StyledNavLink.defaultProps = {
  activeClassName,
}

const Header = () => (
  <div>
    <LogoContainer>
      <Logo />
    </LogoContainer>

    <Navigation>
      <NavigationItem>
        <StyledNavLink exact to={routes.HOME}>
          Next Event
        </StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to={routes.PAST_EVENTS}>Past Events</StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to={routes.JOIN}>Join us</StyledNavLink>
      </NavigationItem>
      <NavigationItem>
        <StyledNavLink to={routes.ABOUT}>About TIL</StyledNavLink>
      </NavigationItem>
    </Navigation>
  </div>
)

export default Header
