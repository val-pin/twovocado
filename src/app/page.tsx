"use client";

import Image from "react-bootstrap/Image";
import styles from "./page.module.css";
import { Container, Dropdown } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="justify-content-md-center bg-light pb-1 mb-3 rounded-bottom">
      <h3>Avoca-No! No deforestation for avocado plantations!</h3>
      <p>
        Let&apos;s collect together evidence to save not only &apos;Natura
        2000&apos; in Portugal, but every piece of land that is not yet
        cultivated - in Peru, Chile, Mexico, South Africa and so on. Whether
        vegetarian, vegan or flexitarian.
      </p>
      <p>Here is a video for you to get started: </p>
      <div className="mb-3 embed-responsive embed-responsive-16by9">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4b0v6MkZzCs?si=NrLDR6VG3QKwn_Tm"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        Between 1994 and 2022, the area under cultivation worldwide almost
        tripled from around 297,000 to 884,000 hectares. Environmental
        organisations such as BUND point out that some forests are being cut
        down to increase the area, for example in Mexico or Colombia. Small
        farmers are being deprived of their own land for growing food. The
        cultivation of avocados in monocultures also leads to a loss of
        biodiversity.
      </p>
      <Image
        src="global_avocado_production_in_2020.png"
        fluid
        // href="https://upload.wikimedia.org/wikipedia/commons/3/33/Countries_by_avocado_production_in_2020.png"
      />
      <p>
        Enter here the origin country of your fruit, to receive information
        about the current situation there
      </p>
      <Dropdown className="mb-1">
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
    </Container>
  );
}
