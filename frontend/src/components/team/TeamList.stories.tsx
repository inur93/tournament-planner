import {ComponentStory, ComponentMeta } from '@storybook/react';
import TeamList from './TeamList';
import { teamList } from '../../mockData/mockTeam';

export default {
    title: 'Views/TeamList',
    component: TeamList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof TeamList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TeamList> = (args) => <TeamList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    teams: teamList(10)
}