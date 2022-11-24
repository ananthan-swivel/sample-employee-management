import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen ,waitFor } from '@testing-library/react';
import AddEmployeePage from "../../../pages/employee/add";
import { Provider } from 'react-redux';
import { store } from "../../../services/redux/store";
import Router from 'next/router';
import { useRouter } from "next/router"
import { act } from 'react-dom/test-utils';
import Select from "../../../components/atoms/input/select";


jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))
const options = [
  {value:"testing1" ,Lable:"Testing1"},
  {value:"testing2" ,Lable:"Testing2"},
  {value:"testing3" ,Lable:"Testing3"},
  {value:"testing4" ,Lable:"Testing4"},
]

describe("Select box component testing", () => {
  it("Select box options exists testing", async () => {
    render(<Select options={options} name="testing"/>)
    expect(screen.getByRole("select", { name: "testing" })).toBeInTheDocument('Testing1');
  });
  
  it("Select box value testing", async () => {
    render(<Select value={options[1].value} options={options} name="testing"/>)
    // expect(screen.getByRole("select", { name: "testing" })).toHaveAttribute("value",'testing1');
    let optionsSele = screen.getByRole("select", { name: "testing" });
    expect(optionsSele[0].selected).toBeFalsy();
    expect(optionsSele[1].selected).toBeTruthy();
    expect(optionsSele[2].selected).toBeFalsy();
  });

});

