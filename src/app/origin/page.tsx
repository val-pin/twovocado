"use client";

import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

function CountryPage() {
  return (
    <div>
      <h2>Find out if your avocado is sustainable!</h2>
      <p>
        Enter here the origin country of your fruit, to receive information
        about the current situation there
      </p>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Countries of origin{" "}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Peru</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Kolumbien</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Chile</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Portugal</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Spain</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Sicily</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Kenia</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Israel</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Vietnam</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default CountryPage;
