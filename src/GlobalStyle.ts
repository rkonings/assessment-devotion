import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


    html, body {
       height: 100%;
       margin:0;
    }

    #root, #__next {
      height: 100%;
      width: 100%;
    }

    body {
      font-family: Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }


`;

export default GlobalStyle;
