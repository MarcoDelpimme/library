import { render, screen, fireEvent } from "@testing-library/react";
import BookList from "../component/BookList";

const TestBooks = [
  { title: "Harry Potter and the Philosopher's Stone" },
  { title: "To Kill a Mockingbird" },
  { title: "The Great Gatsby" },
];

test("renders all books when search bar is empty", () => {
  render(<BookList books={TestBooks} />);
  const bookTitles = screen.getAllByTestId("titleId");
  expect(bookTitles.length).toBe(TestBooks.length);
});

test("renders filtered books when text is entered in search bar", () => {
  render(<BookList books={TestBooks} />);
  const searchInput = screen.getByTestId("search-bar");
  fireEvent.change(searchInput, { target: { value: "Harry Potter" } });
  const bookTitles = screen.getAllByTestId("titleId");
  expect(bookTitles.length).toBe(1);
});

test("renders no books when search text does not match any book", () => {
  render(<BookList books={TestBooks} />);
  const searchInput = screen.getByTestId("search-bar");
  fireEvent.change(searchInput, { target: { value: "Lord of the Rings" } });
  const bookTitles = screen.queryAllByTestId("titleId");
  expect(bookTitles.length).toBe(0);
});
