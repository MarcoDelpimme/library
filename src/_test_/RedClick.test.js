import { fireEvent, render, screen } from "@testing-library/react";
import book from "../data/fantasy.json";

import SingleBook from "../component/SingleBook";

test("clicked card its red", () => {
  render(<SingleBook book={book[0]} onBookSelected={() => {}}></SingleBook>);
  const clickedCard = screen.getByTestId("cardIdTest");
  fireEvent.click(clickedCard);

  expect(clickedCard).toHaveStyle({ borderColor: "red" });
});
