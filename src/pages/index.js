import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PageTitle from '../components/PageTitle'
import EventList from '../components/EventList'

const IndexPage = ({ data }) => {
  const upcomingEvents = data.allEvent.edges
    .filter(e => moment(e.node.date).isSameOrAfter(moment()))
    .map(x => x.node)

  return (
    <div>
      {upcomingEvents.length > 0 ? (
        <div>
          <PageTitle>Upcoming Events</PageTitle>
          <EventList list={upcomingEvents} />
        </div>
      ) : (
        'No upcoming event'
      )}
    </div>
  )
}

IndexPage.propTypes = {
  data: PropTypes.any,
}

export default IndexPage

export const eventQuery = graphql`
  query Events {
    allEvent(sort: { fields: [date] }) {
      edges {
        node {
          title
          description
          presenter
          date
          startTime
          endTime

          venue {
            name
            address
            googleMapLink
          }
        }
      }
    }
  }
`
