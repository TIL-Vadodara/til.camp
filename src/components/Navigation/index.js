import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import * as colors from '../../config/theme/colors'
import { fontWeightBold } from '../../config/theme/typography'
import { media } from '../../config/theme/breakpoints'
import * as spacings from '../../config/theme/spacings'

const List = styled.ol`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  height: 100%;
`

const Item = styled.li`
  text-align: center;
  flex-grow: 1;

  ${media.medium`margin-right: ${spacings.medium}`};

  &:last-child {
    margin-right: 0;
  }
`

const activeClassName = 'active'
const ItemLink = styled(Link).attrs({
  activeClassName,
})`
  flex-grow: 1;
  color: ${colors.secondaryTextColor};
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;

  &.${activeClassName} {
    color: ${colors.primaryColor};
    font-weight: ${fontWeightBold};
  }
`

const links = [
  { to: '/', title: 'Upcoming', exact: true },
  { to: '/events', title: 'Past Events' },
  { to: '/members', title: 'Members' },
  { to: '/about', title: 'About Us' },
]

const Navigation = () => (
  <List role="navigation">
    {links.map((l, k) => (
      <Item key={k}>
        <ItemLink to={l.to} exact={l.exact}>
          {l.title}
        </ItemLink>
      </Item>
    ))}
  </List>
)

export default Navigation
