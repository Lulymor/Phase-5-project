import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
function Headers() {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col className="header">
          <h1>Sales Square</h1>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default Headers;
