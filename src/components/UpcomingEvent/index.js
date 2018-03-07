import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import classNames from './index.scss'

const UpcomingEvent = () => (
  <div className={classNames.nextEvent}>
    <h2>Next Event</h2>
    Watch and Talk - <strong>Hans Rosling: </strong> Facts about Population Growth
    <br/>
    <a href="https://www.google.co.in/maps/place/Soul+Brew+Coffee,+Vasna+Road/@22.3071866,73.1620658,15z/data=!4m8!1m2!2m1!1ssoul+brew+vasna!3m4!1s0x395fc61fe9000007:0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698" target="_blank"> Soul Brew, Vasna Road, Vadodara </a>
    <br/>
    <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180218T053000Z%2F20180218T063000Z&text=Facts%20about%20Population%20Growth&location=https%3A%2F%2Fwww.google.co.in%2Fmaps%2Fplace%2FSoul%2BBrew%2BCoffee%2C%2BVasna%2BRoad%2F%4022.3071866%2C73.1620658%2C15z%2Fdata%3D!4m8!1m2!2m1!1ssoul%2Bbrew%2Bvasna!3m4!1s0x395fc61fe9000007%3A0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698&details=TIL%20Watch%20and%20Talk%3A%20In%20this%20watch%20and%20talk%2C%20we%E2%80%99ll%20be%20watching%20and%20discussing%20Hans%20Rosling%E2%80%99s%20popular%20talk%20%E2%80%9CDon%E2%80%99t%20Panic%3A%20The%20Facts%20about%20Population%E2%80%9D%3B%20where%20he%20argues%20why%20the%20world%20population%20won%E2%80%99t%20cross%2011%20billion.%20Hans%20Rosling%20is%20a%20statistician%20and%20an%20excellent%20orator%20who%20uses%20engaging%20visuals%20to%20present%20population%20facts" target="_blank">18th February 2018</a>
    <br/>
    <Link className={classNames.pastTalksLink} to={routes.PAST_EVENTS}>Past Events ↝</Link>
  </div>
)

export default UpcomingEvent
