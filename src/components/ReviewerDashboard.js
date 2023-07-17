import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnerDashboard.css";
import { Link } from "react-router-dom";

function ReviewerDashboard() {
  return (
    <Container className="container">
      <Row>
        <h1>Reviewer Dashboard</h1>
      </Row>
      <div className="header">
        <Link to="/login" className="login">
          <Button className="logout-button">LOGOUT</Button>
        </Link>
      </div>
      <p className="In-review">In review</p>
      <Row>
        <Col className="box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur vitae purus id tempus.
          </p>
        </Col>
        <Col className="box">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consectetur vitae purus id tempus.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default ReviewerDashboard;
