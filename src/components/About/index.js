import React from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  text-align: center;
`

const Para = styled.p`
  margin: 20px auto;
  max-width: 300px;
  text-align: justify;
  line-height: 1.5;
`

const About = () => (
  <div>
    <Title>About TIL</Title>

    <Para>
      For Geeks by Geeks. Talks, Discussions and Video streaming on topics that
      would interest the geek in you.
    </Para>
    <Para>
      TIL is geek meetup group in Vadodara. Interesting people, interesting
      vibes.
    </Para>
  </div>
)

export default About
