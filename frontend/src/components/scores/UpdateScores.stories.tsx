import { ComponentStory, ComponentMeta } from '@storybook/react';
import UpdateScoresComponent from './UpdateScores';
import { fixtureList } from '../../mockData/mockFixtures';
import { FixtureDto } from '../../api/ApiClient';

export default {
    title: 'Forms/Update Scores',
    component: UpdateScoresComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof UpdateScoresComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof UpdateScoresComponent> = (args) => <UpdateScoresComponent {...args} />;

export const UpdateScores = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
UpdateScores.args = {
    fixtures: [...fixtureList(10), ...fixtureList(10, { omitScore: true })],
    onSave: async (fixture: FixtureDto) => { }
}