import {ComponentStory, ComponentMeta } from '@storybook/react';
import Standings from './Standings';
import { teamList } from '../../mockData/mockTeam';

export default {
    title: 'Views/Standings',
    component: Standings,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Standings>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Standings> = (args) => <Standings {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
    teams: teamList(5)
}