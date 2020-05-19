// core
import React from 'react';

// styles
import ElementContainer from 'uploan-styles';
import { Button } from 'uploan-ui-button/assets/css/UploanUiButton.css';

// components
import UploanUiLoadingSpinner from 'uploan-ui-loading-spinner';

/**
 * Component to render button.
 * @param {Object} props
 * @param {boolean} props.disabled - Determines if button should have no
 * background. 
 * @param {string} props.fullWidth - Determines if button should have a width
 * of 100%.
 * @param {boolean} props.ghost - Determines if button should only have borders
 * and no background.
 * @param {string} props.label - Text to be displayed inside button.
 * @param {boolean} props.loading - Determines if button show a loading spinner.
 * @param {boolean} props.round - Determines if button should be rounded.
 * @returns {ReactElement}
 */
const UploanUiButton = ({
  disabled,
  fullWidth,
  ghost,
  label,
  loading,
  round,
}) => (
  <ElementContainer>
    <Button
      disabled={disabled}
      fullWidth={fullWidth}
      ghost={ghost}
      loading={loading ? 1 : 0}
      round={round}
    >
      {loading
        ? <UploanUiLoadingSpinner />
        : label
      }
    </Button>
  </ElementContainer>
);

export default UploanUiButton;
