// src/components/About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";

function About() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">About</strong> Me
        </h1>
        <p style={{ color: "white", marginBottom: "1rem" }}>
          I'm Uday Chandra — a Data Scientist and Machine Learning Engineer with a passion for turning complex data into actionable insights. 
          With ~3 years of experience, I specialize in building intelligent systems that scale, blending statistical thinking, clean code, and real-world impact.
          <br />
          <br />
          I’ve contributed to research and innovation through multiple patents and publications. 
          I enjoy working at the intersection of AI and business strategy — leading projects end-to-end, from first idea to deployment — ensuring every solution is not just functional, but meaningful.

          
        </p>

        <Row className="justify-content-center g-4" style={{ paddingBottom: "5px" }}>
          <Col xs={12} md={10} className="project-card">
            <AboutCard>
            <strong>What I bring to the table:</strong>
              <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem", marginBottom: 0 }}>
                <li> Translating raw data into strategic insights</li>
                <li> Building scalable ML pipelines and AI-driven products</li>
                <li> Writing clean, production-grade Python code (Pandas, NumPy, Scikit-learn, PyTorch)</li>
                <li> Communicating technical ideas clearly, creatively, and with purpose</li>
              </ul>
              <br/>
              <p className="purple">
                Always curious, always building.
                <br />
                Let’s connect and create the next big thing.
              </p>
            </AboutCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
