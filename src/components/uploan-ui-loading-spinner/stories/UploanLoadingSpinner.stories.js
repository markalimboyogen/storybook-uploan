import React from 'react';

import styled from 'styled-components';

import UploanUiLoadingSpinner from '../index';

const Storybook = styled.div`
  > div {
    margin-right: 8px;
  }
`;

export default {
  component: UploanUiLoadingSpinner,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|Loader',
};

export const Spinner = () => (
  <Storybook>
    <p>Small</p>
    <UploanUiLoadingSpinner />
    <UploanUiLoadingSpinner
      color="black"
    >
    </UploanUiLoadingSpinner>
    <UploanUiLoadingSpinner
      color="red"
    >
    </UploanUiLoadingSpinner>

    <p>Medium</p>
    <UploanUiLoadingSpinner md/>
    <UploanUiLoadingSpinner
      color="black"
      md
    >
    </UploanUiLoadingSpinner>
    <UploanUiLoadingSpinner
      color="red"
      md
    >
    </UploanUiLoadingSpinner>

    <p>Large</p>
    <UploanUiLoadingSpinner lg/>
    <UploanUiLoadingSpinner
      color="black"
      lg
    >
    </UploanUiLoadingSpinner>
    <UploanUiLoadingSpinner
      color="red"
      lg
    >
    </UploanUiLoadingSpinner>
  </Storybook>
);
