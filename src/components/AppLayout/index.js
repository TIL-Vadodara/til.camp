import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import classNames from './index.scss'

const AppLayout = ({ children }) => (
  <div>
    <div className={classNames.header}>
      <Header />
    </div>

    <div className={classNames.mainContent}>
      {children}
    </div>

    <div className={classNames.footer}>
      <Footer />
    </div>
  </div>
)

export default AppLayout
