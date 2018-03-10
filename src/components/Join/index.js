import React from 'react'
import classNames from './index.scss'
import { InstagramLogo, MeetupLogo, WhatsAppLogo } from '../Icons'

const Join = () => (
  <div>
    <h2 className={classNames.title}>Join us on</h2>

    <div className={classNames.channelList}>
      <a className={classNames.link} href="https://www.meetup.com/TIL-Today-I-Learn/" target="_blank">
        <MeetupLogo alt="meetup" />
      </a>
      <a className={classNames.link} href="https://chat.whatsapp.com/5QjZq084FmHDXsrRfXKAj1" target="_blank">
        <WhatsAppLogo alt="whatsapp" />
      </a>
      <a className={classNames.link} href="https://www.instagram.com/til.camp/" target="_blank">
        <InstagramLogo alt="instagram" />
      </a>
    </div>
  </div>
)

export default Join
