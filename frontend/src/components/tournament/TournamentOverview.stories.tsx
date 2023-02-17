import { ComponentMeta, ComponentStory } from '@storybook/react';

import { knockout } from '../../mockData/mockTournament';
import TournamentOverview from './TournamentOverview';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Viewss/Tournament Overview',
  component: TournamentOverview,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof TournamentOverview>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TournamentOverview> = (args) => <TournamentOverview {...args} />;

export const Knockout = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Knockout.args = {
  tournament: knockout()
};

