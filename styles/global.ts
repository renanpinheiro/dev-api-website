import { createGlobalStyle } from 'styled-components'
import { theme } from '@devapi/design-system'

import { reset } from 'styled-reset'

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
