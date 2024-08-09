"use client";

import { auth } from "@/config/firebaseConfig";
import { AuthContext } from "@/context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import React, { ChangeEvent, useContext, useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

function LoginPage() {
  const router = useRouter();
  const { setUser } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value :>> ", e.target.value);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("e.target.value :>> ", e.target.value);
    setPassword(e.target.value);
  };

  const Login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log("user in the client>>>>", user);
        setUser(user);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
        //make an alert out of the error message for the user
        console.log("error message", errorMessage);
        // ..
      });
  };

  return (
    <Container>
      <Row>
        <Col className="bg-light">
          <h2>Welcome back!</h2>
          <p>
            Login to exchange experiences with other community members and get
            the latest updates about sustainable avocado farming.
          </p>{" "}
          <Form onSubmit={Login}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group> */}
            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>

        <Col></Col>
      </Row>
      {error && (
        <Alert variant={"warning"} className="mt-4">
          Hey this went wrong: {error}
        </Alert>
      )}
    </Container>
  );
}

export default LoginPage;
