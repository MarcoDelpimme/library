import { useState } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

function BookList(props) {
  const [searchBar, setSearchbar] = useState("");

  const functionOfSearch = (e) => {
    setSearchbar(e.target.value);
  };

  const { books } = props;

  const bookFilterOnBar = books.filter((book) => book.title.toLowerCase().includes(searchBar.toLowerCase()));

  return (
    <Container fluid>
      <Row id="leftSideRow">
        <Col>
          <Form>
            <h1 className="text-white">BookList</h1>
            <Form.Group className="mb-3" controlId="formSearchBar">
              <Form.Control
                type="search"
                placeholder="cerca il tuo libro"
                value={searchBar}
                onChange={functionOfSearch}
              />
              <Form.Text className="text-muted">.</Form.Text>
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Row className="gx-5">
        {bookFilterOnBar.map((book, index) => (
          <SingleBook key={index} book={book} onBookSelected={props.onBookSelected}></SingleBook>
        ))}
      </Row>
    </Container>
  );
}

export default BookList;
