import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import PageTitle from '../components/PageTitle'
import EventList from '../components/EventList'

const EventsPage = ({ data }) => {
  const pastEvents = data.allEvent.edges
    .filter(e => moment(e.node.date).isBefore(moment()))
    .map(x => x.node)
    .reverse()

  return (
    <div>
      {pastEvents.length > 0 ? (
        <div>
          <PageTitle>Past Events</PageTitle>
          <EventList list={pastEvents} />
        </div>
      ) : (
        'No upcoming event'
      )}
    </div>
  )
}

EventsPage.propTypes = {
  data: PropTypes.any,
}

export default EventsPage

// eslint-disable-next-line no-undef
export const eventQuery = graphql`
  query PastEvents {
    allEvent(sort: { fields: [date] }) {
      edges {
        node {
          title
          description
          presenter
          date
          startTime
          endTime
          bannerUrl

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
