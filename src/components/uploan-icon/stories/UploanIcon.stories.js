import React from 'react';

import markdown from 'uploan-icon/README.md';
import { chevronDownSolid } from 'uploan-icon/icons';
import { checkSolid } from 'uploan-icon/icons';
import styled from 'styled-components';

import UploanIcon from 'uploan-icon';

const Storybook = styled.div`
  > div > div {
    display: flex;
    > div {
      width: 40px;
    }
  }
  max-width: 640px;
  code {
    display: block;
    margin-bottom: 12px;
  }
  h4 {
    margin-bottom: 12px;
  }
`;

export default {
  component: UploanIcon,
  decorators: [(storyFn) => (<Storybook>{storyFn()}</Storybook>)],
  parameters: { notes: markdown },
  title: 'Collections|Icons',
};

export const Default = () => (
  <div>
    <h4><code>chevronDownSolid</code></h4>
    <div>
      <div>
        <small><code>12px</code></small>
        <UploanIcon svg={chevronDownSolid()} size="12"/>
      </div>
      <div>
        <small><code>24px</code></small>
        <UploanIcon color="black" svg={chevronDownSolid()} size="24"/>
      </div>
      <div>
        <small><code>36px</code></small>
        <UploanIcon color="red" svg={chevronDownSolid()} size="36"/>
      </div>
    </div>

    <h4><code>checkSolid</code></h4>
    <div>
      <div>
        <small><code>12px</code></small>
        <UploanIcon svg={checkSolid()} size="12"/>
      </div>
      <div>
        <small><code>24px</code></small>
        <UploanIcon color="black" svg={checkSolid()} size="24"/>
      </div>
      <div>
        <small><code>36px</code></small>
        <UploanIcon color="red" svg={checkSolid()} size="36"/>
      </div>
    </div>
  </div>
);

