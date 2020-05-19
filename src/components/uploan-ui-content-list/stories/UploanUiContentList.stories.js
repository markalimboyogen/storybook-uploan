import React from 'react';

import styled from 'styled-components';

import UploanUiContentList from '../index';

import mockData from '../mock/data.json';

const Storybook = styled.div`
  > div {
    margin-right: 8px;
  }
`;

export default {
  component: UploanUiContentList,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|List',
};

export const ContentList = () => (
  <Storybook>
    <UploanUiContentList data={mockData.data}/>
  </Storybook>
);
