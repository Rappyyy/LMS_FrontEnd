import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePubView.css";
import { Link } from "react-router-dom";

class HomePubView extends React.Component {
  render() {
    return (
      <Container className="container">
        <h1 className="title">
          Welcome to the
          <br />
          Assignment Review
          <br />
          App
        </h1>
        <hr />
        <Row className="box-container">
          <Col>
            <Row className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consectetur vitae purus id tempus. Pellentesque sed semper
                neque. Fusce rutrum interdum sapien, at blandit nisi vulputate
                id. Nulla ultricies elementum nisl vel elementum. Vestibulum
                tincidunt ullamcorper metus, nec molestie sem hendrerit id.
                Proin a felis id tortor sodales gravida.
              </p>
            </Row>
          </Col>
          <Col>
            <Row className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consectetur vitae purus id tempus. Pellentesque sed semper
                neque. Fusce rutrum interdum sapien, at blandit nisi vulputate
                id. Nulla ultricies elementum nisl vel elementum. Vestibulum
                tincidunt ullamcorper metus, nec molestie sem hendrerit id.
                Proin a felis id tortor sodales gravida.
              </p>
            </Row>
          </Col>
          <Col>
            <Row className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consectetur vitae purus id tempus. Pellentesque sed semper
                neque. Fusce rutrum interdum sapien, at blandit nisi vulputate
                id. Nulla ultricies elementum nisl vel elementum. Vestibulum
                tincidunt ullamcorper metus, nec molestie sem hendrerit id.
                Proin a felis id tortor sodales gravida.
              </p>
            </Row>
          </Col>
        </Row>
        <Link to="/login" className="login-link">
          <Button className="login-button">Login</Button>
        </Link>
      </Container>
    );
  }
}

export default HomePubView;
