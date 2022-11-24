import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from '../../../components/atoms/parts/Header';


export default {
  title: 'Components/Atoms/Header',
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Header>;


const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderShow = Template.bind({});
HeaderShow.args = {
  title: 'Employee Management'
};
