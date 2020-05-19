import { createGlobalStyle } from 'styled-components';
import HelveticaNeueBold from '../fonts/HelveticaNeue-Medium.ttf';
import HelveticaNeueRegular from '../fonts/HelveticaNeue-Regular.ttf';

// Styled Container
export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 400;
    src: url(${HelveticaNeueRegular}) format('truetype');
  }

  @font-face {
    font-family: 'Helvetica Neue';
    font-weight: 700;
    src: url(${HelveticaNeueBold}) format('truetype');
  }

  button,
  html {
    font-family: 'Helvetica Neue', Arial, Helvetica, sans-serif;
    font-size: 14px;
  }

  body {
    margin: 20px 24px;
  }

  h1, h2, h3, h4, h5 {
    font-weight: 400;
  }

  p {
    line-height: 20px;
    margin-bottom: 8px;
  }

  strong {
    font-weight: 700;
  }
`;
