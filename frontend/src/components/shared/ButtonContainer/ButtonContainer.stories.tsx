import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';
import ButtonContainer from './ButtonContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/ButtonContainer',
  component: ButtonContainer,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof ButtonContainer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonContainer> = (args) => <ButtonContainer {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  children: <>
    <Button primary>First</Button>
    <Button >Second</Button>
  </>
};

