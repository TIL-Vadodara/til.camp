import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Footer from '../Footer'
import classNames from './index.scss'

const AppLayout = ({ children }) => (
  <div>
    <div className={classNames.header}>
      <Header />
    </div>

    <div className={classNames.mainContent}>{children}</div>

    <div className={classNames.footer}>
      <Footer />
    </div>
  </div>
)

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout
