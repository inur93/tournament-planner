import { ComponentMeta, ComponentStory } from '@storybook/react';

import CreateTournamentForm from './CreateTournamentForm';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Forms/CreateTournamentForm',
  component: CreateTournamentForm,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof CreateTournamentForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CreateTournamentForm> = (args) => <CreateTournamentForm {...args} />;

export const Knockout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Knockout.args = {
  defaultTournamentType: "knockout"
};

