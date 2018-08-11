import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EventListItem from './Item'
import * as spacings from '../../config/theme/spacings'
import { media } from '../../config/theme/breakpoints'

const List = styled.ol`
  margin: 0 -${spacings.large};
  padding: 0;

  ${media.medium`
    margin: 0;
    overflow: hidden;
  `};
`

const EventList = ({ list }) => (
  <List>
    {list.map((event, idx) => <EventListItem event={event} key={idx} />)}
  </List>
)

EventList.propTypes = {
  list: PropTypes.array,
}

export default EventList
