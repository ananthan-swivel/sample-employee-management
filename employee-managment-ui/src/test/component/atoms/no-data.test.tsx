import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import NoData from "../../../components/atoms/no-data/noData";

describe("No Data component testing", () => {

  it("Nodata component defined testing", async () => {
    render(<NoData />)
    expect(screen.getByText("No Data Found")).toBeDefined();
  });

  it("Nodata component has No Data Found testing", async () => {
    render(<NoData />)
    expect(screen.getByText("No Data Found")).toBeInTheDocument();
  });
});

