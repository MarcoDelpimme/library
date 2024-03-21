import { render, screen } from "@testing-library/react";
import BookList from "../component/BookList";
import items from "../data/fantasy.json";

test("verify for how many cards rendered", () => {
  render(<BookList books={items}></BookList>);

  const titleid = screen.getAllByTestId("titleId");

  expect(titleid).toHaveLength(items.length);
});
