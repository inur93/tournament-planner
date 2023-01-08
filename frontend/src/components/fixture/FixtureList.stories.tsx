import { ComponentStory, ComponentMeta } from '@storybook/react';
import FixtureList from './FixtureList';
import { fixture, fixtureList } from '../../mockData/mockFixtures';
import { startOfToday, addHours } from 'date-fns';
export default {
    title: 'TournamentPlanner/FixtureList',
    component: FixtureList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof FixtureList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixtureList> = (args) => <FixtureList {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
    fixtures: [
        fixture({}, { omitScore: true }),
        fixture({}, { omitDateTime: true }),
        fixture({ dateTime: addHours(startOfToday(), 18) }, { omitScore: true }),
        ...fixtureList(5)]
}