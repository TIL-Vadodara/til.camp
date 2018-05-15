import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import * as routes from './constants/routes'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import PastEvents from './components/PastEvents'
import Join from './components/Join'
import Suggest from './components/Suggest'
import About from './components/About'
import classNames from './App.scss' // eslint-disable-line no-unused-vars

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
