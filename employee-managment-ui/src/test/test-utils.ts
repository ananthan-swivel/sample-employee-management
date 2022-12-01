import { render } from "@testing-library/react";

// Add in any providers here if necessary:
const Providers = ({ children } : { children:any }) => {
  return children;
};

const customRender = (ui:any, options:any) =>
  render(ui, { wrapper: Providers, ...options });

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };