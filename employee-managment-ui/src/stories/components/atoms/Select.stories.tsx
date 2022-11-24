import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Select from '../../../components/atoms/input/select';


export default {
  title: 'Components/Atoms/Select',
  component: Select,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Select>;


const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;



export const SelectOptions = Template.bind({});
SelectOptions.args = {
  label:'Select Options',
  name:'select-box',
  options:[
    {lable:"Testing1" , value:"testing1"},
    {lable:"Testing2" , value:"testing2"},
    {lable:"Testing3" , value:"testing3"},
    {lable:"Testing4" , value:"testing4"},
  ],
  error:[],
  value:'testing3',
};
