import { ComponentMeta, ComponentStory } from '@storybook/react';
import { fixture } from '../../mockData/mockFixtures';
import UpdateFixtureFormComponent from './UpdateFixtureForm';

export default {
    title: 'Forms/UpdateFixtureForm',
    component: UpdateFixtureFormComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof UpdateFixtureFormComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpdateFixtureFormComponent> = (args) => <UpdateFixtureFormComponent {...args} />;

export const UpdateFixtureForm = Template.bind({});
const mockFixture = fixture();
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UpdateFixtureForm.args = {
    fixture: mockFixture
}