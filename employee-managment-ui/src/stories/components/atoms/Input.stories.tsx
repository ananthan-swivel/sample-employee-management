import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../../../components/atoms/input/Input';


export default {
  title: 'Components/Atoms/Input',
  component: Input,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Input>;


const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Search = Template.bind({});
Search.args = {
  placeholder: 'Search Employee',
  name:'search',
  value:''
};

export const InputField = Template.bind({});
InputField.args = {
  label: 'First name',
  placeholder: 'Enter first name',
  name:'first_name',
  value:'John',
  error:[]
};

