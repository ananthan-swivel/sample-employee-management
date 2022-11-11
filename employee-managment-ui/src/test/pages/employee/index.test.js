import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render as rtlRender, screen ,waitFor, fireEvent  } from '@testing-library/react';
import ListEmployeePage from "../../../pages/employee/list";
import { Provider } from 'react-redux';
import { store } from "../../../services/redux/store";
import Router from 'next/router';
import { useRouter } from "next/router"
import { act } from 'react-dom/test-utils';


const render = component => rtlRender(
  <Provider store={store} >
    <ListEmployeePage />
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

describe("Employee List page", () => {
  beforeEach(async () => {
    await act( async () => render(<ListEmployeePage />));
  })
  it("should render the heading", () => {
    const headingTextId = "heading-Employees";

    const heading = screen.getByTestId(headingTextId);

    expect(heading).toBeInTheDocument();
  });
  it("Add button defined", () => {
    const addEmployeesButton = "Add Employee";

    const addButton = screen.getByText(addEmployeesButton);

    expect(addButton).toBeInTheDocument();
  });


  it("Search box defined", () => {
    const searchBox = "Search Employee";

    const searchBoxInput = screen.getByPlaceholderText(searchBox);

    expect(searchBoxInput).toBeInTheDocument();
  });

  

  it("should render the table", async () => {

    jest.useFakeTimers();
    await act(() => {
      jest.advanceTimersByTime(1000 * 10);
    });
    const tableTextId = screen.getByTestId('list-table');
    expect(tableTextId).toBeInTheDocument();
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });
});

