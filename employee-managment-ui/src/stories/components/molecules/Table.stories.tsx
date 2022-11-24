import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Table from '../../../components/molecules/table/table';
import Image from "next/image";
import { EmployeeInterface } from 'src/services/interfaces/employeeInterface';
import { GenderEnum } from '../../../services/enums/genderEnum';
import Link from "next/link";
import { Button } from 'react-bootstrap';
import { FiEdit2 } from 'react-icons/fi';
import { FaTrashAlt } from 'react-icons/fa';


export default {
  title: 'Components/Molecule/Table',
  component: Table,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
} as ComponentMeta<typeof Table>;
const columns = [
    {
      key: 'photo',
      title: 'Image',
      childCompoent: (e :EmployeeInterface) => <>  <Image
      src={`${e?.photo}`}
      alt={`${e.first_name} ${e.last_name}`}
      width={100}
      height={100}
    /> </>
    },{
      key: 'first_name',
      title: 'First Name',
      isSortable:true
    },{
      key: 'last_name',
      title: 'Last Name',
      isSortable:true
    },{
      key: 'email',
      title: 'Email',
      isSortable:true
    },{
      key: 'number',
      title: 'Phone No',
      isSortable:true
    },{
      key: 'gender',
      title: 'Gender',
      childCompoent:(e:EmployeeInterface) => <>{GenderEnum[e.gender]}</>
    },{
      key: 'action',
      title: 'Action',
      childCompoent:(e:EmployeeInterface) => <>
        <Link href={`/employee/${e._id}/edit`}>
            <Button variant="warning" size="sm">
              <FiEdit2 />
            </Button>
          </Link>{" "}
          <Button
            variant="danger"
            size="sm"
          >
            <FaTrashAlt />
          </Button>
      </>
    },
  ]
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


const Template: ComponentStory<typeof Table> = (args) => <Table {...args} />;

export const TitleShow = Template.bind({});
TitleShow.args = {
  column: columns,
  data:data
};
