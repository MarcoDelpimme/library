import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div data-testid="comment-list">
      <h3 className="text-white">Lista dei commenti</h3>
      <ul>
        {comments.map((comment, index) => (
          <li key={index} className="text-info">
            <strong className="text-white">{comment.author}</strong>: {comment.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
