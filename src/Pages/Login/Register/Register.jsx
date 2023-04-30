import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useState } from "react";

const Register = () => {
  const [accepted, setAccepted] = useState(false);
  const { createUser } = useContext(AuthContext);

  const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const accept = form.accept.value;
    // console.log(name, photo, email, password, accept);

    createUser(email, password)
      .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
      })
      .catch(() => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  };

  return (
    <Container className="w-25 mx-auto">
      <Form border="info" onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photo" placeholder="photo url" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter your email address"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={
              <>
                Accept <Link to="/terms">Term & Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <div className="d-grid">
          <Button
            type="submit"
            variant="secondary"
            size="lg"
            disabled={!accepted}
          >
            Register
          </Button>
        </div>
        <Form.Text className="text-muted my-auto">
          Already Have An Account ? <Link to="/login">Login</Link>
        </Form.Text>
        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
        </Form.Text> */}
        {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
      </Form>
    </Container>
  );
};

export default Register;
