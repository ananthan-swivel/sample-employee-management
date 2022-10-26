import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FcBusinessman } from "react-icons/fc";
import { employeeSelector } from "../../../../redux/employee/selector";
import { useAppDispatch, useAppSelector } from "../../../../redux/hooks";
import {
  clearEmployees,
  getOneEmployees,
  updateEmployees,
} from "../../../../redux/employee/actions";
import { EmployeeInterface } from "../../../../interfaces/employeeInterface";
import { ResponseStatus } from "../../../../enums/responseStatus";
import { Circles } from "react-loader-spinner";
import { Store } from "react-notifications-component";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { BiArrowBack } from "react-icons/bi";
import { EmployeeForm } from "../../organisms/employee/employeeForm"
import Toolbar from "ui/components/molecules/toolbar/toolbar";
import Title from "ui/components/atoms/title/title";


type Props = {
    id?: string | string[];
  };
const EditEmployee: React.FC<Props> = ({
    id
    }) => {
  const [editData, setEditData] = useState({} as EmployeeInterface);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { data, error, status, msg, key } = useAppSelector(employeeSelector);

  const formSubmit = () => {
    setIsSubmitted(true);
    id &&
      dispatch(
        updateEmployees({ id: id, data: editData as EmployeeInterface })
      );
  };

  useEffect(() => {
    id && dispatch(getOneEmployees({ id: id }));
  }, [id]);
  useEffect(() => {
    setEditData(data[0]);
  }, [data]);
  

  const onChangeForm = (e: any) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setIsLoading(status === ResponseStatus.LOADING);
    if (status === ResponseStatus.LOADED && key === "update") {
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
      Router.push("/employee/list");
    }
  }, [status]);

  return (
    <div className="py-5">
      <Title title='Edit Employees' iconComp={<FcBusinessman size={50} />}/>

      <div className="main-container">
      <Toolbar title='Employee' forwardLink='/employee/list'   />
        <Card
          className={`needs-validation ${isSubmitted ? "was-validated" : ""}`}
        >
          <Card.Body>
            <EmployeeForm data={editData} error={error} onChangeForm={(e) => onChangeForm(e)}/>
           
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

export default EditEmployee;
