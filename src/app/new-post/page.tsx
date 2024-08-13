// "use client";

// import { addPost } from "@/actions/postActions";
// import { AuthContext } from "@/context/AuthContext";
// import React from "react";
// import { useContext } from "react";
// import { Button, Col, Container, Dropdown, Form, Row } from "react-bootstrap";
// import * as formik from 'formik';
// import * as yup from 'yup';

// // const UserContext = createContext();

// function PostsPage() {
//   const { user } = useContext(AuthContext);
//   console.log("user", user);
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     username: yup.string().required(),
//     terms: yup.bool().required().oneOf([true], 'Terms must be accepted'),
//   });
//   return (
//     <Formik
//     validationSchema={schema}
//     onSubmit={console.log}
//     initialValues={{
//       // firstName: 'Mark',
//       // lastName: 'Otto',
//       username: '',
//       // city: '',
//       // state: '',
//       // zip: '',
//       terms: false,
//     }}
//   >
//     <Container>
//   {({ handleSubmit, handleChange, values, touched, errors }) => (
//         <Form noValidate onSubmit={handleSubmit}>
//       <Row className="mb-3">
//       <Form.Group as={Col} md="4" className="bg-light"controlId="validationFormik01">

//         {/* <Col className="bg-light"> */}
//           <h2>Hello!</h2>
//           <p>
//             Here you can create a post by writing a notice and upload a picture.
//             Exchange with other users about avocados & Co., get contacts of
//             nearby sellers from origin countries or find a buyers' association,
//             where you can purchase together with others a bigger amount for a
//             smaller price. Join us!
//           </p>

//           <Form className="mb-3" action={addPost}>
// <Dropdown >
//   <Dropdown.Toggle variant="success" id="dropdown-basic">
//     Pick your subject{" "}
//   </Dropdown.Toggle>

//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">
//       Rate fruits/ sellers
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-2">
//       Rate a buyer's association
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-3">
//       Rate supermarkets/ groceries
//     </Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Another topic</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">News</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Questions</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>
//             <div>
//               <Form.Label>Title</Form.Label>
//               <input name="title" type="text" />
//             </div>
//             <div>
//               <label>Description</label>
//               <textarea name="description" />
//             </div>

//             <Form.Group as={Col} md="4" controlId="validationFormikUsername">
//               <Form.Label>Username</Form.Label>
//               <InputGroup hasValidation>
//                 <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//                 <Form.Control
//                   type="text"
//                   placeholder="Username"
//                   aria-describedby="inputGroupPrepend"
//                   name="username"
//                   value={values.username}
//                   onChange={handleChange}
//                   isInvalid={!!errors.username}
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.username}
//                 </Form.Control.Feedback>
//               </InputGroup>
//             </Form.Group>

//             <input name="user" type="hidden" value={user?.uid || ""} />

//             <Form.Control.Feedback type="invalid">
//                 {errors.zip}
//               </Form.Control.Feedback>
//             </Form.Group>
//           </Row>
//           <Form.Group className="mb-3">
//             <Form.Check
//               required
//               name="terms"
//               label="Agree to terms and conditions"
//               onChange={handleChange}
//               isInvalid={!!errors.terms}
//               feedback={errors.terms}
//               feedbackType="invalid"
//               id="validationFormik0"
//             />
//           </Form.Group>

//           <Button type="submit">Submit form</Button>
//           </Form>
//  )}</Formik>
//   )

//           <p>Here are the latest news for consumers in Germany: </p>
//           <object className="mb-3 embed-responsive embed-responsive-16by9">
//             <iframe
//               className="embed-responsive-item"
//               src="https://www.zdf.de/nachrichten/wirtschaft/avocado-boom-deutschland-100.html"
//               allowFullScreen
//             ></iframe>
//           </object>
//         </Col>
//         <Col></Col>
//       </Row>
//     </Container>
//   );
// }

// export default PostsPage;

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
  const submitFormik = (a) => {
    console.log("a", a);
    console.log("submit");
    alert("formik submit");
  };

  return (
    <>
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
            <Row className="mb-3">
              <Form.Group as={Col} md="4" controlId="validationFormikUsername">
                <Form.Label>Username</Form.Label>
                <InputGroup hasValidation>
                  <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Username"
                    aria-describedby="inputGroupPrepend"
                    name="username"
                    value={values.username}
                    onChange={handleChange}
                    isInvalid={!!errors.username}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.username}
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Row>
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
            <Button type="submit">Submit form</Button>
          </Form>
        )}
      </Formik>

      <>
        <h3>Filtering Area (delete this text later)</h3>
        <Dropdown>
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
        </Dropdown>
        <h3>Posts should be rendered below this</h3>
      </>
    </>
  );
}

export default PostsPage;
