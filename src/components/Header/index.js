import React from 'react'
import { NavLink } from 'react-router-dom'
import * as routes from '../../constants/routes'
import Logo from '../Logo'
import classNames from './index.scss'

const Header = () => (
  <div className={classNames.header}>
    <div className={classNames.logoSection}>
      <Logo />
    </div>

    <div className={classNames.navigation}>
      <div className={classNames.navigationItem}>
        <NavLink exact to={routes.HOME} className={classNames.link} activeClassName={classNames.linkActive}>Next Event</NavLink>
      </div>
      <div className={classNames.navigationItem}>
        <NavLink to={routes.PAST_EVENTS} className={classNames.link} activeClassName={classNames.linkActive}>Past Events</NavLink>
      </div>
      <div className={classNames.navigationItem}>
        <NavLink to={routes.JOIN} className={classNames.link} activeClassName={classNames.linkActive}>Join us</NavLink>
      </div>
      <div className={classNames.navigationItem}>
        <NavLink to={routes.ABOUT} className={classNames.link} activeClassName={classNames.linkActive}>About TIL</NavLink>
      </div>
    </div>
  </div>
)

export default Header
