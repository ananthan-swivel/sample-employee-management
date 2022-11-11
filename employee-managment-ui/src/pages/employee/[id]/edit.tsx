import React from "react";
import  { useRouter } from "next/router";
import EditEmployee from "../../../../src/components/templates/employee/edit";

const EditEmployeePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <EditEmployee id={id} />
  );
};

export default EditEmployeePage;
