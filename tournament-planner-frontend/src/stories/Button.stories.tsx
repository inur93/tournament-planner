import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ConfirmButton } from '../components/shared/ConfirmButton';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: ConfirmButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ConfirmButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ConfirmButton> = (args) => <ConfirmButton {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  text: "Confirm",
  children: <div>custom confirm text</div>
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: 'Button',
};

