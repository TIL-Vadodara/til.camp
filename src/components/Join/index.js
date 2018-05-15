import React from 'react'
import styled from 'styled-components'
import { InstagramLogo, MeetupLogo } from '../Icons'

const Title = styled.h2`
  text-align: center;
`

const ChannelList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 50px;
`

const Link = styled.a`
  margin-bottom: 20px;
  padding: 0 40px;
  flex-basis: 140px;
`

const Join = () => (
  <div>
    <Title>Join us on</Title>

    <ChannelList>
      <Link
        href="https://www.meetup.com/TIL-Today-I-Learn/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MeetupLogo alt="meetup" />
      </Link>
      <Link
        href="https://www.instagram.com/til.camp/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramLogo alt="instagram" />
      </Link>
    </ChannelList>
  </div>
)

export default Join
