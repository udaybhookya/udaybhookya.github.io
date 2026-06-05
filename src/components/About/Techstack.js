import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiGit } from "react-icons/di";
import {
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiPytorch,
  SiTensorflow,
  SiJupyter,
  SiFlask,
  SiFastapi,
  SiDocker,
  SiPostgresql,
  SiApachespark,
  SiKaggle,
  SiGooglecolab,
  SiAnaconda,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons"><DiPython /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPandas /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiNumpy /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiScikitlearn /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPytorch /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiTensorflow /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiJupyter /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFlask /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiFastapi /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiDocker /></Col>
      <Col xs={4} md={2} className="tech-icons"><DiGit /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiPostgresql /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiApachespark /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiKaggle /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiGooglecolab /></Col>
      <Col xs={4} md={2} className="tech-icons"><SiAnaconda /></Col>
    </Row>
  );
}

export default Techstack;
