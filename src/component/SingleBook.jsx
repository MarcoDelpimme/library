import React from "react";
import { Card } from "react-bootstrap";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  render() {
    const { book } = this.props;
    return (
      <Col xs={6} md={4} lg={3} xl={2} className="my-4">
        <Card
          style={{ width: "18rem", borderColor: this.state.selected ? "red" : "none" }}
          id="OneCard"
          onClick={(e) => {
            this.setState({ selected: !this.state.selected });
          }}
        >
          <Card.Img variant="top" src={book.img} alt={book.title} />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {this.state.selected && <CommentArea id="commentArea" asin={book.asin} />}
      </Col>
    );
  }
}

export default SingleBook;
