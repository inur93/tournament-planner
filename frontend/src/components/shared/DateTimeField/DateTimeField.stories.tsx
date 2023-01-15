import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import DateTimeField from './DateTimeField';
import { Formik } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Fields/DateTimeField',
  component: DateTimeField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof DateTimeField>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DateTimeField> = (args) => <Formik initialValues={{ date: new Date() }} onSubmit={() => { }}>
  {(values) => (
    <DateTimeField {...args} />
  )}

</Formik>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: "Start date",
  name: "date",
};
