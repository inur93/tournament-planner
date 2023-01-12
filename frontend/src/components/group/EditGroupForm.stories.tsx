import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditGroupForm from './EditGroupForm';
import { group } from '../../mockData/mockGroup';

export default {
    title: 'Forms/EditGroupForm',
    component: EditGroupForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof EditGroupForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditGroupForm> = (args) => <EditGroupForm {...args} />;

export const Simple = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Simple.args = {
    group: group()
}