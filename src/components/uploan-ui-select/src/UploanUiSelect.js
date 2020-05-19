// core
import React, { useState } from 'react';

// styles
import { Select } from '../assets/css/UploanUiSelect.css';
import ElementContainer from 'uploan-styles';

// icons
import { chevronDownSolid } from 'uploan-icon/icons';

// components
import UploanIcon from 'uploan-icon';

const ICON_SIZE = 12;

/**
 * Component for spinner render.
 * 
 * @component
 * @param {Object} propsData
 * @param {string} props.label - Select dropdown label.
 * @param {Array} props.options - Select dropdown list of options.
 * @param {string} props.placeholder - Select dropdown placeholder.
 * @param {boolean} props.required - Flag to determine if select dropdown is
 * required.
 */
const UploanUiSelect = ({
  label,
  name,
  options,
  placeholder,
  required,
}) => {
  const [selectedOption, selectOption] = useState(() => '');

  return (
    <ElementContainer>
      <Select selectedOption={selectedOption}>
        <label>{label}</label>
        <div className="select-dropdown">
          <span>{selectedOption || placeholder}</span>
          <UploanIcon svg={chevronDownSolid()} size={ICON_SIZE} />
          <select
            name={name}
            placeholder={placeholder}
            required={required}
            onChange={({ currentTarget }) => 
              selectOption(currentTarget.value)
            }
          >
            {options.map(({ id, name, value }) =>
              <option
                key={id}
                value={value}
              >
                {name}
              </option>
            )}
          </select>
        </div>
      </Select>
    </ElementContainer>
  );
};

export default UploanUiSelect;
