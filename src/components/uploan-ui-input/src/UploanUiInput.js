// core
import React, { useState } from 'react';

// styles
import ElementContainer from 'uploan-styles';
import { Input } from 'uploan-ui-input/assets/css/UploanUiInput.css';

const CURRENCY = 'PHP';

/**
 * Formats initial value of amount input.
 * @param {string} value of amount from input element.
 */
const formatFloatingAmount = (value) => 
  value.replace(/\D|^0+/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');

/**
 * Adds currency and decimal to the stringified amount.
 * @param {string} value of amount from input element.
 * @param {string} event fired by input element.
 */
const formatAmount = (value, event) => {
  let newVal = value;
  
  if (newVal === '') return `${CURRENCY} `;
    
  if (newVal.indexOf('.') >= 0) {
    const leftSide = formatFloatingAmount(
      newVal.substring(0, newVal.indexOf('.'))
    );
    let rightSide = formatFloatingAmount(
      newVal.substring(newVal.indexOf('.'))
    );
    
    if (event === 'blur') rightSide += '00';

    rightSide = rightSide.substring(0, 2);
    newVal = `${CURRENCY} ${leftSide}.${rightSide}`;

  } else {
    newVal = `${CURRENCY} ${formatFloatingAmount(newVal)}`;
    
    if (event === 'blur') newVal += '.00';
  }
  
  return newVal;
};

/**
 * Component to render input.
 * @param {Object} props
 * @param {string} props.format - Text formatting for input value.
 * @param {string} props.label - Input display name.
 * @param {boolean} props.maxLength - Attribute maxlength for input element.
 * @param {string} props.name - Attribute name for input element.
 * @param {string} props.placeholder - Attribute placeholder for input element.
 * @param {boolean} props.required - Determines if input is required.
 * @param {string} props.type - Attribute type for input element.
 * @returns {ReactElement}
 */
const UploanUiInput = ({
  format,
  label,
  maxLength,
  name,
  placeholder,
  required,
  type,
}) => {
  const [inputValue, setInputValue] = useState(() =>
    format === 'amount' ? CURRENCY : '');

  return (
    <ElementContainer>
      <Input>
        <label>{label}</label>
        <input
          maxLength={maxLength}
          name={name}
          placeholder={placeholder}
          required={required}
          type={type}
          value={inputValue}
          onBlur={({ currentTarget: { value }}) => format === 'amount'
            ? setInputValue(formatAmount(value, 'blur'))
            : setInputValue(value)
          }
          onChange={({ currentTarget: { value }}) => format === 'amount'
            ? setInputValue(formatAmount(value))
            : setInputValue(value)
          }
        />
      </Input>
    </ElementContainer>
  );
};

export default UploanUiInput;
