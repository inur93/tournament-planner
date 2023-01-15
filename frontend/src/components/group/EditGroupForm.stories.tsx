import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditGroupFormComponent from './EditGroupForm';
import { group } from '../../mockData/mockGroup';

export default {
    title: 'Forms/EditGroupForm',
    component: EditGroupFormComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof EditGroupFormComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditGroupFormComponent> = (args) => <EditGroupFormComponent {...args} />;

export const EditGroupForm = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
EditGroupForm.args = {
    group: group()
}