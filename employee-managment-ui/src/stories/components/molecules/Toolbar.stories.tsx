import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Toolbar from '../../../components/molecules/toolbar/toolbar';


export default {
  title: 'Components/Molecule/ToolBar',
  component: Toolbar,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Toolbar>;


const Template: ComponentStory<typeof Toolbar> = (args) => <Toolbar {...args} />;


// TODO : Select box error not rerender the box as invalid but the msg showing as excepted.

export const ToolbarListView = Template.bind({});
ToolbarListView.args = {
    onSearch:{},
    title:"Employee",
    isList:true,
};

export const ToolbarAddView = Template.bind({});
ToolbarAddView.args = {
    title:"Employee",
    isList:false,
};