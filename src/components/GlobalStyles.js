import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --orange: #c91e0b;
    --blue: #a1f2f7;
    --black: #333333;
    --green: #008080;
    --beige: #e9fff0;
    --lightgreen: #EAF6F6;
    --teal: #66BFBF;
    --magenta: #FF0063;
  };

  body {
    background-color: #fff;
    color: #000;
  }
`;

export default GlobalStyle;