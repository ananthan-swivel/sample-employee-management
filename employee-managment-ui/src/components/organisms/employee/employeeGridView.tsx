import Link from "next/link";
import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import Image from "next/image";
import { Radio } from "react-loader-spinner";
import NoData from '../../atoms/no-data/noData';
import { GenderEnum } from "../../../../src/services/enums/genderEnum";
import { EmployeeInterface } from "../../../../src/services/interfaces/employeeInterface";

type Props = {
  employees?: EmployeeInterface[];
  onDelete: Function;
  isLoading: Boolean;
};
const EmployeeGridView: React.FC<Props> = ({
  employees,
  onDelete,
  isLoading,
}) => {

  const gender = (gender: GenderEnum) => {
    // TODO Gender
    return <> {GenderEnum[gender]}</>;
  };
  return (
    <div className="row">
      {isLoading && (
        <Radio
          visible={true}
          height="100"
          width="100"
          ariaLabel="radio-loading"
          wrapperStyle={{}}
          wrapperClass="radio-wrapper"
        />
      )}

      {
        employees?.length ===0 && <NoData />
      }
      { !isLoading&& employees?.map((employee: EmployeeInterface) => {
        return (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-1 p-1" key={employee._id}>
            <Card style={{ width: "18rem" }}>
              <div className="card-img-top">
                <Image
                  src={`${employee?.photo}`}
                  alt={`${employee.first_name} ${employee.last_name}`}
                  width={500}
                  height={500}
                />
              </div>
              <Card.Body>
                <Card.Title>
                  {employee.first_name} {employee.last_name}
                </Card.Title>
                <Card.Text>
                  <div>{employee.email}</div>
                  <div>{employee.number}</div>

                  <div>{GenderEnum[employee.gender]}</div>
                </Card.Text>
                <Link href={`/employee/${employee._id}/edit`}>
                  <Button variant="warning" size="sm">
                    <FiEdit2 />
                  </Button>
                </Link>{" "}
                <Button
                  variant="danger"
                  onClick={() => onDelete(employee._id)}
                  size="sm"
                >
                  <FaTrashAlt />
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default EmployeeGridView;
