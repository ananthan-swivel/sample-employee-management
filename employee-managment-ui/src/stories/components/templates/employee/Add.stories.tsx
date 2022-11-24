import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AddEmployee from '../../../../components/templates/employee/add';


export default {
  title: 'Components/Template/Employee/Add',
  component: AddEmployee,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof AddEmployee>;


const Template: ComponentStory<typeof AddEmployee> = () => <AddEmployee />;

export const EmployeeAddView = Template.bind({});

