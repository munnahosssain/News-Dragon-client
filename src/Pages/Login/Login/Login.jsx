import React from "react";
import { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/categories/0";
  // console.log(from);

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    loginUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch(err => {
        const errCode = err.code;
        const errMessage = err.message;
        console.log(errCode, errMessage);
      });
  };
  return (
    <Container className="w-25 mx-auto">
      <Form border="info" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="d-grid">
          <Button type="submit" variant="secondary" size="lg">
            LogIn
          </Button>
        </div>
        <Form.Text className="text-muted my-auto">
          Don't Have An Account ? <Link to="/register">Register</Link>
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

export default Login;
