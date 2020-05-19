// core
import React from 'react';

// styles
import { Spinner } from '../assets/css/UploanUiLoadingSpinner.css';
import ElementContainer from 'uploan-styles';

/**
 * Component for spinner render.
 * 
 * @component
 * @param {Object} props
 * @param {boolean} props.sm - Small spinner.
 * @param {string} props.md - Medium spinner.
 * @param {boolean} props.lg - Large spinner.
 */
const UploanUiLoadingSpinner = ({
  color,
  sm = false,
  md = false,
  lg = false,
}) => (
  <ElementContainer>
    <Spinner
      color={color}
      sm={sm}
      md={md}
      lg={lg}
    >
    </Spinner>
  </ElementContainer>
);

export default UploanUiLoadingSpinner;
