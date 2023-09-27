import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-royal: #354024;
    --grey-dark: #727C85;
    --grey-light: #D0D0D0;
    --blue-light: #EDFFFF;
    --pink: #D94B2B;
    --blue-medium: #2483E0;
    --grey-button: #F5F5F5;
    --pink-light: #FCEDEA;
    --green: #A1A61B;
    --light-black: ##333333;
    --beige: #FDF2E4;
    --pink-dark: #591812;
  };

  body {
    background-color: #fff;
    color: #000;
  };

  * {
  box-sizing: border-box;
  }
`;

export default GlobalStyle;