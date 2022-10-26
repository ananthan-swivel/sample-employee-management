import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import { Circles } from "react-loader-spinner";
import { Store } from "react-notifications-component";
import Router from 'next/router'
import Link from 'next/link';
import { BiArrowBack } from "react-icons/bi";
import { EmployeeForm } from "ui/components/organisms/employee/employeeForm";
import { EmployeeInterface } from "interfaces/employeeInterface";
import { useAppDispatch, useAppSelector } from "redux/hooks";
import { employeeSelector } from "redux/employee/selector";
import { ResponseStatus } from "enums/responseStatus";
import { clearEmployees, createEmployees } from "redux/employee";
import Toolbar from "ui/components/molecules/toolbar/toolbar";
import Title from "ui/components/atoms/title/title";

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
      <Title title='Add Employees' iconComp={<FcBusinessman size={50} />}/>

      <div className="main-container ">
        <Toolbar title='Employee' forwardLink='/employee/list'   />
        <Card
          className={`needs-validation ${isSubmitted ? "was-validated" : ""}`}
        >
          <Card.Body>
            <EmployeeForm data={data} error={error} onChangeForm={(e) => onChangeForm(e)}/>
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
