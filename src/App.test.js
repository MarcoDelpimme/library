import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const Container = screen.getByTestId("container");
  expect(Container).toBeInTheDocument();
});
