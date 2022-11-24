import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListEmployee from '../../../../components/templates/employee/list';


export default {
  title: 'Components/Template/Employee/Index',
  component: ListEmployee,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListEmployee>;


const Template: ComponentStory<typeof ListEmployee> = () => <ListEmployee />;

export const ListEmployeeView = Template.bind({});

