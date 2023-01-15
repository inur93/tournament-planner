import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DialogComponent from './Dialog';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/Dialog',
  component: DialogComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof DialogComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DialogComponent> = (args) => <DialogComponent {...args} />;

export const Dialog = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Dialog.args = {
  id: "simple",
  title: "Are you sure?",
  description: "This operation cannot be undone. Are you sure you want to continue",
  open: true
};

