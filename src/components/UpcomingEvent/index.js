import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import classNames from './index.scss'

const UpcomingEvent = () => (
  <div className={classNames.nextEvent}>
    <h2>Next Event</h2>
    <b>Build an Online Store in 30 Minutes Using Wix</b>
    <div>By - Lakhan Samani (Web Developer at starofservice.com) </div>
    <br/>
    <div className={classNames.description}>
        Learn how to easily create your own Wix e-commerce store in just 30 minutes!
        <br/>
        Complete with your own design template, inventory management and payment processing. No coding required! 
    </div>
    <br/>
    <a href="https://www.google.co.in/maps/place/Soul+Brew+Coffee,+Vasna+Road/@22.3071866,73.1620658,15z/data=!4m8!1m2!2m1!1ssoul+brew+vasna!3m4!1s0x395fc61fe9000007:0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698" target="_blank"> Soul Brew, Vasna Road, Vadodara </a>
    <br/>
    <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180505T053000Z%2F20180505T073000Z&text=Build%20Online%20Store%20in%2030%20min%20using%20WIX&location=https%3A%2F%2Fwww.google.co.in%2Fmaps%2Fplace%2FSoul%2BBrew%2BCoffee%2C%2BVasna%2BRoad%2F%4022.3071866%2C73.1620658%2C15z%2Fdata%3D!4m8!1m2!2m1!1ssoul%2Bbrew%2Bvasna!3m4!1s0x395fc61fe9000007%3A0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698&details=" target="_blank">5th May 2018 - 11 AM to 1 PM</a>
    <br/>
    <Link className={classNames.pastTalksLink} to={routes.PAST_EVENTS}>Past Events ↝</Link>
  </div>
)

export default UpcomingEvent
