import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import Table from "../../../components/molecules/table/table";

const coloums = [{
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
        }
]

const data = [
    {
        "_id":"634f7ef880f6c360ce879051",
        "first_name": "Henri",
        "last_name": "Rodriguez",
        "email": "Darrin_Rippin@gmail.com",
        "number": "0771277218"
    },
    {
        "_id":"634f7ef880f6c360ce879052",
        "first_name":"Lindsay",
        "last_name":"Herman",
        "email":"Ewald.Kunde@gmail.com",
        "number":"0771274218"
    },
    {
        "_id":"634f7ef880f6c360ce879053",
        "first_name":"Gerda",
        "last_name":"Trantow",
        "email":"Mauricio.Stehr@yahoo.com",
        "number":"0771277681"
    },
]

describe("Table component testing", () => {

  it("Table component column sholud be defined testing", async () => {
    render(<Table column={coloums} />)
    expect(screen.getByText(coloums[0].title)).toBeDefined();
    expect(screen.getByText(coloums[1].title)).toBeDefined();
    expect(screen.getByText(coloums[2].title)).toBeDefined();
    expect(screen.getByText(coloums[3].title)).toBeDefined();
  });

  it("Table component has data sholud be placed testing", async () => {
    render(<Table column={coloums} data={data}/>)
    // First Name
    expect(screen.getByText(data[0].first_name)).toBeDefined();
    expect(screen.getByText(data[1].first_name)).toBeDefined();
    expect(screen.getByText(data[2].first_name)).toBeDefined();

     // Last Name
     expect(screen.getByText(data[0].last_name)).toBeDefined();
     expect(screen.getByText(data[1].last_name)).toBeDefined();
     expect(screen.getByText(data[2].last_name)).toBeDefined();

      // Email
    expect(screen.getByText(data[0].email)).toBeDefined();
    expect(screen.getByText(data[1].email)).toBeDefined();
    expect(screen.getByText(data[2].email)).toBeDefined();

    // Number
    expect(screen.getByText(data[0].number)).toBeDefined();
    expect(screen.getByText(data[1].number)).toBeDefined();
    expect(screen.getByText(data[2].number)).toBeDefined();
  });
});

