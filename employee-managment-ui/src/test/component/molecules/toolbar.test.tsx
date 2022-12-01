import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import Toolbar from "../../../components/molecules/toolbar/toolbar";

describe("Tool bar component testing", () => {

  it("Tool bar component has Employee Title Testing testing", async () => {
    const title = "Employee Title Testing";
    render(<Toolbar title={title} />)
    expect(screen.getByText(`View ${title}`)).toBeInTheDocument();
  });

  it("Tool bar Search box defined", async () => {
    const title = "Employee Title Testing";
    const onSearchMuck = jest.fn();
    render(<Toolbar title={title} onSearch={onSearchMuck}/>)
    expect(screen.getByRole("input", { name: "search" })).toBeInTheDocument(`Search ${title}`);
  });

  it("Tool bar show add button testing", async () => {
    const isList = true;
    const title = "Employee Title Testing";
    render(<Toolbar isList={isList} title={title} />)
    expect(screen.getByText(`Add ${title}`)).toBeInTheDocument();
  });

  it("Tool bar show view button testing", async () => {
    const isList = false;
    const title = "Employee Title Testing";
    render(<Toolbar isList={isList} title={title}/>)
    expect(screen.getByText(`View ${title}`)).toBeInTheDocument();
  });
});

