import React from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
<<<<<<< HEAD
<<<<<<< HEAD
  title: 'Example/Button/Test',
=======
  title: 'Example/Button',
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
=======
  title: 'Example/Button',
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
<<<<<<< HEAD
<<<<<<< HEAD
  primary: false,
  label: 'Button',
  size: 'large',
  backgroundColor: "orange"
=======
  primary: true,
  label: 'Button',
>>>>>>> 1498e1b21e679180dd6295329dc0b0da5ab64ed1
=======
  primary: true,
  label: 'Button',
>>>>>>> 2c17039cd23af36b24fe5ec894fd15ff260be88e
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
