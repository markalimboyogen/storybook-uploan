import React from 'react';

import styled from 'styled-components';

import UploanUiSelect from '../index';

const Storybook = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

export default {
  component: UploanUiSelect,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|Form',
};

const options = [
  {
    id: '1',
    name: 'optionOne',
    value: 'Option 1',
  },
  {
    id: '2',
    name: 'optionTwo',
    value: 'Option 2',
  },
  {
    id: '3',
    name: 'optionThree',
    value: 'Option 3',
  },
];

export const Select = () => (
  <Storybook>
    <div>
      <UploanUiSelect
        label="Select"
        options={options}
        placeholder="Select from list"
        required
      >
      </UploanUiSelect>
    </div>
  </Storybook>
);
