import { ComponentStory, ComponentMeta } from '@storybook/react'
import TournamentListComponent from './TournamentList'
import { knockout } from '../../mockData/mockTournament'

export default {
  title: 'Views/TournamentList',
  component: TournamentListComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {}
} as ComponentMeta<typeof TournamentListComponent>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TournamentListComponent> = (args) => <TournamentListComponent {...args} />

export const TournamentList = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TournamentList.args = {
  tournaments: [knockout(), knockout(), knockout()]
}
