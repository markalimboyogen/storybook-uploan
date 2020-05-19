import React from 'react';
import styled from 'styled-components';
import markdown from 'uploan-ui-checkbox/README.md';
import UploanUiCheckbox from 'uploan-ui-checkbox';

const Storybook = styled.div`
  > div, > div label {
    margin-bottom: 8px;
  }
`;

export default {
  component: UploanUiCheckbox,
  decorators: [(storyFn) => (<Storybook>{storyFn()}</Storybook>)],
  parameters: { notes: markdown },
  title: 'UI Library|Form',
};

export const Checkbox = () => (
  <Storybook>
    <div>
      <UploanUiCheckbox
        label="Checkbox 1"
        name="checkbox1"
        required
      >
      </UploanUiCheckbox>
      <UploanUiCheckbox
        checked
        label="Checkbox 2"
        name="checkbox2"
        required
      >
      </UploanUiCheckbox>
    </div>
  </Storybook>
);
