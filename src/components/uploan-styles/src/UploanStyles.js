// core
import React from 'react';

// styles
import { ThemeProvider } from 'styled-components';
import Styles from '../assets/css/uploanStyles.css';

/**
 * Wrapper for all components that contains styling variables.
 * 
 * @component
 */
const ElementContainer = ({ children }) => (
  <ThemeProvider theme={Styles}>
    {children}
  </ThemeProvider>
);

export default ElementContainer;
