import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import TextField from './TextField';
import { Formik } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/Text Field',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof TextField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <Formik initialValues={{ name: 'Fernando Torres' }} onSubmit={() => { }}>
  <TextField {...args} />
</Formik>;

export const SingleLine = Template.bind({});
export const MultiLine = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SingleLine.args = {
  label: "Name",
  name: "name",
  placeholder: "Your full name"
};

MultiLine.args = {
  ...SingleLine.args,
  name: 'multiline-name',
  multiline: true,
  minRows: 3
}

