import { useState } from "react";
import { Card } from "react-bootstrap";

import { Col } from "react-bootstrap";

function SingleBook({ book, onBookSelected }) {
  const [selected, setSelected] = useState(false);

  const onCLickedBook = () => {
    setSelected((prevState) => ({ selected: !prevState.selected }));
    onBookSelected(book.asin);
  };

  return (
    <Col xs={6} md={6} lg={6} xl={4} className="my-3">
      <Card
        style={{ borderColor: selected ? "red" : "none" }}
        id="OneCard"
        onClick={onCLickedBook}
        data-testid="cardIdTest"
      >
        <Card.Img variant="top" src={book.img} alt={book.title} id="imgCard" />
        <Card.Body>
          <Card.Title data-testid="titleId">{book.title}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;
