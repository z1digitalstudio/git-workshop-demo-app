import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import { fonts } from './fonts';

const GlobalStyle = createGlobalStyle`
  ${normalize};
  ${fonts};

  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI",
    "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
    "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #__next {
    display: flex;
    min-height: 100vh;
    
    > * {
      flex: 1;
    }
  }
`;

export default GlobalStyle;
