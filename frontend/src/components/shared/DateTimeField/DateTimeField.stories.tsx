import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import DateTimeFieldComponent from './DateTimeField';
import { Formik } from 'formik';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/DateTimeField',
  component: DateTimeFieldComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof DateTimeFieldComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof DateTimeFieldComponent> = (args) => <Formik initialValues={{ date: new Date() }} onSubmit={() => { }}>
  {(values) => (
    <DateTimeFieldComponent {...args} />
  )}

</Formik>;

export const DateTimeField = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
DateTimeField.args = {
  label: "Start date",
  name: "date",
};
