import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import EventListItem from './Item'
import * as spacings from '../../config/theme/spacings'
import { media } from '../../config/theme/breakpoints'
import { borderColor } from '../../config/theme/colors'

const List = styled.ol`
  margin: 0 -${spacings.large};
  padding: 0;

  ${media.medium`
    margin: 0;
    border: 1px solid ${borderColor};
    border-radius: 4px;
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
