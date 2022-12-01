import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import EmployeeListView from "../../../../components/organisms/employee/employeeListView";

const data = 
    [
        {
            "_id":"634f7ef880f6c360ce879051",
            "first_name": "Henri",
            "last_name": "Rodriguez",
            "email": "Darrin_Rippin@gmail.com",
            "gender": "M",
            "photo": "https://randomuser.me/api/portraits/men/92.jpg",
            "number": "0771277218"
        },
        {
            "_id":"634f7ef880f6c360ce879052",
            "first_name":"Lindsay",
            "last_name":"Herman",
            "email":"Ewald.Kunde@gmail.com",
            "gender":"F",
            "photo":"https://randomuser.me/api/portraits/men/30.jpg",
            "number":"0771274218"
        },
        {
            "_id":"634f7ef880f6c360ce879053",
            "first_name":"Gerda",
            "last_name":"Trantow",
            "email":"Mauricio.Stehr@yahoo.com",
            "gender":"M",
            "photo":"https://randomuser.me/api/portraits/men/85.jpg",
            "number":"0771277681"
        },
    ]

    
describe("Employee List View component testing", () => {
  it("Employee List View employee show details", async () => {
    render(<EmployeeListView employees={data}/>)
    // First Name
    expect(screen.getByText(data[0].first_name)).toBeInTheDocument();
    expect(screen.getByText(data[1].first_name)).toBeInTheDocument();
    expect(screen.getByText(data[2].first_name)).toBeInTheDocument();

    // Last Name
    expect(screen.getByText(data[0].last_name)).toBeInTheDocument();
    expect(screen.getByText(data[1].last_name)).toBeInTheDocument();
    expect(screen.getByText(data[2].last_name)).toBeInTheDocument();

      // Email
    expect(screen.getByText(data[0].email)).toBeInTheDocument();
    expect(screen.getByText(data[1].email)).toBeInTheDocument();
    expect(screen.getByText(data[2].email)).toBeInTheDocument();

    // Number
    expect(screen.getByText(data[0].number)).toBeInTheDocument();
    expect(screen.getByText(data[1].number)).toBeInTheDocument();
    expect(screen.getByText(data[2].number)).toBeInTheDocument();
  });

  it("Employee List View employees empty array testing", async () => {
    render(<EmployeeListView employees={[]}/>)
    expect(screen.getByText('No Data Found')).toBeInTheDocument();
  });
 
});

