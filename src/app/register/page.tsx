"use client";

import { auth } from "@/config/firebaseConfig";
import { AuthContext } from "@/context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { ChangeEvent, useContext, useEffect, useState } from "react";
import { Alert, Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/navigation";
import { error } from "console";

function RegisterPage() {
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

  // const fetchUser = async () => {
  //   const request = await fetch("/api/register?email=r@gmail.com");
  //   console.log("request", request);
  //   const response = await request.json();
  //   console.log("response>>>", response);
  // };

  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("email, password :>> ", email, password);

    createUserWithEmailAndPassword(auth, email, password)
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
          <h2>Join us! Let's protect the nature on our planet together.</h2>
          <p>
            Here you can register for receiving either a newsletter, contacts of
            nearby sellers from origin countries or networks, where you can
            purchase together witch others a bigger amount for a smaller price.
            And of course you also join this community and can exchange with
            other users about your favourite topics.
          </p>
          <Form onSubmit={register}>
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

export default RegisterPage;

// from instrumentation.js:

// import connect from "@/lib/db";

// export async function register() {
//   await connect();
// }

// You just need to export the register function and call the dbConnect function inside it.

// If the connection is successful, you will see the message Db connected in the console even before you access any page or api route.
