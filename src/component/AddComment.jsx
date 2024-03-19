import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function AddComment(props) {
  const [commentText, setCommentText] = useState("");
  const [rate, setRate] = useState(1);

  const commentChange = (event) => {
    setCommentText(event.target.value);
  };

  const rateChange = (event) => {
    setRate(event.target.value);
  };

  const addComment = (event) => {
    event.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZWYzMzcxYWZhZjAwMTkxNTY2YjAiLCJpYXQiOjE3MTA0MTk3NjMsImV4cCI6MTcxMTYyOTM2M30.W1bFSrQ1fLTPrzQ3oNeD6CePpjNXFbQl-ZZNSas7NcI",
      },
      body: JSON.stringify({ comment: commentText, rate: rate, elementId: props.asin }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Commento aggiunto con successo!");
          setCommentText("");
          setRate(1);
        } else {
          throw new Error("Errore durante l'aggiunta del commento");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Form onSubmit={addComment}>
        <Form.Group className="mb-3" controlId="commentText">
          <Form.Label>Aggiungi Commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo commento"
            value={commentText}
            onChange={commentChange}
          />
          <Form.Text className="text-muted">Inserisci qui il tuo commento</Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="rate">
          <Form.Label>Rate</Form.Label>
          <Form.Control as="select" value={rate} onChange={rateChange}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Button variant="success" type="submit">
          Aggiungi
        </Button>
      </Form>
    </div>
  );
}

export default AddComment;
