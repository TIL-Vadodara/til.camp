import React, { Component } from 'react'
import { database } from '../../services/firebase'
import classNames from './index.scss'
import { Pin, WatchAndTalk } from '../Icons'

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
        key: data.key
      })

      if (!this.state.places[data.val().place]) {
        promises.push(database.ref(`/places/${data.val().place}`).once('value'))
        thens.push(snapshot => {
          this.setState(prevState => ({
            places: Object.assign(prevState.places, {
              [snapshot.key]: snapshot.val()
            })
          }))
        })
      }

      if (!this.state.eventTypes[data.val().type]) {
        promises.push(database.ref(`/eventTypes/${data.val().type}`).once('value'))
        thens.push(snapshot => {
          this.setState(prevState => ({
            eventTypes: Object.assign(prevState.eventTypes, {
              [snapshot.key]: snapshot.val()
            })
          }))
        })
      }

      Promise.all(promises).then(snapshots => {
        snapshots.forEach((snapshot, index) => thens[index](snapshot))
        this.setState(prevState => ({
          isLoading: false,
          pastEvents: prevState.pastEvents.concat(newEvent),
        }))
      })
    })
  }

  render() {
    return (
      <div>
        <h2 className={classNames.pageTitle}>Past Events</h2>

        <ol className={classNames.eventList}>
        {this.state.isLoading
          ?
            <div>
              <LoadingPlaceholders />
              <LoadingPlaceholders />
            </div>
          :
            this.state.pastEvents.map(event =>
              <Event {...event}
                place={this.state.places[event.place]}
                type={this.state.eventTypes[event.type]}
              />
            )
        }
        </ol>
      </div>
    )
  }
}

const LoadingPlaceholders = () => (
  <div className={classNames.eventListItemPlaceholder}>
    <div className={classNames.dateBoxPlaceholder}></div>

    <div className={classNames.textBoxPlaceholder}>
      <div className={classNames.titlePlaceholder}></div>
      <div className={classNames.descriptionPlaceholder}></div>

      <div className={classNames.detailBoxPlaceholder}>
        <div className={classNames.placeBoxPlaceholder}>
        </div>
        <div className={classNames.eventTypeBoxPlaceholder}>
        </div>
      </div>
    </div>
  </div>
)

const Event = ({ title, description, startTime, endTime, place, type }) => (
  <li className={classNames.eventListItem}>
    <div className={classNames.dateBox}>
      <div className={classNames.date}>{(new Date(startTime)).getDate()}</div>
      <div className={classNames.month}>{(new Date(startTime)).toLocaleString('en-in', { month: 'short' })}</div>
      <div className={classNames.year}>{(new Date(startTime)).getFullYear()}</div>
    </div>

    <div className={classNames.textBox}>
      <h3 className={classNames.title}>{title}</h3>
      {description && <div className={classNames.description}>{description}</div>}

      <div className={classNames.detailBox}>
        {place &&
          <div className={classNames.placeBox}>
            <Pin className={classNames.pinIcon} />
            <div className={classNames.place}>{place.name}</div>
          </div>
        }
        {type && type.name != 'Talk' &&
          <div className={classNames.eventTypeBox}>
            {type.name == 'Watch and Talk' && <WatchAndTalk className={classNames.typeIcon} />}
            <div className={classNames.eventType}>{type.name}</div>
          </div>
        }
      </div>
    </div>
  </li>
)

export default PastTalks
