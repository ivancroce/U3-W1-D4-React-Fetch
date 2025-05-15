import { Alert, Container, Col, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={10} md={6} className="text-center">
          <Alert variant="success" className="mb-0 shadow">
            <Alert.Heading>Hey, nice to see you</Alert.Heading>
            <p>Welcome to React Bookstrap.</p>
            <hr />
            <p className="mb-0">No idea what to write, this is just a welcome msg, enjoy!</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
