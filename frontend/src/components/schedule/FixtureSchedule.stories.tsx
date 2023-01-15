import { ComponentStory, ComponentMeta } from '@storybook/react';
import FixtureSchedule from './FixtureSchedule';
import { knockout } from '../../mockData/mockTournament'

export default {
    title: 'Forms/FixtureSchedule',
    component: FixtureSchedule,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof FixtureSchedule>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixtureSchedule> = (args) => <FixtureSchedule {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    tournament: knockout()
}