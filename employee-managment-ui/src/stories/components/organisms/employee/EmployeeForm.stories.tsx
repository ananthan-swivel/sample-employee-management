import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EmployeeForm } from '../../../../components/organisms/employee/employeeForm';


export default {
  title: 'Components/Organism/Employee/EmployeeForm',
  component: EmployeeForm,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EmployeeForm>;


const Template: ComponentStory<typeof EmployeeForm> = (args) => <EmployeeForm {...args} />;

export const EmployeeFormView = Template.bind({});

