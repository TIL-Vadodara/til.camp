import React from 'react'
import { Link } from 'react-router-dom'
import * as routes from '../../constants/routes'
import classNames from './index.scss'

const Header = () => (
  <div className={classNames.header}>
    <div className={classNames.logoSection}>
      <div className={classNames.navigationItemLogo}>
        <Link to={routes.HOME}>TIL</Link>
      </div>
    </div>

    <div className={classNames.navigation}>
      <div className={classNames.navigationItem}>
        <Link to={routes.HOME}>Next Event</Link>
      </div>
      <div className={classNames.navigationItem}>
        <Link to={routes.PAST_EVENTS}>Past Events</Link>
      </div>
      <div className={classNames.navigationItem}>
        <Link to={routes.JOIN}>Join us</Link>
      </div>
      <div className={classNames.navigationItem}>
        <Link to={routes.ABOUT}>About TIL</Link>
      </div>
    </div>
  </div>
)

export default Header
