import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import { linkColor } from './constants/colors'
import * as routes from './constants/routes'
import AppLayout from './components/AppLayout'
import Home from './components/Home'
import PastEvents from './components/PastEvents'
import Join from './components/Join'
import Suggest from './components/Suggest'
import About from './components/About'

injectGlobal`
  body {
    font-family: Montserrat;
    font-size: 14px;
    font-weight: 400;
  }

  a {
    text-decoration: none;
    color: ${linkColor};
  }
`

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
