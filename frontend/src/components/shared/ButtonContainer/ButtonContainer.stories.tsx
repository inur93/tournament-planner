import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '../Button/Button';
import ButtonContainerComponent from './ButtonContainer';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Shared/ButtonContainer',
  component: ButtonContainerComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {

  },
} as ComponentMeta<typeof ButtonContainerComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonContainerComponent> = (args) => <ButtonContainerComponent {...args} />;

export const ButtonContainer = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ButtonContainer.args = {
  children: <>
    <Button primary>First</Button>
    <Button >Second</Button>
  </>
};

