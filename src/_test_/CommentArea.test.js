import { render, screen } from "@testing-library/react";
import CommentArea from "../component/CommentArea";

test("verify of commentArea rendered", () => {
  render(<CommentArea></CommentArea>);
  const commentAreaId = screen.getByTestId("commentAreaId");

  expect(commentAreaId).toBeInTheDocument();
});
