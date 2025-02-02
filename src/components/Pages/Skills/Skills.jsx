import React from "react";
import CustomNavbar from "../../common/CustomNavbar/CustomNavbar";
import { Container, Row, Col, Image } from "react-bootstrap";
import skills from "../../../resources/skills.png";
import Donut from "./Donut Chart/Donut";

function Skills() {
  return (
    <div>
      <CustomNavbar colorClass="text-theme" activePage="/skills" />
      <Container>
        <Row>
          <Col
            lg={7}
            className="d-flex align-items-center justify-content-center flex-column text-center"
          >
            {/* <p className="display-1 fw-bold text-center m-0 text-tertiary">Skills</p> */}
            <Donut />
          </Col>
          <Col
            lg={5}
            className="d-flex align-items-center justify-content-center"
            style={{ height: "90vh" }}
          >
            <Image
              src={skills}
              alt="projects"
              className="w-75 me-5"
              draggable="false"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Skills;
