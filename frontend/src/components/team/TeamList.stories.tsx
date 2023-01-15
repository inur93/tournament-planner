import {ComponentStory, ComponentMeta } from '@storybook/react';
import TeamListComponent from './TeamList';
import { teamList } from '../../mockData/mockTeam';

export default {
    title: 'Views/TeamList',
    component: TeamListComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof TeamListComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamListComponent> = (args) => <TeamListComponent {...args} />;

export const TeamList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TeamList.args = {
    teams: teamList(10)
}