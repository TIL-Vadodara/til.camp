import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { brandColor } from '../../constants/colors'
import * as routes from '../../constants/routes'

const StyledLink = styled(Link)`
  display: inline-block;
  padding: 5px 18px;
  border-radius: 4px;
  font-size: 30px;
  letter-spacing: 4px;
  color: transparent;
  background-color: ${brandColor};
`

const typefacesStyles = [
  {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    WebkitTextStroke: '1px #FFF',
    WebkitTextFillColor: 'currentColor',
  },
  {
    fontFamily: 'Bangers',
    color: 'white',
  },
  {
    fontFamily: 'Monoton',
    color: 'white',
  },
  {
    fontFamily: 'Playfair Display',
    fontWeight: 700,
    color: 'white',
  },
]

const Logo = () => (
  <div>
    <StyledLink
      to={routes.HOME}
      style={
        typefacesStyles[Math.floor(Math.random() * typefacesStyles.length)]
      }
    >
      TIL
    </StyledLink>
  </div>
)

export default Logo
