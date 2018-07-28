import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const IconRoot = props => {
  const { viewBox, children, ...rest } = props

  return (
    <svg viewBox={viewBox} width="1em" height="1em" {...rest}>
      {children}
    </svg>
  )
}

const StyledIconRoot = styled(IconRoot)`
  position: relative;
  top: 0.125em;
  fill: currentColor;
  user-select: none;
  align-self: center;
`

IconRoot.propTypes = {
  viewBox: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default StyledIconRoot
