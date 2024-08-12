"use client";

import { addPost } from "@/actions/postActions";
import { AuthContext } from "@/context/AuthContext";
import React from "react";
import { useContext } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

// const UserContext = createContext();

function PostsPage() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  return (
    <Container>
      <Row>
        <Col className="bg-light">
          <h2>Hello!</h2>
          <p>
            Here you can create a post by writing a notice and upload a picture.
            Exchange with other users about avocados & Co., get contacts of
            nearby sellers from origin countries or find a buyers' association,
            where you can purchase together witch others a bigger amount for a
            smaller price. And of course you also join this community and can
          </p>
          <Form className="mb-3" action={addPost}>
            <div>
              <Form.Label>Title</Form.Label>
              <input name="title" type="text" />
            </div>
            <div>
              <label>Description</label>
              <textarea name="description" />
            </div>
            <input name="user" type="hidden" value={user?.uid || ""} />
            <button>Submit</button>
          </Form>
          <p>Here are the latest news for consumers in Germany: </p>
          <object className="mb-3 embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              src="https://www.zdf.de/nachrichten/wirtschaft/avocado-boom-deutschland-100.html"
              allowFullScreen
            ></iframe>
          </object>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
