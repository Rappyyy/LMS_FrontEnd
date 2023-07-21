// import React, { useState } from "react";
// import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./LearnerDashboard.css";
// import { Link } from "react-router-dom";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import axios from "axios";

// function LearnerDashboard() {
//   const [showModal, setShowModal] = useState(false);
//   const [assignmentData, setAssignmentData] = useState({
//     status: "",
//     number: "",
//     githubUrl: "",
//     branch: "",
//     reviewVideoUrl: "",
//   });

//   const handleCloseModal = () => {
//     setShowModal(false);
//     setAssignmentData({
//       status: "",
//       number: "",
//       githubUrl: "",
//       branch: "",
//       reviewVideoUrl: "",
//     });
//   };

//   const handleInputChange = (e) => {
//     setAssignmentData({
//       ...assignmentData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmitAssignment = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("Assignment Data:", assignmentData);
//       const token = sessionStorage.getItem("token");
//       console.log("Token:", token);
//       const response = await axios.post(
//         "http://localhost:8080/api/assignments",
//         assignmentData,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );
//       console.log("Assignment created:", response.data);

//       // Perform any necessary actions after successfully creating the assignment
//       toast.success("Successfully Created!");

//       handleCloseModal();
//     } catch (error) {
//       console.error("Failed to create assignment:", error.response);
//       // Handle error scenario
//     }
//   };

//   return (
//     <Container className="Learner-parent-container">
//       <Row>
//         <h1 className="learnerDashboard-header">LEARNER DASHBOARD</h1>
//       </Row>

//       <Row>
//         <div className="header">
//           <Button className="submit-button" onClick={() => setShowModal(true)}>
//             Submit new assignment
//           </Button>
//           <Link to="/login" className="login">
//             <Button className="logout-button">Logout</Button>
//           </Link>
//         </div>
//         <p>Welcome Learner</p>
//       </Row>

//       <Row className="box-container">
//         <p className="needs-work">Needs work</p>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//       </Row>

//       <Row className="box-container">
//         <p className="Submitted">Submitted</p>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//       </Row>

//       <Row className="box-container">
//         <p className="Rejected">Rejected</p>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">View</Button>
//         </Col>
//       </Row>

//       <Row className="box-container">
//         <p className="Completed">Completed</p>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//         <Col className="box">
//           <p>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
//             consectetur vitae purus id tempus.
//           </p>
//           <Button className="View">Edit</Button>
//         </Col>
//       </Row>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Submit New Assignment</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form onSubmit={handleSubmitAssignment}>
//             <Form.Group controlId="assignmentStatus">
//               <Form.Label>Status</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="status"
//                 value={assignmentData.status}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="assignmentNumber">
//               <Form.Label>Number</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="number"
//                 value={assignmentData.number}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="assignmentGithubUrl">
//               <Form.Label>Github URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="githubUrl"
//                 value={assignmentData.githubUrl}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="assignmentBranch">
//               <Form.Label>Branch</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="branch"
//                 value={assignmentData.branch}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>

//             <Form.Group controlId="assignmentReviewVideoUrl">
//               <Form.Label>Review Video URL</Form.Label>
//               <Form.Control
//                 type="text"
//                 name="reviewVideoUrl"
//                 value={assignmentData.reviewVideoUrl}
//                 onChange={handleInputChange}
//                 required
//               />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Modal.Body>
//       </Modal>
//     </Container>
//   );
// }

// export default LearnerDashboard;

import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Modal, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LearnerDashboard.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function LearnerDashboard() {
  const [showModal, setShowModal] = useState(false);
  const [assignmentData, setAssignmentData] = useState({
    status: "",
    number: "",
    githubUrl: "",
    branch: "",
    reviewVideoUrl: "",
  });

  const [needsWorkAssignments, setNeedsWorkAssignments] = useState([]);

  const [submittedAssignments, setSubmittedAssignments] = useState([]);
  const [rejectedAssignments, setRejectedAssignments] = useState([]);
  const [completedAssignments, setCompletedAssignments] = useState([]);

  const handleCloseModal = () => {
    setShowModal(false);
    setAssignmentData({
      status: "",
      number: "",
      githubUrl: "",
      branch: "",
      reviewVideoUrl: "",
    });
  };

  // const handleInputChange = (e) => {
  //   setAssignmentData({
  //     ...assignmentData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignmentData({
      ...assignmentData,
      [name]: value,
    });
  };

  const handleSubmitAssignment = async (e) => {
    e.preventDefault();

    try {
      console.log("Assignment Data:", assignmentData);
      const token = sessionStorage.getItem("token");
      console.log("Token:", token);
      const response = await axios.post(
        "http://localhost:8080/api/assignments",
        assignmentData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Assignment created:", response.data);

      // Perform any necessary actions after successfully creating the assignment
      toast.success("Successfully Created!");

      handleCloseModal();

      window.location.reload();
    } catch (error) {
      console.error("Failed to create assignment:", error.response);
      // Handle error scenario
    }
  };

  useEffect(() => {
    // Fetch "needs-work" assignments when the component mounts
    const fetchNeedsWorkAssignments = async () => {
      try {
        const token = sessionStorage.getItem("token");
        const response = await axios.get(
          "http://localhost:8080/api/assignments?status=Needs-work",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNeedsWorkAssignments(response.data); // Assuming the response is an array of assignments
      } catch (error) {
        console.error("Failed to fetch assignments:", error);
        // Handle error scenario
      }
    };

    fetchNeedsWorkAssignments();
  }, []);

  return (
    <Container className="Learner-parent-container">
      <Row>
        <h1 className="learnerDashboard-header">LEARNER DASHBOARD</h1>
      </Row>
      <Row>
        <div className="header">
          <Button className="submit-button" onClick={() => setShowModal(true)}>
            Submit new assignment
          </Button>
          <Link to="/login" className="login">
            <Button className="logout-button">Logout</Button>
          </Link>
        </div>
        <p>Welcome Learner</p>
      </Row>
      <Row className="box-container">
        <p className="needs-work">Needs work</p>
        {needsWorkAssignments.map((assignment) => (
          <Col className="box" key={assignment.id}>
            <p>{assignment.description}</p>
            <Button className="View">View</Button>
          </Col>
        ))}
      </Row>
      {/* Other rows for Submitted, Rejected, and Completed assignments */}
      {/* ... */}{" "}
      <Row className="box-container">
        <p className="submitted">Submitted</p>
        {needsWorkAssignments.map((assignment) => (
          <Col className="box" key={assignment.id}>
            <p>{assignment.description}</p>
            <Button className="View">View</Button>
          </Col>
        ))}
      </Row>
      <Row className="box-container">
        <p className="rejected">Rejected</p>
        {needsWorkAssignments.map((assignment) => (
          <Col className="box" key={assignment.id}>
            <p>{assignment.description}</p>
            <Button className="View">View</Button>
          </Col>
        ))}
      </Row>
      <Row className="box-container">
        <p className="completed">Completed</p>
        {needsWorkAssignments.map((assignment) => (
          <Col className="box" key={assignment.id}>
            <p>{assignment.description}</p>
            <Button className="View">View</Button>
          </Col>
        ))}
      </Row>
      <Modal show={showModal} onHide={handleCloseModal}>
        {" "}
        <Modal.Header closeButton>
          <Modal.Title>Submit New Assignment</Modal.Title>{" "}
        </Modal.Header>{" "}
        <Modal.Body>
          {" "}
          <Form onSubmit={handleSubmitAssignment}>
            {" "}
            <Form.Group controlId="assignmentStatus">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select" // Use "as" prop to render the select dropdown
                name="status"
                value={assignmentData.status}
                onChange={handleInputChange}
                required
              >
                <option value="">Select Status</option>
                <option value="needs-work">Needs Work</option>
                <option value="submitted">Submitted</option>
                <option value="rejected">Rejected</option>
                <option value="completed">Completed</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="number">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                name="number"
                value={assignmentData.number}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="assignmentGithubUrl">
              <Form.Label>Github URL</Form.Label>
              <Form.Control
                type="text"
                name="githubUrl"
                value={assignmentData.githubUrl}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="assignmentBranch">
              <Form.Label>Branch</Form.Label>
              <Form.Control
                type="text"
                name="branch"
                value={assignmentData.branch}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="assignmentReviewVideoUrl">
              <Form.Label>Review Video URL</Form.Label>
              <Form.Control
                type="text"
                name="reviewVideoUrl"
                value={assignmentData.reviewVideoUrl}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
}

export default LearnerDashboard;
