import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import { GenderEnum } from "../../enums/genderEnum";
import { employeeSelector } from "../../redux/employee/selector";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { createEmployees, clearEmployees } from '../../redux/employee/actions';
import { EmployeeInterface } from "../../interfaces/employeeInterface";
import { ResponseStatus } from "../../enums/responseStatus";
import { Circles } from "react-loader-spinner";
import { Store } from "react-notifications-component";
import Router from 'next/router'
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';

const AddEmployee = () => {
  const [data, setData] = useState({} as EmployeeInterface);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();

  const { error, status, msg ,key } = useAppSelector(employeeSelector);

  const formSubmit = () => {
    setIsSubmitted(true);
    dispatch(createEmployees({ data: data as EmployeeInterface }));
};

    useEffect(() => {
      dispatch(clearEmployees())
    }, []);
  const onChangeForm = (e: any) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setIsLoading(status === ResponseStatus.LOADING);
    if (status === ResponseStatus.LOADED && key ==='add') {
      Store.addNotification({
        title: "Success!",
        message: msg,
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 5000,
          onScreen: true,
        },
      });
    //   dispatch(clearEmployees())
      Router.push('/employee/list')
    }
  }, [status]);

  

  return (
    <div className="py-5">
      <div className="title-bar text-dark d-flex justify-content-between p-1">
        <div>
          <FcBusinessman size={50} /> <strong>Add Employee</strong>
        </div>
      </div>
      <div className="main-container ">
        <div className="py-3 mx-n4 d-flex justify-content-end">
          <div className="px-2">
          <Link href={"/employee/list"}>
            <Button >
              <BiArrowBack />  View Employees
            </Button>
          </Link>
          </div>
        </div>
        <Card
          className={`needs-validation ${isSubmitted ? "was-validated" : ""}`}
        >
          <Card.Body>
            <div className="col-md-12">
              <label className="form-label">First Name</label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className={`form-control  ${
                    error?.first_name ? "invalid" : ""
                  }`}
                  value={data.first_name}
                  onChange={(e) => onChangeForm(e)}
                  placeholder="Enter first name"
                  name="first_name"
                  aria-describedby="inputGroupPrepend"
                  min="6"
                  max="10"
                  required
                />
                {error?.first_name && (
                  <div className="invalid-feedback">
                    {error?.first_name.map((msg) => (
                      <div>{msg}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label">Last Name</label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control "
                  value={data.last_name}
                  onChange={(e) => onChangeForm(e)}
                  placeholder="Enter last name"
                  name="last_name"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                {error?.last_name && (
                  <div className="invalid-feedback">
                    {error?.last_name.map((msg) => (
                      <div>{msg}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label">Email</label>
              <div className="input-group has-validation">
                <input
                  type="email"
                  className="form-control "
                  value={data.email}
                  onChange={(e) => onChangeForm(e)}
                  name="email"
                  placeholder="Enter email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                {error?.email && (
                  <div className="invalid-feedback">
                    {error?.email.map((msg) => (
                      <div>{msg}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label">Phone Number</label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control "
                  value={data.number}
                  onChange={(e) => onChangeForm(e)}
                  name="number"
                  placeholder="Enter phone number"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                {error?.number && (
                  <div className="invalid-feedback">
                    {error?.number.map((msg) => (
                      <div>{msg}</div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-12">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                onChange={(e) => onChangeForm(e)}
                name="gender"
                required
              >
                {Object.keys(GenderEnum).map((key) => {
                  return (
                    <option key={key} value={key}>
                      {GenderEnum[key]}
                    </option>
                  );
                })}
              </select>
              {error?.gender && (
                <div className="invalid-feedback">
                  {error?.gender.map((msg) => (
                    <div>{msg}</div>
                  ))}
                </div>
              )}
            </div>
            <div className="py-2">
              <Button
                variant="primary"
                type="submit"
                onClick={() => formSubmit()}
                className="d-flex"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Circles
                    height="20"
                    width="20"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperClass="py-1 mx-2"
                    visible={true}
                  />
                ) : (
                  ""
                )}{" "}
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default AddEmployee;
