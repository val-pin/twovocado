"use client";

import { auth } from "@/config/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import bg from "../../images/bg.jpg";

function RegisterPage() {
  const handleRegister = () => {};

  // const fetchUser = async () => {
  //   const request = await fetch("/api/register?email=r@gmail.com");
  //   console.log("request", request);
  //   const response = await request.json();
  //   console.log("response>>>", response);
  // };

  // const register = async () => {
  //   createUserWithEmailAndPassword(auth, "test@test.com", "123456")
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       console.log("user in the client>>>>", user);
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // ..
  //     });
  // };
  useEffect(() => {
    // fetchUser();
    // register();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Join us! Let's protect the nature on our planet together.</h2>
          <p>
            Here you can register for receiving either a newsletter, contacts of
            nearby sellers from origin countries or networks, where you can
            purchase together witch others a bigger amount for a smaller price.
            And of course you also join this community and can exchange with
            other users about
          </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;

// from instrumentation.js:

// import connect from "@/lib/db";

// export async function register() {
//   await connect();
// }

// You just need to export the register function and call the dbConnect function inside it.

// If the connection is successful, you will see the message Db connected in the console even before you access any page or api route.
