"use client";

import { addPost } from "@/actions/postActions";
import { AuthContext } from "@/context/AuthContext";
import React from "react";
import { useContext } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";

// const UserContext = createContext();

function PostsPage() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required(),
    terms: yup.bool().required().oneOf([true], "Terms must be accepted"),
  });
  // const submitFormik = (a) => {
  //   console.log("a", a);
  //   console.log("submit");
  //   alert("formik submit");
  // };

  return (
    <Container className="justify-content-md-center pb-1 mb-3 bg-light rounded-bottom">
      <>
        <h3>What&apos;s new?</h3>
        <p>
          Share your experiences with your community, post the latest
          recommendations and updates here!
        </p>
        <div>
          <Form.Label>Title</Form.Label>
          <Form.Control name="title" type="text" />{" "}
        </div>{" "}
        <div>
          <Form.Label>Description</Form.Label>
          <Form.Control name="description" />{" "}
        </div>
        <Formik
          validationSchema={schema}
          // onSubmit={submitFormik}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
          initialValues={{
            username: "val!!!!",

            terms: false,
          }}
        >
          {({ handleSubmit, handleChange, values, touched, errors }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                {/* <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation> */}
                {/* <InputGroup.Text id="inputGroupPrepend">
                        @
                      </InputGroup.Text> */}
                {/* <Form.Control
                        type="text"
                        placeholder="Username"
                        aria-describedby="inputGroupPrepend"
                        name="username"
                        value={values.username}
                        onChange={handleChange}
                        isInvalid={!!errors.username}
                      /> */}
                {/* <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    </InputGroup> */}
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  required
                  name="terms"
                  label="Agree to terms and conditions"
                  onChange={handleChange}
                  isInvalid={!!errors.terms}
                  feedback={errors.terms}
                  feedbackType="invalid"
                  id="validationFormik0"
                />
              </Form.Group>
              <Button className="mb-3" variant="success" type="submit">
                Submit
              </Button>
            </Form>
          )}
        </Formik>
        <>
          {/* <h3>Filtering Area (delete this text later)</h3> */}
          {/* <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Pick your subject{" "}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    Rate fruits/ sellers
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Rate a buyer's association
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Rate supermarkets/ groceries
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Another topic</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">News</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Questions</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown> */}
          {/* <h3>Posts should be rendered below this</h3> */}
        </>
      </>
    </Container>
  );
}

export default PostsPage;
