import React from 'react';
import styled from 'styled-components';
import markdown from 'uploan-ui-input/README.md';
import UploanUiInput from 'uploan-ui-input';

const Storybook = styled.div`
  > div {
    margin-bottom: 8px;
  }
`;

export default {
  component: UploanUiInput,
  decorators: [(storyFn) => (<Storybook>{storyFn()}</Storybook>)],
  parameters: { notes: markdown },
  title: 'UI Library|Form',
};

export const InputText = () => (
  <Storybook>
    <div>
      <UploanUiInput
        label="Text"
        maxLength={48}
        type="text"
        placeholder="Enter sample text"
        required
      />
    </div>
    <div>
      <UploanUiInput
        label="Email"
        type="email"
        placeholder="Enter sample email"
        required
      />
    </div>
    <div>
      <UploanUiInput
        label="Password"
        type="password"
        placeholder="Enter sample password"
        required
      />
    </div>
  </Storybook>
);

export const InputAmount = () => (
  <Storybook>
    <div>
      <UploanUiInput
        format="amount"
        label="Amount"
        maxLength={24}
        type="text"
        placeholder="Enter amount"
        required
      />
    </div>
  </Storybook>
);