// core
import React from 'react';

// styles
import { ThreeCircle } from '../assets/css/UploanUiLoadingThreeCircle.css';
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
const UploanUiLoadingThreeCircle = ({
  color,
  sm = false,
  md = false,
  lg = false,
}) => (
  <ElementContainer>
    <ThreeCircle
      color={color}
      sm={sm}
      md={md}
      lg={lg}
    >
      <div className="circle1"></div>
      <div className="circle2"></div>
      <div className="circle3"></div>
    </ThreeCircle>
  </ElementContainer>
);

export default UploanUiLoadingThreeCircle;
