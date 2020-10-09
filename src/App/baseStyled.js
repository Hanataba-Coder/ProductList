import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html, body, #root {
    height: 100%;
    min-height: 100%;
    // font-family: "Prompt";
  }

  body {
    -webkit-tap-highlight-color: transparent;
  }
`;
