import React from 'react';
import styled from 'styled-components';
import markdown from 'uploan-ui-button/README.md';
import UploanUiButton from 'uploan-ui-button';

const Storybook = styled.div`
  max-width: 640px;
  & button {
    margin: 4px 8px 4px 0;
  }
`;

export default {
  component: UploanUiButton,
  decorators: [(storyFn) => (<Storybook>{storyFn()}</Storybook>)],
  parameters: { notes: markdown },
  title: 'UI Library|Button',
};

export const Default = () => (
  <div>
    <p>Default</p>
    <UploanUiButton
      label="Nothing special"
    />
    <UploanUiButton
      ghost
      label="Can you see me?"
    />

    <p>Rounded</p>
    <UploanUiButton
      label="Notice me!"
      round
    />
    <UploanUiButton
      ghost
      label="I'm sure you can see me now"
      round
    />

    <p>Full width</p>
    <UploanUiButton
      fullWidth
      label="I'm looooong"
    />
    <UploanUiButton
      fullWidth
      ghost
      label="I'm looooong"
    />
    <UploanUiButton
      fullWidth
      label="I'm looooong"
      round
    />
    <UploanUiButton
      fullWidth
      ghost
      label="I'm looooong"
      round
    />

    <p>Disabled</p>
    <UploanUiButton
      disabled
      label="I'm unclickable!"
    />

    <UploanUiButton
      disabled
      label="I'm unclickable!"
      round
    />

    <p>Loading</p>
    <UploanUiButton
      loading
      label="Hmmmm..."
    />
    <UploanUiButton
      ghost
      loading
      label="Hmmmm..."
    />
    <UploanUiButton
      loading
      label="Hmmmm..."
      round
    />
    <UploanUiButton
      ghost
      loading
      label="Hmmmm..."
      round
    />
  </div>
);

