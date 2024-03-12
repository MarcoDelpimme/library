import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import items from "../data/fantasy.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

function KitchenSinkExample() {
  return (
    <Container fluid>
      <Row>
        {items.map((book, i) => (
          <Col xs={6} md={4} lg={3} xl={2} className="my-4">
            <Card key={i} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.img} alt={book.title} />
              <Card.Body className="bg-secondary text-white">
                <Card.Title>{book.title}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>{book.category}</ListGroup.Item>
                <ListGroup.Item>{book.price + "€"}</ListGroup.Item>
              </ListGroup>
              <Card.Body>
                <Card.Link href="#">Compra ora</Card.Link>
                <Card.Link href="#">Cerca Altri generi</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default KitchenSinkExample;
