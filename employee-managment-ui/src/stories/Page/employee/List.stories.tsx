import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListEmployeePage from '../../../pages/employee/list';


export default {
  title: 'Page/Employee/Index',
  component: ListEmployeePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListEmployeePage>;


const Template: ComponentStory<typeof ListEmployeePage> = () => <ListEmployeePage />;

export const ListEmployeePageView = Template.bind({});

