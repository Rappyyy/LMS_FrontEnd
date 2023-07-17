import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomeAuthView.css";
import { Link } from "react-router-dom";

function HomeAuthView() {
  const userRole = sessionStorage.getItem("userRole"); // Retrieve the user role from session storage

  const getDashboardLink = () => {
    if (userRole === "ROLE_REVIEWER") {
      return "/ReviewerDashboard";
    } else if (userRole === "ROLE_STUDENT") {
      return "/LearnerDashboard";
    } else {
      return "/"; // Default dashboard route for other user types or invalid user role
    }
  };

  return (
    <Container className="container">
      <h1 className="head-title">
        Welcome to the
        <br />
        Assignment Review
        <br />
        App
      </h1>

      <Row className="box-container">
        <Col>
          <Row className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consectetur vitae purus id tempus. Pellentesque sed semper neque.
              Fusce rutrum interdum sapien, at blandit nisi vulputate id. Nulla
              ultricies elementum nisl vel elementum. Vestibulum tincidunt
              ullamcorper metus, nec molestie sem hendrerit id. Proin a felis id
              tortor sodales gravida.
            </p>
          </Row>
        </Col>
        <Col>
          <Row className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consectetur vitae purus id tempus. Pellentesque sed semper neque.
              Fusce rutrum interdum sapien, at blandit nisi vulputate id. Nulla
              ultricies elementum nisl vel elementum. Vestibulum tincidunt
              ullamcorper metus, nec molestie sem hendrerit id. Proin a felis id
              tortor sodales gravida.
            </p>
          </Row>
        </Col>
        <Col>
          <Row className="box">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consectetur vitae purus id tempus. Pellentesque sed semper neque.
              Fusce rutrum interdum sapien, at blandit nisi vulputate id. Nulla
              ultricies elementum nisl vel elementum. Vestibulum tincidunt
              ullamcorper metus, nec molestie sem hendrerit id. Proin a felis id
              tortor sodales gravida.
            </p>
          </Row>
        </Col>
      </Row>
      <Link to={getDashboardLink()} className="learnerDashboard">
        <Button className="login-button">Go to Dashboard</Button>
      </Link>
    </Container>
  );
}

export default HomeAuthView;
