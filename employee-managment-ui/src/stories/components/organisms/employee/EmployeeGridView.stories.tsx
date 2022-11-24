import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EmployeeGridView from '../../../../components/organisms/employee/employeeGridView';

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
  title: 'Components/Organism/Employee/EmployeeGridView',
  component: EmployeeGridView,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof EmployeeGridView>;


const Template: ComponentStory<typeof EmployeeGridView> = (args) => <EmployeeGridView {...args} />;

export const EmployeeGridViewShow = Template.bind({});

EmployeeGridViewShow.args = {
  employees:data
}

export const EmployeeGridViewLoading = Template.bind({});

EmployeeGridViewLoading.args = {
  isLoading:true,
  employees:data
}



