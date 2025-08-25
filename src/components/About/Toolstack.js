import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
 } from "react-icons/si";
import { FaSearch } from "react-icons/fa"; // placeholder for Nmap

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos title="MacOS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
    </Row>
  );
}

export default Toolstack;
