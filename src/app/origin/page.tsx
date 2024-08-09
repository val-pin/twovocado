"use client";

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function CountryPage() {
  return (
    <Container>
      <Row>
        <Col className="bg-light">
          <h2>Portugal</h2>
          In Portugal in the middle of a forest of pine and cork oaks an
          environmental disaster is looming.<br></br> Directly on a groundwater
          line and in an area that has been categorised as 'Natura 2000' by the
          EU as being particularly worthy of protection, a gigantic plantation
          is planned. An unknown amount of trees have already been felled
          illegally and generated unprecedented resistance in Portugal.
          <br></br> Already 1100 organizations and private individuals opposed
          the almost 700-hectare plantation at a public hearing. <br></br>So
          there is still hope: In mid-August, politicians will decide whether
          the controversial plans can be implemented.<br></br>
          <h2>Find out if your avocado is sustainable!</h2>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
}

export default CountryPage;
