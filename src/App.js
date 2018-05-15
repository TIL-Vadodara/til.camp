import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import { linkColor } from './constants/colors'
import routes from './config/routes'
import AppLayout from './components/AppLayout'

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
  <AppLayout>
    <Switch>
      {routes.map((route, index) => <Route key={index} {...route} />)}
    </Switch>
  </AppLayout>
)
export default BasicExample
