import { render, screen } from "@testing-library/react";
import BookList from "../component/BookList";

const testBooks = [{ title: "booktest1" }];

test("no CommentList instances in the DOM on page load", () => {
  render(<BookList books={testBooks} />);
  const commentListInstance = screen.queryByTestId("comment-list");
  expect(commentListInstance).toBeNull();
});
