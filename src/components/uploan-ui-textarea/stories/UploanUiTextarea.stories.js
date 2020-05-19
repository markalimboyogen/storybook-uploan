import React from 'react';

import styled from 'styled-components';

import UploanUiTextarea from '../index';

const Storybook = styled.div`
`;

export default {
  component: UploanUiTextarea,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|Form',
};

export const Textarea = () => (
  <Storybook>
    <UploanUiTextarea
      label="Textarea"
      maxLength={240}
      placeholder="Enter sample text"
      required
      rows={5}
      type="text"
    >
    </UploanUiTextarea>
  </Storybook>
);
