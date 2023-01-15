import {ComponentStory, ComponentMeta } from '@storybook/react';
import StandingsComponent from './Standings';
import { teamList } from '../../mockData/mockTeam';

export default {
    title: 'Views/Standings',
    component: StandingsComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof StandingsComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StandingsComponent> = (args) => <StandingsComponent {...args} />;

export const Standings = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Standings.args = {
    teams: teamList(5)
}