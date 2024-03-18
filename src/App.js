import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./component/MyNavComponent";
import Myfooter from "./component/MyFooterComponent";
import AlertComponent from "./component/AlertComponent.jsx";
import AllTheBooksComponent from "./component/AllTheBooksComponent.jsx";
import BookList from "./component/BookList";
import items from "./data/fantasy.json";
import CommentArea from "./component/CommentArea";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";

class App extends Component {
  state = {
    selected: undefined, //faulsy
  };

  changeAppState = (asin) => {
    this.setState({
      selected: asin,
    });
  };

  render() {
    return (
      <div>
        <div>
          <AlertComponent />
        </div>
        <div>
          <MyNav />
        </div>
        <Container fluid id="containerLeftSide">
          <Row>
            {/* left side */}
            <Col xs={6}>
              <BookList books={items} onBookSelected={this.changeAppState} />
            </Col>
            {/* side right */}
            <Col xs={6}>
              <div className="position-sticky top-0">
                <h1 className="text-white">Commenti</h1>
                <CommentArea selectedAsin={this.state.selected} />
              </div>
            </Col>
          </Row>
        </Container>

        <div>
          <Myfooter />
        </div>
      </div>
    );
  }
}

export default App;
