import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-royal: #354024;
    --grey-dark: #727C85;
    --grey-light: #D0D0D0;
    --blue-light: #EDFFFF;
    --pink: #591812;
    --blue-medium: #2483E0;
    --grey-button: #F5F5F5;
    --pink-light: #FCEDEA;
    --green: #95A656;
    --light-black: ##333333;
    --beige: #FDF2E4;
    --pink-dark: #591812;

    --white: #F0F0F0;
    --black: #282828;
    --ltgrey: #999D9F;
    --dkgrey: #5B5B5B;
    --ltblue: #A5D8F3;
    --dkblue: #0B3F59;
    --ltpink: #FE9DE6;
    --purple: #5C0145;
    --yellow: #E7E500;
    --dkgreen: #474601;

    --mono: 'Source Code Pro', monospace;
    --sans: 'Satoshi', sans-serif;
  };

  html {
    box-sizing: border-box;
  };

  *, *::before, *::after {
      box-sizing: inherit;
  };

  body {
    margin: 0;
    padding: 0;
    border: 0;
    text-wrap: balance;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    line-height: 1.5;
  }

  *:focus-visible { 
    outline: 3px solid black;
    outline-offset: 0.25rem;
    border-radius: 0.5rem;
  }
  
  
`;

export default GlobalStyle;