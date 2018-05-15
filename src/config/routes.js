import Loadable from 'react-loadable'
import LoadingIndicator from '../components/LoadingIndicator'

const delay = 500
const timeout = 10000

const LoadableHome = Loadable({
  loader: () => import('../components/Home'),
  loading: LoadingIndicator,
  delay,
  timeout,
})

const LoadablePastEvents = Loadable({
  loader: () => import('../components/PastEvents'),
  loading: LoadingIndicator,
  delay,
  timeout,
})

const LoadableJoin = Loadable({
  loader: () => import('../components/Join'),
  loading: LoadingIndicator,
  delay,
  timeout,
})

const LoadableAbout = Loadable({
  loader: () => import('../components/About'),
  loading: LoadingIndicator,
  delay,
  timeout,
})

export const HOME = { component: LoadableHome, path: '/', exact: true }
export const PAST_EVENTS = { component: LoadablePastEvents, path: '/events' }
export const JOIN = { component: LoadableJoin, path: '/join' }
export const ABOUT = { component: LoadableAbout, path: '/about' }

const routes = [HOME, PAST_EVENTS, JOIN, ABOUT]

export default routes
