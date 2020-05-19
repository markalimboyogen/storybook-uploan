// core
import React from 'react';

// styles
import ElementContainer from 'uploan-styles';
import { Icon } from 'uploan-icon/assets/css/UploanIcon.css';

/**
 * Component to render svg icons.
 * @param {Object} props
 * @param {string} props.color - Hex code to specify color of icon. Ex: `#fff`.
 * @param {string} props.size - Expected size of icon. Ex: `16`.
 * @param {SVGElement} props.svg - <svg /> element of icon.
 * @returns {ReactElement}
 */
const UploanIcon = ({ color, size, svg }) => (
  <ElementContainer>
    <Icon
      color={color}
      size={size}
    >
      {svg}
    </Icon>
  </ElementContainer>
);

export default UploanIcon;
