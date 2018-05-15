import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as routes from '../../constants/routes'
import AppLayout from '../AppLayout'
import Home from '../Home'
import PastEvents from '../PastEvents'
import Join from '../Join'
import Suggest from '../Suggest'
import About from '../About'
import classNames from './index.scss' // eslint-disable-line no-unused-vars

const BasicExample = () => (
  <BrowserRouter>
    <AppLayout>
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.PAST_EVENTS} component={PastEvents} />
      <Route path={routes.JOIN} component={Join} />
      <Route path={routes.SUGGEST} component={Suggest} />
      <Route path={routes.ABOUT} component={About} />
    </AppLayout>
  </BrowserRouter>
)
export default BasicExample
