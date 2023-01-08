import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Select from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/Select',
  component: Select,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof Select>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
  options: [
    { key: '1', label: 'World Cup 2022' },
    { key: '2', label: 'European Championship 2021' },
  ],
  label: "Select a tournament",
  name: "tournamentId"
};

