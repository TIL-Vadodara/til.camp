import React from 'react'
import PropTypes from 'prop-types'

const LoadingIndicator = ({ error, timedOut, pastDelay }) => {
  if (error) {
    return <div>There was a problem loading this page.</div>
  } else if (timedOut) {
    return <div>Taking longer than expected to load this page.</div>
  } else if (pastDelay) {
    return <div>⋯</div>
  }

  return null
}

LoadingIndicator.propTypes = {
  error: PropTypes.bool,
  timedOut: PropTypes.bool,
  pastDelay: PropTypes.bool,
}

export default LoadingIndicator
