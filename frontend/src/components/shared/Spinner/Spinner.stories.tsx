import { ComponentStory, ComponentMeta } from '@storybook/react'
import SpinnerComponent from './Spinner'

export default {
  title: 'Shared/Spinner',
  component: SpinnerComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof SpinnerComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SpinnerComponent> = (args) => <SpinnerComponent {...args} />

export const Spinner = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Spinner.args = {
  show: true
}
