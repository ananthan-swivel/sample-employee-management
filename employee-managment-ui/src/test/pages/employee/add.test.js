import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render as rtlRender, screen ,waitFor } from '@testing-library/react';
import AddEmployeePage from "../../../pages/employee/add";
import { Provider } from 'react-redux';
import { store } from "../../../services/redux/store";
import Router from 'next/router';
import { useRouter } from "next/router"
import { act } from 'react-dom/test-utils';


const render = component => rtlRender(
  <Provider store={store} >
    <AddEmployeePage />
  </Provider>
)
jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}))

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("Employee add page", () => {
  beforeEach(async () => {
    await act(() => {
    render(<AddEmployeePage />);
    });
  })
  it("should render the heading", async () => {
    const headingTextId = "Add Employees";

    await act( () => {
      const heading = screen.getByText(headingTextId);
      expect(heading).toBeInTheDocument();
    })
  });
  it("view button defined", () => {
    const viewEmployeesButton = "View Employee";

    const viewButton = screen.getByText(viewEmployeesButton);

    expect(viewButton).toBeInTheDocument();
  });

  it("First name input box defined", async () => {
    const firstNameInputBoxPlaceholder = "Enter first name";

    await act( () => {
      const firstNameInput = screen.getByPlaceholderText(firstNameInputBoxPlaceholder);
      const firstNameInputName = screen.getByRole('input' , {name:'first_name'});
      expect(firstNameInput).toBeInTheDocument();
      expect(firstNameInputName).toBeVisible();
    })
  });


  it("Last input box defined", async () => {
    const lastNameInputBoxPlaceholder = "Enter last name";

    
    await act( () => {
      const lastNameInput = screen.getByPlaceholderText(lastNameInputBoxPlaceholder);
      const lastNameInputName = screen.getByRole('input' , {name:'last_name'});
      expect(lastNameInput).toBeInTheDocument();
      expect(lastNameInputName).toBeVisible();
    })
  });

  it("Email input box defined", async () => {
    const emailInputBoxPlaceholder = "Enter email";

    await act( () => {
      const emailInput = screen.getByPlaceholderText(emailInputBoxPlaceholder);
      const emailInputName = screen.getByRole('input' , {name:'email'});
      expect(emailInput).toBeInTheDocument();
      expect(emailInputName).toBeVisible();
    })
  });

  it("phone number input box defined", async () => {
    const phoneNumberInputBoxPlaceholder = "Enter phone number";

    await act( () => {
      const phoneNumberInput = screen.getByPlaceholderText(phoneNumberInputBoxPlaceholder);
      const phoneNumberInputName = screen.getByRole('input' , {name:'number'});
      expect(phoneNumberInput).toBeInTheDocument();
      expect(phoneNumberInputName).toBeVisible();
    })
  });

  it("gender input box defined", async () => {
    await act( () => {
      const genderInputBox = screen.getByRole('select' , {name:'gender'});
      expect(genderInputBox).toBeVisible();
    })
  });

  it("submit button enabled and defined", () => {
    const buttonText = 'Submit';
    const button = screen.getByText(buttonText).closest('button');
    expect(button).not.toBeDisabled();
  });

});

