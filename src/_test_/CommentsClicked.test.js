import React from "react";
import { render, fireEvent, waitFor, screen, getAllByTestId } from "@testing-library/react";
import SingleBook from "../component/SingleBook";
import BookList from "../component/BookList";
import CommentArea from "../component/CommentArea";

test("comment showed when clicked", async () => {
  // simulo una funzione
  const OnBookSelected = jest.fn();

  render(
    <>
      <BookList books={[{ asin: "4123", title: "book 1" }]} onBookSelected={OnBookSelected}></BookList>
      <CommentArea selectedAsin={"4123"} />
    </>
  );

  fireEvent.click(screen.getByTestId("cardIdTest"));

  await waitFor(() => {
    expect(OnBookSelected).toHaveBeenCalledWith("4123");
    // expect(screen.getByTestId("commentAreaId")).toBeInTheDocument();
  });
});
