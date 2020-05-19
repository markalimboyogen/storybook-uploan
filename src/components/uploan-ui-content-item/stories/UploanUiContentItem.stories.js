import React from 'react';

import styled from 'styled-components';

import UploanUiContentItem from '../index';

const Storybook = styled.div`
  max-width: 1024px;
`;

export default {
  component: UploanUiContentItem,
  decorators: [
    (storyFn) => (<Storybook>{storyFn()}</Storybook>),
  ],
  title: 'UI Library|List',
};

export const ContentItem = () => (
  <Storybook>
    <UploanUiContentItem
      buttonLabel="Read more"
      content="Join our speaker Dr. Maria Theresita Escandor on Tuesday, May 19
        at 4 pm via Livestorm as she talks about How to Manage the Mental Health
        of Your Teams. Register here!"
      image="https://uploan.ph/wp-content/uploads/2020/05/Blog-and-Reg-page-Web-2-1-1-768x432.jpg"
      title="How to Manage the Mental Health of Your Teams (Free Live Webinar)"
    >
    </UploanUiContentItem>
  </Storybook>
);
