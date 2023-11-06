import React from 'react'
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { Link, } from "react-router-dom";

const SignUpScreen = () => {
  return (
    <Container>
    <Row className="justify-content-center">
      <Col xs={12} md={6}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password Again</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password again"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              placeholder="Phone number"
            />
          </Form.Group>
          <Form.Group className="d-grid">
            <Button variant="primary" type="submit" className="mt-4">
              <Link className="text-white text-decoration-none" to="/auth">
                Sign Up
              </Link>
            </Button>
          </Form.Group>
        </Form>
      </Col>
    </Row>
  </Container>
  )
}

export default SignUpScreen