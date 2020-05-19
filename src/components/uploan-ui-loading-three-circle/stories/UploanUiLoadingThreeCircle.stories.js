import React from 'react';

import styled from 'styled-components';

import UploanUiLoadingThreeCircle from '../index';

const Storybook = styled.div`
  > div {
    margin-bottom: 12px;
  }
`;

export default {
  component: UploanUiLoadingThreeCircle,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|Loader',
};

export const ThreeCircle = () => (
  <Storybook>
    <p>Small</p>
    <UploanUiLoadingThreeCircle />
    <UploanUiLoadingThreeCircle
      color="black"
    >
    </UploanUiLoadingThreeCircle>
    <UploanUiLoadingThreeCircle
      color="red"
    >
    </UploanUiLoadingThreeCircle>

    <p>Medium</p>
    <UploanUiLoadingThreeCircle md/>
    <UploanUiLoadingThreeCircle
      color="black"
      md
    >
    </UploanUiLoadingThreeCircle>
    <UploanUiLoadingThreeCircle
      color="red"
      md
    >
    </UploanUiLoadingThreeCircle>

    <p>Large</p>
    <UploanUiLoadingThreeCircle lg/>
    <UploanUiLoadingThreeCircle
      color="black"
      lg
    >
    </UploanUiLoadingThreeCircle>
    <UploanUiLoadingThreeCircle
      color="red"
      lg
    >
    </UploanUiLoadingThreeCircle>
  </Storybook>
);
