import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea(props) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (props.selectedAsin) {
      fetchComments(props.selectedAsin);
    }
  }, [props.selectedAsin]);

  const fetchComments = (asin) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZWYzMzcxYWZhZjAwMTkxNTY2YjAiLCJpYXQiOjE3MTA0MTk3NjMsImV4cCI6MTcxMTYyOTM2M30.W1bFSrQ1fLTPrzQ3oNeD6CePpjNXFbQl-ZZNSas7NcI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella chiamata all'API");
        }
      })
      .then((data) => {
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-secondary border rounded p-4" data-testid="commentAreaId">
      {props.selectedAsin ? (
        <div>
          <h2 className="text-white">Commenti</h2>
          <CommentList comments={comments} />
          <AddComment asin={props.selectedAsin} />
        </div>
      ) : (
        <h1>Seleziona un libro per mostrare i commenti</h1>
      )}
    </div>
  );
}

export default CommentArea;
