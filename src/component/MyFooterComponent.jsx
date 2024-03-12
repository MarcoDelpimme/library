import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const myFooter = function () {
  return (
    <Container fluid className="bg-dark text-white">
      <Row className="py-5  text-center">
        <Col xs={3} md={3} lg={3} xl={3}>
          Conttataci
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          azienda@gmail.com
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          Tutti i diritti sono riservati
        </Col>
        <Col xs={3} md={3} lg={3} xl={3}>
          copyright
        </Col>
      </Row>
    </Container>
  );
};

export default myFooter;
