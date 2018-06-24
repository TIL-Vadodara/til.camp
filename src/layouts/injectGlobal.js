import { injectGlobal } from 'styled-components'
import * as colors from '../config/theme/colors'
import * as typography from '../config/theme/typography'
import responsiveSize from '../utils/responsiveSize'

const maxTextSize = 18
const minTextSize = 15

injectGlobal`
  body {
    margin: 0;
    font-family: 'Hind Vadodara';
    font-weight: ${typography.fontWeightNormal};
    font-size: ${responsiveSize(minTextSize, maxTextSize)};
    line-height: 1.4;
    color: ${colors.textColor};
  }

  a {
    color: ${colors.linkColor};
    text-decoration: none;
  }
`
