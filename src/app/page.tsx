"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Row>
        <Col className="bg-light">
          <h3>Avoca-No! No deforestation for avocado plantations!</h3>
          Let's collect together evidence to save not only 'Natura 2000' in
          Portugal, but every piece of land that is not yet cultivated - in
          Peru, Chile, Mexico, South Africa and so on. Whether vegetarian, vegan
          or flexitarian.
          <p>
            Enter here the origin country of your fruit, to receive information
            about the current situation there
          </p>
          <Dropdown className="mb-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Countries of origin{" "}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Peru</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Kolumbien</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Chile</Dropdown.Item>
              <Dropdown.Item href="origin">Portugal</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Spain</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Sicily</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Kenia</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Israel</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Vietnam</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
