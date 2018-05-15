import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Header from '../Header'
import Footer from '../Footer'

const HeaderContainer = styled.div`
  margin: 100px 0;
`

const MainContent = styled.div`
  margin: 0 auto;
  max-width: 900px;
  padding: 0 15px;
`

const FooterContainer = styled.div`
  margin: 100px 0;
`

const AppLayout = ({ children }) => (
  <div>
    <HeaderContainer>
      <Header />
    </HeaderContainer>

    <MainContent>{children}</MainContent>

    <FooterContainer>
      <Footer>© TIL - Today I Learned</Footer>
    </FooterContainer>
  </div>
)

AppLayout.propTypes = {
  children: PropTypes.node,
}

export default AppLayout
