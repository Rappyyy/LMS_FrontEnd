import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnerDashboard.css";
import { Link } from "react-router-dom";

function LearnerDashboard() {
  return (
    <Container className="container">
      <Row>
        <h1 className="learnerDashboard-header">LEARNER DASHBOARD</h1>
      </Row>

      <Row>
        <div className="header">
          <Button className="submit-button">Submit new assignment</Button>
          <Link to="/login" className="login">
            <Button className="logout-button">Logout</Button>
          </Link>
        </div>
        <p>Welcome Learner</p>
      </Row>

      <Row className="box-container">
        <p className="needs-work">Needs work</p>
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

      <Row className="box-container">
        <p className="completed">Completed</p>
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

      <Row className="box-container">
        <p className="In-review">In review</p>
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

export default LearnerDashboard;
