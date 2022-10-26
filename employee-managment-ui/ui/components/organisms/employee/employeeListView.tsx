import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import {
  FaTrashAlt,
} from "react-icons/fa";
import { EmployeeInterface } from "../../../../interfaces/employeeInterface";
import Table from "ui/components/atoms/table/table";
import { GenderEnum } from "enums/genderEnum";

type Props = {
  employees?: EmployeeInterface[];
  onDelete: Function;
  isLoading: Boolean;
  sortBy: String;
  onSort: Function;
  sortDir: "asc" | "desc";
};
const EmployeeListView: React.FC<Props> = ({
  employees,
  onDelete,
  isLoading,
  sortBy,
  sortDir,
  onSort,
}) => {

  const column = [
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
            onClick={() => onDelete(e._id)}
            size="sm"
          >
            <FaTrashAlt />
          </Button>
      </>
    },
  ]
  

  return (
    <>
    <Table onSort={(key: any, value: any) =>onSort(key,value) } 
        data={employees ?? []} column={column} isLoading={isLoading} 
        sortBy={sortBy} 
        sortDir={sortDir} 
        />
    </>
  );
};

export default EmployeeListView;
