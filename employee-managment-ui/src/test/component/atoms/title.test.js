import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import Title from "../../../components/atoms/title/title";

describe("Title component testing", () => {

  it("Title component defined testing", async () => {
    const title = "Employee Title Testing";
    render(<Title title={title} />)
    expect(screen.getByText(title)).toBeDefined();
  });

  it("Title component has Employee Title Testing testing", async () => {
    const title = "Employee Title Testing";
    render(<Title title={title} />)
    expect(screen.getByText(title)).toBeInTheDocument();
  });
});

