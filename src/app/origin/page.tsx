"use client";

import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

function CountryPage() {
  return (
    <Container className="justify-content-md-center bg-light pb-1 mb-3 rounded-bottom">
      <h2>Portugal</h2>
      In Portugal in the middle of a forest of pine and cork oaks an
      environmental disaster is looming.<br></br> Directly on a groundwater line
      and in an area that has been categorised as &apos;Natura 2000&apos; by the
      EU as being particularly worthy of protection, a gigantic plantation is
      planned. An unknown amount of trees have already been felled illegally and
      generated unprecedented resistance in Portugal.
      <br></br> Already 1100 organizations and private individuals opposed the
      almost 700-hectare plantation at a public hearing. <br></br>So there is
      still hope: In mid-August 2024, politicians will decide whether the
      controversial plans can be implemented.<br></br>
      <h2>Find out if your avocado is sustainable!</h2>
      <Image src="natura2000.png" fluid className="mb-3" />
      {/* https://images.prismic.io/pn2000-dev/8bfc3330-dd4c-414e-bad2-3e615cbf0a78_img-1.png?auto=compress,format         */}
    </Container>
  );
}

export default CountryPage;
