import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LearnerDashboard.css';

function LearnerDashboard() {
  return (
    <Container className="container">
        <Row>
      <h1>LEARNER DASHBOARD</h1>
      </Row>
      <Row>
      <div className="header">
        <Button className="submit-button">Submit new assignment</Button>
        <p className="logout-link">Logout</p>
      </div>
      <p>Welcome Learner</p>

      </Row>
      <p className="needs-work">Needs work</p>
      <Row className="box-container">
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
      </Row>

      <p className="completed">Completed</p>

      <Row className="box-container">
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
      </Row>

      <p className="In-review">In review</p>


      <Row className="box-container">
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
            <Col className="box">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consectetur vitae purus id tempus.
              </p>
            </Col>
      </Row>
    </Container>

  );
}

export default LearnerDashboard;