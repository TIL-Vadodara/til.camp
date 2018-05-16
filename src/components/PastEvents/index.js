import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { desaturate, lighten } from 'polished'

import { brandColor } from '../../constants/colors'
import { database } from '../../services/firebase'
import { Pin, WatchAndTalk } from '../Icons'

const sortEvents = events => events.sort((a, b) => a.startTime - b.startTime)
const dateColor = '#FE615E'

const PageTitle = styled.h2`
  text-align: center;
`

const EventList = styled.ol`
  margin: 0 auto;
  padding: 0;
  max-width: 500px;
  display: flex;
  flex-direction: column-reverse;
  list-style-type: none;
`

const EventListItem = styled.li`
  display: flex;
  margin-bottom: 40px;
`

const DateBox = styled.div`
  padding: 20px 20px 20px 0;
  text-align: center;
  color: ${dateColor};
`

const Day = styled.div`
  font-size: 32px;
`

const Month = styled.div`
  text-transform: uppercase;
`

const Year = styled.div`
  opacity: 0.5;
`

const TextBox = styled.div`
  margin-left: 20px;
`

const Title = styled.h3`
  font-weight: 600;
`

const Description = styled.div`
  color: #777;
`

const DetailBox = styled.div`
  display: flex;
  margin-top: 20px;
  line-height: 20px;
`

const DetailItemBox = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  color: ${desaturate(0.6, brandColor)};
  margin-right: 20px;
`

const DetailItemText = styled.div`
  text-align: center;
`

const Icon = css`
  margin: 0 5px;
  height: 20px;

  path {
    fill: currentColor;
  }
`

const PinIcon = styled(Pin)`
  ${Icon};
`
const WatchAndTalkIcon = styled(WatchAndTalk)`
  ${Icon};
`

const EventListItemPlaceholder = EventListItem.extend`
  margin-top: 20px;
`

const PlaceholderBox = css`
  border-radius: 3px;
  background-color: #f9f9f9;
`

const DateBoxPlaceholder = DateBox.extend`
  ${PlaceholderBox};

  margin-right: 40px;
  width: 32px;
  height: 48px;
  background-color: ${lighten(0.3, dateColor)};
`

const TextBoxPlaceholder = styled.div`
  flex: 1;
`

const TitlePlaceholder = styled.div`
  ${PlaceholderBox};

  margin-bottom: 20px;
  height: 20px;
`

const DescriptionPlaceholder = styled.div`
  ${PlaceholderBox};

  margin-bottom: 20px;
  height: 96px;
`

const DetailItemBoxPlaceholder = DetailItemBox.extend`
  ${PlaceholderBox};

  flex: 1;
  max-width: 190px;
  height: 20px;
  background-color: ${lighten(0.3, desaturate(0.6, brandColor))};
`

class PastTalks extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: true,
      pastEvents: [],
      places: {},
      eventTypes: {},
    }
  }

  componentDidMount() {
    const eventsRef = database.ref('events')

    eventsRef.on('child_added', data => {
      const promises = []
      const thens = []

      const newEvent = Object.assign(data.val(), {
        key: data.key,
      })

      if (!this.state.places[data.val().place]) {
        promises.push(database.ref(`/places/${data.val().place}`).once('value'))
        thens.push(snapshot => {
          this.setState(prevState => ({
            places: Object.assign(prevState.places, {
              [snapshot.key]: snapshot.val(),
            }),
          }))
        })
      }

      if (!this.state.eventTypes[data.val().type]) {
        promises.push(
          database.ref(`/eventTypes/${data.val().type}`).once('value')
        )
        thens.push(snapshot => {
          this.setState(prevState => ({
            eventTypes: Object.assign(prevState.eventTypes, {
              [snapshot.key]: snapshot.val(),
            }),
          }))
        })
      }

      Promise.all(promises).then(snapshots => {
        snapshots.forEach((snapshot, index) => thens[index](snapshot))
        this.setState(prevState => ({
          isLoading: false,
          pastEvents: sortEvents(prevState.pastEvents.concat(newEvent)),
        }))
      })
    })
  }

  render() {
    return (
      <div>
        <PageTitle>Past Events</PageTitle>

        <EventList>
          {this.state.isLoading ? (
            <div>
              <LoadingPlaceholders />
              <LoadingPlaceholders />
            </div>
          ) : (
            this.state.pastEvents.map((event, key) => (
              <Event
                key={key}
                {...event}
                place={this.state.places[event.place]}
                type={this.state.eventTypes[event.type]}
              />
            ))
          )}
        </EventList>
      </div>
    )
  }
}

const LoadingPlaceholders = () => (
  <EventListItemPlaceholder>
    <DateBoxPlaceholder />

    <TextBoxPlaceholder>
      <TitlePlaceholder />
      <DescriptionPlaceholder />

      <DetailBox>
        <DetailItemBoxPlaceholder />
        <DetailItemBoxPlaceholder />
      </DetailBox>
    </TextBoxPlaceholder>
  </EventListItemPlaceholder>
)

const Event = ({ title, description, startTime, place, type }) => (
  <EventListItem>
    <DateBox>
      <Day>{new Date(startTime).getDate()}</Day>
      <Month>
        {new Date(startTime).toLocaleString('en-in', { month: 'short' })}
      </Month>
      <Year>{new Date(startTime).getFullYear()}</Year>
    </DateBox>

    <TextBox>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}

      <DetailBox>
        {place && (
          <DetailItemBox>
            <PinIcon />
            <DetailItemText>{place.name}</DetailItemText>
          </DetailItemBox>
        )}
        {type &&
          type.name !== 'Talk' && (
            <DetailItemBox>
              {type.name === 'Watch and Talk' && <WatchAndTalkIcon />}
              <DetailItemText>{type.name}</DetailItemText>
            </DetailItemBox>
          )}
      </DetailBox>
    </TextBox>
  </EventListItem>
)

Event.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  startTime: PropTypes.number,
  place: PropTypes.object,
  type: PropTypes.object,
}

export default PastTalks
