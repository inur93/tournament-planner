import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SelectComponent from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/Select',
  component: SelectComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof SelectComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SelectComponent> = (args) => <SelectComponent {...args} />;

export const Select = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Select.args = {
  options: [
    { key: '1', label: 'World Cup 2022' },
    { key: '2', label: 'European Championship 2021' },
  ],
  label: "Select a tournament",
  name: "tournamentId"
};

