module.exports = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  stories: [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/Components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
<<<<<<< HEAD
=======
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
=======
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
