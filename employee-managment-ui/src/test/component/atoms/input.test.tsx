import React from "react";
import { render, screen ,waitFor } from '@testing-library/react';
import Input from "../../../components/atoms/input/Input";


describe("Input component testing", () => {
  it("Input placeholder testing", async () => {
    const placeholder:string = 'testing input placeholder'
    render(<Input data={placeholder} name="testing"/>)
    expect(screen.getByRole("input", { name: "testing" })).toBeInTheDocument(placeholder);
  });
  
  it("Input value testing", async () => {
    render(<Input value={'Input'} name="testing"/>)
    expect(screen.getByRole("input", { name: "testing" })).toHaveAttribute("value",'Input');
  });

  it("Input value onchange testing", async () => {
    const onChangeMock = jest.fn();
    const { getByRole, rerender } = render(<Input value=""  name="testing" onChange={onChangeMock} />);
    const input = getByRole('input');
    expect(input).toHaveValue('');
    rerender(<Input value="new input value" onChange={onChangeMock} />);
    expect(input).toHaveValue('new input value');
  });
});

