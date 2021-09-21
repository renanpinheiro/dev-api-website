import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    width: 100vw;
    font-size: 1rem;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    color: ${props => props.theme.colors.black};
    font-size: 1rem;
    font-family: 'DM Sans', sans-serif;
  }
`

export default GlobalStyles
