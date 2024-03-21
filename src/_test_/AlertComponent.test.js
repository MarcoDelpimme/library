import { render, screen } from "@testing-library/react";
import AdditionalContentExample from "../component/AlertComponent";

test("renders welcome message", () => {
  render(<AdditionalContentExample />);
  const headingElement = screen.getByText(/Hey, è bello vederti!!/i);
  const paragraphElement = screen.getByText(/Grazie per essere qui con noi nella tua avventura letteraria!/i);
  expect(headingElement).toBeInTheDocument();
  expect(paragraphElement).toBeInTheDocument();
});
