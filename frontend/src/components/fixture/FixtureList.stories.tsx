import { ComponentStory, ComponentMeta } from '@storybook/react';
import FixtureList from './FixtureList';
import { fixture, fixtureList } from '../../mockData/mockFixtures';
import { startOfToday, addHours } from 'date-fns';
export default {
    title: 'Views/FixtureList',
    component: FixtureList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof FixtureList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixtureList> = (args) => <FixtureList {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    fixtures: [
        fixture({}, { omitScore: true }),
        fixture({}, { omitDateTime: true }),
        fixture({ dateTime: addHours(startOfToday(), 18) }, { omitScore: true }),
        ...fixtureList(5)]
}