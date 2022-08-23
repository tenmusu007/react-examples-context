<<<<<<< HEAD
<<<<<<< HEAD
  import React from 'react';
=======
import React from 'react';
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
=======
import React from 'react';
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
import { within, userEvent } from '@storybook/testing-library';

import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

const Template = (args) => <Page {...args} />;

// More on interaction testing: https://storybook.js.org/docs/react/writing-tests/interaction-testing
export const LoggedOut = Template.bind({});

export const LoggedIn = Template.bind({});
LoggedIn.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const loginButton = await canvas.getByRole('button', { name: /Log in/i });
  await userEvent.click(loginButton);
};
