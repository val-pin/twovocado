import { addPost } from "@/actions/postActions";
import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";

function PostsPage() {
  return (
    <Container>
      <Row>
        <Col>
          <h2>
            Stronger and smarter together – and don't forget about the fun!
          </h2>
          <p>
            Here you can create a post by writing a notice and upload a picture.
            Exchange with other users about avocados & Co., get contacts of
            nearby sellers from origin countries or find a buyers' association,
            where you can purchase together witch others a bigger amount for a
            smaller price. And of course you also join this community and can
          </p>
          <Form action={addPost}>
            <div>
              {/* <label>Title</label> */}
              <Form.Label>Title</Form.Label>
              <input name="title" type="text" />
            </div>
            <div>
              <label>Description</label>
              <textarea name="description" />
            </div>
            <button>Submit</button>
          </Form>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default PostsPage;
