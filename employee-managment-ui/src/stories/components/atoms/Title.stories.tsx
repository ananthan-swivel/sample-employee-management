import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '../../../components/atoms/title/title';
import { FcBusinessman } from 'react-icons/fc';


export default {
  title: 'Components/Atoms/Title',
  component: Title,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
} as ComponentMeta<typeof Title>;


const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const TitleShow = Template.bind({});
TitleShow.args = {
  title: 'Employee Management',
  iconComp:<FcBusinessman size={50} />
};
