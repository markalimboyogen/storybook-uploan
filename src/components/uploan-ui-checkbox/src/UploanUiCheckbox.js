// core
import React, { useEffect, useState } from 'react';

// styles
import { Checkbox } from 'uploan-ui-checkbox/assets/css/UploanUiCheckbox.css';
import ElementContainer from 'uploan-styles';

// icons
import { checkSolid } from 'uploan-icon/icons';

// components
import UploanIcon from 'uploan-icon';

/**
 * Component to render checkbox.
 * @param {Object} props
 * @param {boolean} props.checked:initialCheckedState - Initial attribute
 * checked value of checkbox.
 * @param {string} props.label - Label associated with the checkbox.
 * @param {string} props.name - Attribute name of checkbox element.
 * @param {boolean} props.required - Determines if checkbox should be required.
 * @returns {ReactElement}
 */
const UploanUiCheckbox = ({
  checked: initialCheckedState,
  label,
  name,
  required,
}) => {
  const [checked, setChecked] = useState(() => false);

  useEffect(() => {
    setChecked(initialCheckedState);
  }, [initialCheckedState]);

  return (
    <ElementContainer>
      <Checkbox
        checked={checked}
      >
        <input
          name={name}
          required={required}
          type="checkbox"
          onChange={({ currentTarget }) => 
            setChecked(currentTarget.checked)
          }
        />
        <span>
          {checked && <UploanIcon color="white" svg={checkSolid()} />}
        </span>
        {label}
      </Checkbox>
    </ElementContainer>
  );
};

export default UploanUiCheckbox;
