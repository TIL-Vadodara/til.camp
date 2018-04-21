import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import classNames from './index.scss'

const UpcomingEvent = () => (
  <div className={classNames.nextEvent}>
    <h2>Next Event</h2>
    <b>Make a WordPress Website in 1 Hour</b>
    <div>By - Khamosh Pathak (UX Designer, Technology Writer) </div>
    <br/>
    <div className={classNames.description}>
        Learn how to create your own self hosted WordPress website in 1 hour. No coding required! We’ll guide you through the process of creating your own website using an extensive theme, beautiful templates and a drag and drop editor. No fees, No registrations. Just bring your laptops, follow along or take notes. 
    </div>
    <br/>
    <a href="https://www.google.co.in/maps/place/Soul+Brew+Coffee,+Vasna+Road/@22.3071866,73.1620658,15z/data=!4m8!1m2!2m1!1ssoul+brew+vasna!3m4!1s0x395fc61fe9000007:0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698" target="_blank"> Soul Brew, Vasna Road, Vadodara </a>
    <br/>
    <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180429T053000Z%2F20180429T073000Z&text=TIL%20-%20Make%20a%20WordPress%20Website%20in%201%20Hour&location=https%3A%2F%2Fwww.google.co.in%2Fmaps%2Fplace%2FSoul%2BBrew%2BCoffee%2C%2BVasna%2BRoad%2F%4022.3071866%2C73.1620658%2C15z%2Fdata%3D!4m8!1m2!2m1!1ssoul%2Bbrew%2Bvasna!3m4!1s0x395fc61fe9000007%3A0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698&details=" target="_blank">29th April 2018 - 11 AM to 1 PM</a>
    <br/>
    <Link className={classNames.pastTalksLink} to={routes.PAST_EVENTS}>Past Events ↝</Link>
  </div>
)

export default UpcomingEvent
