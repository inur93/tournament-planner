import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fixture } from '../../mockData/mockFixtures';
import UpdateFixtureForm from './UpdateFixtureForm';

export default {
    title: 'Fixture/UpdateFixtureForm',
    component: UpdateFixtureForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof UpdateFixtureForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpdateFixtureForm> = (args) => <UpdateFixtureForm {...args} />;

export const Basic = Template.bind({});
const mockFixture = fixture();
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    fixture: mockFixture
}