import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --blue-royal: #0B24F5;
    --grey-dark: #565656;
    --grey-light: #D0D0D0;
    --blue-light: #EDFFFF;
    --pink: #EB5577;
    --blue-medium: #2483E0;
    --grey-button: #F5F5F5;
    --pink-light: #FCEDEA;
    --green: #6DB486;
    --light-black: ##333333;
    --beige: #FDF2E4;
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