import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import classNames from './index.scss'

const typefacesStyles = [
  {
    fontFamily: 'Montserrat',
    fontWeight: 700,
    WebkitTextStroke: '1px #FFF',
    WebkitTextFillColor: 'currentColor'
  },
  {
    fontFamily: 'Bangers',
    color: 'white'
  },
  {
    fontFamily: 'Monoton',
    color: 'white'
  },
  {
    fontFamily: 'Playfair Display',
    fontWeight: 700,
    color: 'white'
  }
]

const Logo = () => (
  <div>
    <Link
      to={routes.HOME}
      className={classNames.link}
      style={typefacesStyles[Math.floor(Math.random() * typefacesStyles.length)]}
    >
      TIL
    </Link>
  </div>
)

export default Logo
