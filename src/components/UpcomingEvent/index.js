import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PAST_EVENTS } from '../../config/routes'

const NextEvent = styled.div`
  text-align: center;

  a {
    text-decoration: underline;
  }
`

const PastTalksLink = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  text-decoration: none !important;
  padding: 7px 21px;
  border: 1px solid black;
  border-radius: 4px;
`

const UpcomingEvent = () => (
  <NextEvent>
    <h2>Next Event</h2>
    <b>Build a Secret Knock Detector With Arduino</b>
    <div>By - Nayaabkhan (Computer Engineer, DIY Enthusiast) </div>
    <br/>
    <p>
      Arduino is an open source electronic prototyping platform. Using this extensive board you can quickly and easily create any kind of electronic product that you can imagine! Everything from simple automation devices, to IoT projects! In this TIL workshop, we will walk you through the process of building a secret knock detector. In this project, a secret knock will show a green light. If there’s any other knock pattern, it will be a red light.
      Working with Arduino requires some basic coding knowledge. But you can still attend the workshop to know more about the world of DIY electronic prototyping.
    </p>
    <a href="https://www.google.co.in/maps/place/Soul+Brew+Coffee,+Vasna+Road/@22.3071866,73.1620658,15z/data=!4m8!1m2!2m1!1ssoul+brew+vasna!3m4!1s0x395fc61fe9000007:0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698" target="_blank"> Soul Brew, Vasna Road, Vadodara </a>
    <br/>
    <a href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180603T053000Z%2F20180603T073000Z&text=&location=&details= " target="_blank">3rd June 2018 - 11 AM to 1 PM</a>
    <br/>
    <PastTalksLink to={PAST_EVENTS.path}>Past Events ↝</PastTalksLink>
  </NextEvent>
)

export default UpcomingEvent
