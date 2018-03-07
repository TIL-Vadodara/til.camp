import React from 'react'
import classNames from './index.scss'
import whatsappImage from './whatsapp.svg'
import meetupImage from './meetup.svg'
import instagramImage from './instagram.svg'

const Join = () => (
  <div>
    <h2 className={classNames.title}>Join us on</h2>

    <div className={classNames.channelList}>
      <a className={classNames.link} href="https://www.meetup.com/TIL-Today-I-Learn/" target="_blank">
        <img alt="meetup" src={meetupImage} />
      </a>
      <a className={classNames.link} href="https://chat.whatsapp.com/5QjZq084FmHDXsrRfXKAj1" target="_blank">
        <img alt="whatsapp" src={whatsappImage} />
      </a>
      <a className={classNames.link} href="https://www.instagram.com/til.camp/" target="_blank">
        <img alt="instagram" src={instagramImage} />
      </a>
    </div>
  </div>
)

export default Join
