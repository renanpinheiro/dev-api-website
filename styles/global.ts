import { createGlobalStyle } from 'styled-components'

import { reset } from 'styled-reset'
import { theme } from './theme'

import 'bootstrap/dist/css/bootstrap.min.css'

const GlobalStyles = createGlobalStyle`
${reset}
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 900;
    src: local('TT Commons Black'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Black.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 900;
    src: local('TT Commons Black Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Black+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: bold;
    src: local('TT Commons Bold'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Bold.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: bold;
    src: local('TT Commons Bold Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Bold+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 600;
    src: local('TT Commons Demi Bold'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+DemiBold.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons-DemiBoldItalic';
    font-style: italic;
    font-weight: 600;
    src: local('TT Commons Demi Bold Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+DemiBold+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 700;
    src: local('TT Commons Extra Bold'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+ExtraBold.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 700;
    src: local('TT Commons Extra Bold Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+ExtraBold+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 200;
    src: local('TT Commons Extra Light'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+ExtraLight.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 200;
    src: local('TT Commons Extra Light Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+ExtraLight+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: normal;
    src: local('TT Commons Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 300;
    src: local('TT Commons Light'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Light.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 300;
    src: local('TT Commons Light Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Light+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 500;
    src: local('TT Commons Medium'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Medium.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 500;
    src: local('TT Commons Medium Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Medium+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: 100;
    src: local('TT Commons Thin'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Thin.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: italic;
    font-weight: 100;
    src: local('TT Commons Thin Italic'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Thin+Italic.woff') format("truetype");
  }
  @font-face {
    font-family: 'TT Commons';
    font-style: normal;
    font-weight: normal;
    src: local('TT Commons'), url('https://devapi-cdn-static.s3.amazonaws.com/plataform/fonts/TTCommons/TT+Commons+Regular.woff') format("truetype");
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'TT Commons', sans-serif !important;
  }

  html {
    width: 100%;
    font-size: 1rem;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    max-width: 100%;
    overflow-x: hidden;
    font-size: 1rem;
    font-weight: normal;
    color: ${theme.colors.primary}; 
  }

  h1 {
    font-weight: 700;
  }

  h2 {
  font-size: 2.2rem;
  font-weight: bold;
  }

  button:focus {
    outline: none;
  }

  scrollbar-color: #738099 transparent;
  scrollbar-width: thin;

  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #738099;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #738099;
  }
`

export default GlobalStyles
