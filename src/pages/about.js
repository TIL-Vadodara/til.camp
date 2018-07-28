import React from 'react'
import PageTitle from '../components/PageTitle'
import MeetupLogo from '../images/MeetupLogo'
import InstagramLogo from '../images/InstagramLogo'
import FacebookLogo from '../images/FacebookLogo'
import styled from 'styled-components'
import * as spacings from '../config/theme/spacings'

const SocialList = styled.p`
  margin-top: ${spacings.large};
  display: flex;
  align-items: center;
`

const SocialLink = styled.a`
  margin-right: ${spacings.large};
  margin-bottom: ${spacings.medium};
  flex: 0 1;
  flex-basis: 100px;

  &:last-child {
    margin-right: 0;
  }
`

const SecondPage = () => (
  <div>
    <PageTitle>About Us</PageTitle>
    <p>
      For Geeks by Geeks. Talks, Discussions and Video streaming on topics that
      would interest the geek in you. TIL is geek meetup group in Vadodara.
    </p>

    <SocialList>
      <SocialLink
        href="https://www.meetup.com/TIL-Today-I-Learn/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <MeetupLogo />
      </SocialLink>

      <SocialLink
        href="https://www.instagram.com/til.camp/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramLogo />
      </SocialLink>

      <SocialLink
        href="https://www.facebook.com/tilvadodara/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FacebookLogo />
      </SocialLink>
    </SocialList>
  </div>
)

export default SecondPage
