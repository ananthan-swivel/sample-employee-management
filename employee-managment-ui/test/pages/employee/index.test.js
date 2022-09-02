import React from "react";
// Using render and screen from test-utils.js instead of
// @testing-library/react
import { render, screen } from '@testing-library/react';
import Home from './../../../pages/index';

describe("HomePage", () => {
  it("should render the heading", () => {
    render(<Home />);

    const heading = screen.getByText(
      /Welcome to/i
    );

    expect(heading).toBeInTheDocument();
  });
});