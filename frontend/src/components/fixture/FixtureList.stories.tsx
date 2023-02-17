import { ComponentStory, ComponentMeta } from '@storybook/react';
import FixtureListComponent from './FixtureList';
import { fixture, fixtureList } from '../../mockData/mockFixtures';
import { startOfToday, addHours } from 'date-fns';
export default {
    title: 'Views/FixtureList',
    component: FixtureListComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof FixtureListComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixtureListComponent> = (args) => <FixtureListComponent {...args} />;

export const FixtureList = Template.bind({});
export const EmptyList = Template.bind({});

// More on args: https://storybook.js.org/docs/react/writing-stories/args
FixtureList.args = {
    fixtures: [
        fixture({}, { omitScore: true }),
        fixture({}, { omitDateTime: true }),
        fixture({ dateTime: addHours(startOfToday(), 18) }, { omitScore: true }),
        ...fixtureList(5)]
}

EmptyList.args = {
    fixtures: []
}