import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { FiEdit2 } from "react-icons/fi";
import {
  FaSortAlphaUp,
  FaSortAlphaUpAlt,
  FaSortNumericUp,
  FaSortNumericUpAlt,
  FaTrashAlt,
} from "react-icons/fa";
import { EmployeeInterface } from "./../../../interfaces/employeeInterface";
import { Radio } from "react-loader-spinner";
import NoData from "../noData";

type Props = {
  employees?: EmployeeInterface[];
  onDelete: Function;
  isLoading: Boolean;
  sortBy: String;
  onSort: Function;
  sortDir: "ASC" | "DESC";
};
const EmployeeListView: React.FC<Props> = ({
  employees,
  onDelete,
  isLoading,
  sortBy,
  sortDir,
  onSort,
}) => {
  return (
    <>
      <table className="table table-striped table-inverse table-responsive">
        <thead className="thead-inverse">
          <tr>
            <th>Image</th>
            <th
              onClick={() =>
                onSort(
                  "first_name",
                  sortBy === "first_name" && sortDir === "ASC" ? "DESC" : "ASC"
                )
              }
            >
              First Name{" "}
              {sortBy === "first_name" && sortDir === "ASC" ? (
                <FaSortAlphaUpAlt />
              ) : (
                <FaSortAlphaUp />
              )}
            </th>
            <th
              onClick={() =>
                onSort(
                  "last_name",
                  sortBy === "last_name" && sortDir === "ASC" ? "DESC" : "ASC"
                )
              }
            >
              Last Name{" "}
              {sortBy === "last_name" && sortDir === "ASC" ? (
                <FaSortAlphaUpAlt />
              ) : (
                <FaSortAlphaUp />
              )}
            </th>
            <th
              onClick={() =>
                onSort(
                  "email",
                  sortBy === "email" && sortDir === "ASC" ? "DESC" : "ASC"
                )
              }
            >
              Email{" "}
              {sortBy === "email" && sortDir === "ASC" ? (
                <FaSortAlphaUpAlt />
              ) : (
                <FaSortAlphaUp />
              )}
            </th>
            <th
              onClick={() =>
                onSort(
                  "number",
                  sortBy === "number" && sortDir === "ASC" ? "DESC" : "ASC"
                )
              }
            >
              Phone{" "}
              {sortBy === "number" && sortDir === "ASC" ? (
                <FaSortNumericUpAlt />
              ) : (
                <FaSortNumericUp />
              )}
            </th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            employees &&
            employees?.map((item: EmployeeInterface) => {
              return (
                <tr key={item.id}>
                  <td scope="row">
                    <Image
                      src={`${item?.photo}`}
                      alt={`${item.first_name} ${item.last_name}`}
                      width={100}
                      height={100}
                    />
                  </td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.number}</td>
                  <td>{item.gender}</td>
                  <td>
                    <Link href={`/employee/${item.id}/edit`}>
                      <Button variant="warning" size="sm">
                        <FiEdit2 />
                      </Button>
                    </Link>{" "}
                    <Button
                      variant="danger"
                      onClick={() => onDelete(item.id)}
                      size="sm"
                    >
                      <FaTrashAlt />
                    </Button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <div className="text-center">
        {isLoading && (
          <Radio
            visible={true}
            height="80"
            width="80"
            ariaLabel="radio-loading"
            wrapperStyle={{}}
            wrapperClass="radio-wrapper"
          />
        )}
      </div>
      {employees?.length === 0 && <NoData />}
    </>
  );
};

export default EmployeeListView;
