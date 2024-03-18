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
  onCLickedBook = () => {
    this.setState((prevState) => ({ selected: !prevState.selected }));
    this.props.onBookSelected(this.props.book.asin);
  };

  render() {
    const { book } = this.props;
    return (
      <Col xs={6} md={6} lg={6} xl={4} className="my-3">
        <Card style={{ borderColor: this.state.selected ? "red" : "none" }} id="OneCard" onClick={this.onCLickedBook}>
          <Card.Img variant="top" src={book.img} alt={book.title} id="imgCard" />
          <Card.Body>
            <Card.Title>{book.title}</Card.Title>
          </Card.Body>
        </Card>
        {/* {this.state.selected && <CommentArea id="commentArea" asin={book.asin} />} */}
      </Col>
    );
  }
}

export default SingleBook;
