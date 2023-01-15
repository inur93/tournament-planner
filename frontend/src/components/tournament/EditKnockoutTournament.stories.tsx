import {ComponentStory, ComponentMeta } from '@storybook/react';
import EditKnockoutTournamentComponent from './EditKnockoutTournament';
import { knockout } from '../../mockData/mockTournament';

export default {
    title: 'Forms/Edit Knockout Tournament',
    component: EditKnockoutTournamentComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof EditKnockoutTournamentComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditKnockoutTournamentComponent> = (args) => <EditKnockoutTournamentComponent {...args} />;

export const EditKnockoutTournament = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditKnockoutTournament.args = {
    tournament: knockout()
}