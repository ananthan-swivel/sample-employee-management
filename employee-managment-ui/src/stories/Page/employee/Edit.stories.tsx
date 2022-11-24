import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditEmployeePage from '../../../pages/employee/[id]/edit';


export default {
  title: 'Page/Employee/Edit',
  component: EditEmployeePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EditEmployeePage>;


const Template: ComponentStory<typeof EditEmployeePage> = () => <EditEmployeePage />;

export const EditEmployeePageView = Template.bind({});
EditEmployeePageView.parameters = {
  nextRouter: {
    path: "/employee/[id]",
    asPath: "/profile/lifeiscontent",
    query: {
      id: "lifeiscontent",
    },
  },
};
