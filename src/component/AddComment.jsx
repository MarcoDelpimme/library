import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddComment extends Component {
  state = {
    commentText: "",
    rate: 1,
  };

  commentChange = (event) => {
    this.setState({ commentText: event.target.value });
  };

  rateChange = (event) => {
    this.setState({ rate: event.target.value });
  };

  addComment = (event) => {
    event.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWYyZWYzMzcxYWZhZjAwMTkxNTY2YjAiLCJpYXQiOjE3MTA0MTk3NjMsImV4cCI6MTcxMTYyOTM2M30.W1bFSrQ1fLTPrzQ3oNeD6CePpjNXFbQl-ZZNSas7NcI",
      },
      body: JSON.stringify({ comment: this.state.commentText, rate: this.state.rate, elementId: this.props.asin }),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Commento aggiunto con successo!");
          this.setState({ commentText: "", rate: 1 });
        } else {
          throw new Error("Errore durante l'aggiunta del commento");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.addComment}>
          <Form.Group className="mb-3" controlId="commentText">
            <Form.Label>Aggiungi Commento</Form.Label>
            <Form.Control
              type="text"
              placeholder="Inserisci il tuo commento"
              value={this.state.commentText}
              onChange={this.commentChange}
            />
            <Form.Text className="text-muted">Inserisci qui il tuo commento</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="rate">
            <Form.Label>Rate</Form.Label>
            <Form.Control as="select" value={this.state.rate} onChange={this.rateChange}>
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
}

export default AddComment;
