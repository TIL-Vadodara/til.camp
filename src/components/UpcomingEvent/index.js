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
    <b>Crafting Films With Love</b>
    <div>By - Nidhi Kamath (Documentary Filmmaker) </div>
    <br />
    <a
      href="https://www.google.co.in/maps/place/Soul+Brew+Coffee,+Vasna+Road/@22.3071866,73.1620658,15z/data=!4m8!1m2!2m1!1ssoul+brew+vasna!3m4!1s0x395fc61fe9000007:0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698"
      rel="noopener noreferrer"
      target="_blank"
    >
      {' '}
      Soul Brew, Vasna Road, Vadodara{' '}
    </a>
    <br />
    <a
      href="http://www.google.com/calendar/event?action=TEMPLATE&dates=20180513T053000Z%2F20180513T073000Z&text=TIL%20-%20Crafting%20Films%20With%20Love&location=https%3A%2F%2Fwww.google.co.in%2Fmaps%2Fplace%2FSoul%2BBrew%2BCoffee%2C%2BVasna%2BRoad%2F%4022.3071866%2C73.1620658%2C15z%2Fdata%3D!4m8!1m2!2m1!1ssoul%2Bbrew%2Bvasna!3m4!1s0x395fc61fe9000007%3A0x3f10af9119949d42!8m2!3d22.2954162!4d73.1593698&details="
      rel="noopener noreferrer"
      target="_blank"
    >
      13th May 2018 - 11 AM to 1 PM
    </a>
    <br />
    <PastTalksLink to={PAST_EVENTS.path}>Past Events ↝</PastTalksLink>
  </NextEvent>
)

export default UpcomingEvent
