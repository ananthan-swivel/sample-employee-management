import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEmployeePage from '../../../pages/employee/add';


export default {
  title: 'Page/Employee/Add',
  component: AddEmployeePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AddEmployeePage>;


const Template: ComponentStory<typeof AddEmployeePage> = () => <AddEmployeePage />;

export const AddEmployeePageView = Template.bind({});

