import { createGlobalStyle } from 'styled-components'

import { reset } from 'styled-reset'
import { theme } from './theme'

import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyles = createGlobalStyle`
${reset}
  
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  width: 100vw;
  font-size: 1rem;
}

html, body, #__next {
  height: 100%;
}

body {
  font-family: 'DM Sans', sans-serif;
  font-size: 1rem;
  color: ${theme.colors.primary};
}
`

export default GlobalStyles
