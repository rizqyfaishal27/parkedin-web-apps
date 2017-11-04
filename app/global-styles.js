import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    background-color: #F0F2F2;
    height: auto;
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h4, h5 {
    margin-bottom: 0.5rem;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
`;
