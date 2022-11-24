import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeListView from '../../../../components/organisms/employee/employeeListView';

const data = [
  {
      "_id":"634f7ef880f6c360ce879051",
      "first_name": "Henri",
      "last_name": "Rodriguez",
      "email": "Darrin_Rippin@gmail.com",
      "number": "0771277218",
      "gender": "M",
      "photo": "https://randomuser.me/api/portraits/men/92.jpg",
  },
  {
      "_id":"634f7ef880f6c360ce879052",
      "first_name":"Lindsay",
      "last_name":"Herman",
      "email":"Ewald.Kunde@gmail.com",
      "number":"0771274218",
      "gender": "F",
      "photo":"https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
      "_id":"634f7ef880f6c360ce879053",
      "first_name":"Gerda",
      "last_name":"Trantow",
      "email":"Mauricio.Stehr@yahoo.com",
      "number":"0771277681",
      "gender": "NA",
      "photo":"https://randomuser.me/api/portraits/men/85.jpg",
  },
  ]

export default {
  title: 'Components/Organism/Employee/EmployeeListView',
  component: EmployeeListView,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EmployeeListView>;


const Template: ComponentStory<typeof EmployeeListView> = (args) => <EmployeeListView {...args} />;

export const EmployeeListViewShow = Template.bind({});

EmployeeListViewShow.args = {
  employees:data
}

export const EmployeeListViewLoading = Template.bind({});

EmployeeListViewLoading.args = {
  isLoading:true
}



