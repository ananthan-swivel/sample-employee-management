import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditEmployee from '../../../../components/templates/employee/edit';


export default {
  title: 'Components/Template/Employee/Edit',
  component: EditEmployee,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EditEmployee>;


const Template: ComponentStory<typeof EditEmployee> = () => <EditEmployee />;

export const EditEmployeeView = Template.bind({});

