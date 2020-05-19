// core
import React from 'react';

// styles
import { Textarea } from '../assets/css/UploanUiTextarea.css';
import ElementContainer from 'uploan-styles';

/**
 * Component for textarea render.
 * 
 * @component
 * @param {Object} props
 */
const UploanUiTextarea = ({
  label,
  maxLength,
  name,
  placeholder,
  required,
  rows,
  type,
}) => (
  <ElementContainer>
    <Textarea>
      <label>{label}</label>
      <textarea
        maxLength={maxLength}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        type={type}
      />
    </Textarea>
  </ElementContainer>
);

export default UploanUiTextarea;
