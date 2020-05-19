const path = require('path');

module.exports = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-notes/register',
    '@storybook/addon-storysource',
    '@storybook/preset-create-react-app',
  ],
  stories: ['../src/components/**/stories/*.stories'],
  webpackFinal: (config) => ({
    ...config, 
    resolve: {
      modules: [
        path.resolve(__dirname, '../src/components'),
        'node_modules',
      ],
    },
  }),
};