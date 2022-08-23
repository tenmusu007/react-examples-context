import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Header {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'Jane Doe',
<<<<<<< HEAD
<<<<<<< HEAD
    age: '23'
=======
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
=======
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
