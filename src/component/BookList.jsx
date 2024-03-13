import React, { Component } from "react";
import SingleBook from "./SingleBook";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

class BookList extends Component {
  state = {
    searchBar: "",
  };

  functionOfSearch = (e) => {
    this.setState({ searchBar: e.target.value });
  };

  render() {
    const { books } = this.props;
    const { searchBar } = this.state;

    const bookFilterOnBar = books.filter((book) => book.title.toLowerCase().includes(searchBar.toLowerCase()));

    return (
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formSearchBar">
                <Form.Label>Cerca il tuo libro</Form.Label>
                <Form.Control
                  type="search"
                  placeholder="cerca il tuo libro"
                  value={searchBar}
                  onChange={this.functionOfSearch}
                />
                <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
              </Form.Group>
            </Form>
          </Col>
        </Row>

        <Row>
          {bookFilterOnBar.map((book, index) => (
            <SingleBook key={index} book={book}></SingleBook>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
