import React from 'react';
import { addDecorator } from '@storybook/react';
import { GlobalStyles } from '../src/storybookGlobal.css';

addDecorator((storyFn) => (
  <div>
    <GlobalStyles />
    {storyFn()}
  </div>
));