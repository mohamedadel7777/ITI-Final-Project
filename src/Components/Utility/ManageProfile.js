import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../redux/AuthSlice";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const ManageProfile = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.FirstName);
  const [lastName, setLastName] = useState(user.LastName);
  const [email, setEmail] = useState(user.Email);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6} lg={4} className="bg-white p-3 shadow rounded-2 w-50">
          <h2
            className="text-center mb-4"
            style={{
              fontWeight: "bold",
              fontSize: "32px",
              color: "#007bff",
            }}
          >
            Manage Profile
          </h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group
              controlId="firstName"
              className="mb-3"
              style={{
                color: "#0075ff",
              }}
            >
              <Form.Label>
                <FontAwesomeIcon icon={faUser} /> First Name
              </Form.Label>
              <Form.Control
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
            </Form.Group>
            <Form.Group
              controlId="lastName"
              className="mb-3"
              style={{
                color: "#0075ff",
              }}
            >
              <Form.Label>
                <FontAwesomeIcon icon={faUser} /> Last Name
              </Form.Label>
              <Form.Control
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
            </Form.Group>
            <Form.Group
              controlId="email"
              className="mb-3"
              style={{
                color: "#0075ff",
              }}
            >
              <Form.Label>
                <FontAwesomeIcon icon={faEnvelope} /> Email
              </Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </Form.Group>
            <Form.Group
              controlId="password"
              className="mb-3"
              style={{
                color: "#0075ff",
              }}
            >
              <Form.Label>
                <FontAwesomeIcon icon={faLock} /> Password
              </Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group
              controlId="confirmPassword"
              className="mb-3"
              style={{
                color: "#0075ff",
              }}
            >
              <Form.Label>
                <FontAwesomeIcon icon={faLock} /> Confirm Password
              </Form.Label>
              <Form.Control
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
              />
            </Form.Group>
            {error && <div className="alert alert-danger mb-3">{error}</div>}
            <Button
              variant="primary"
              type="submit"
              block
              className="w-100"
              style={{ fontSize: "20px" }}
            >
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageProfile;
