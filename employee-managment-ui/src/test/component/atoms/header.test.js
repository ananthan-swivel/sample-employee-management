import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import Header from "../../../components/atoms/parts/Header";

describe("Header component testing", () => {

  it("Header component defined testing", async () => {
    render(<Header />)
    expect(screen.getByText("Employee Management")).toBeDefined();
  });

  it("Header component has Employee Management testing", async () => {
    render(<Header />)
    expect(screen.getByText("Employee Management")).toBeInTheDocument();
  });
});

