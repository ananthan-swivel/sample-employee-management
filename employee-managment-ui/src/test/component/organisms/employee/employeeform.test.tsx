import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import { EmployeeForm } from "../../../../components/organisms/employee/employeeForm";

const data = {
        "_id":"634f7ef880f6c360ce879051",
        "first_name": "Henri",
        "last_name": "Rodriguez",
        "email": "Darrin_Rippin@gmail.com",
        "number": "0771277218"
    }
describe("Employee Form component testing", () => {
  it("Employee Form placeholder testing", async () => {
    const firstNamePlaceholder = 'Enter first name'
    const lastNamePlaceholder = 'Enter last name'
    const EmailPlaceholder = 'Enter first name'
    const NumberPlaceholder = 'Enter first name'
    render(<EmployeeForm/>)
    expect(screen.getByRole("input", { name: "first_name" })).toBeInTheDocument(firstNamePlaceholder);
    expect(screen.getByRole("input", { name: "last_name" })).toBeInTheDocument(lastNamePlaceholder);
    expect(screen.getByRole("input", { name: "email" })).toBeInTheDocument(EmailPlaceholder);
    expect(screen.getByRole("input", { name: "number" })).toBeInTheDocument(NumberPlaceholder);
  });
  
  it("Employee Form value testing", async () => {
    render(<EmployeeForm data={data}/>)
    expect(screen.getByRole("input", { name: "first_name" })).toHaveAttribute("value",data.first_name);
    expect(screen.getByRole("input", { name: "last_name" })).toHaveAttribute("value",data.last_name);
    expect(screen.getByRole("input", { name: "email" })).toHaveAttribute("value",data.email);
    expect(screen.getByRole("input", { name: "number" })).toHaveAttribute("value",data.number);
  });
});

