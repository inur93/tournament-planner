import { ComponentStory, ComponentMeta } from '@storybook/react';
import FixtureScheduleComponent from './FixtureSchedule';
import { knockout } from '../../mockData/mockTournament'

export default {
    title: 'Forms/FixtureSchedule',
    component: FixtureScheduleComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof FixtureScheduleComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FixtureScheduleComponent> = (args) => <FixtureScheduleComponent {...args} />;

export const FixtureSchedule = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
FixtureSchedule.args = {
    tournament: knockout()
}