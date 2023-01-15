import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';


import ModalComponent from './Modal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/Modal',
  component: ModalComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof ModalComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalComponent> = (args) => <ModalComponent {...args} />;

export const Modal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Modal.args = {
  open: true,
  children: <>
    This is some content
  </>
};

