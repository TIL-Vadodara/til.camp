import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import moment from 'moment'
import * as colors from '../../config/theme/colors'
import * as spacings from '../../config/theme/spacings'
import * as typography from '../../config/theme/typography'

const Date = styled.div`
  margin-right: ${spacings.large};
  text-align: center;
  border: 1px solid ${colors.borderColor};
  border-radius: 4px;
`

const Day = styled.div`
  padding: 1px 3px 0;
  font-weight: ${typography.fontWeightBold};
  font-size: 22px;
`

const Month = styled.div`
  padding: 0 4px 1px;
  font-size: 15px;
  text-transform: uppercase;
  opacity: 0.6;
`

const DateBox = ({ date }) => (
  <Date>
    <Day>{moment(date).format('DD')}</Day>
    <Month>{moment(date).format('MMM')}</Month>
  </Date>
)

DateBox.propTypes = {
  date: PropTypes.string,
}

export default DateBox
