import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import haci from "../../Assets/Projects/haci.png";
import aada from "../../Assets/Projects/agentic_ai_data_analytics.png";
import movie_recommendation from "../../Assets/Projects/movie-recommendation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Personal <strong className="purple">Works</strong>
        </h1>
        <p className="section-subtext" style={{ marginBottom: "2rem" }}>
          A selection of projects across AI, ML, and full-stack engineering.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={aada}
              isBlog={false}
              title="Agentic AI Data Analyst"
              description="A multi-agent LangGraph system that autonomously profiles raw data, writes and self-corrects analysis code, generates visualizations, and compiles a polished PDF report — no human intervention needed."
              techStack={["Python", "LangGraph", "GPT-4", "LLM Agents", "PDF Generation"]}
              ghLink="https://github.com/udaybhookya/agentic-ai-data-analyst"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={haci}
              isBlog={false}
              title="Hand Cricket with CNN"
              description="Multiplayer Hand Cricket game in Flutter using a VGG16 model (99% accuracy on 20K images) to classify 10 hand gestures in real time over a low-latency socket connection."
              techStack={["Python", "Flutter", "VGG16", "Transfer Learning", "Socket.IO"]}
              ghLink="https://github.com/udaybhookya/hand-cricket-with-cnn"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={movie_recommendation}
              isBlog={false}
              title="Hollywood Movie Recommendation System"
              description="Content-based movie recommender using cosine similarity on genre tags, plot embeddings, and cast metadata. Flask backend with a responsive Bootstrap frontend."
              techStack={["Python", "Flask", "Scikit-learn", "NLP", "Bootstrap"]}
              ghLink="https://github.com/udaybhookya/hollywood-movie-recommendation-system"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
