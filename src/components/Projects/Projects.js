import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import haci from "../../Assets/Projects/haci.png";
import movie_recommendation from "../../Assets/Projects/movie-recommendation.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My personal <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few personal projects.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={haci}
              isBlog={false}
              title="Hand Cricket with CNN"
              description="The project delivers an online Hand Cricket multiplayer application built with Flutter. It captures images from both players, classifies ten hand-gesture categories using a convolutional neural network trained on a custom dataset of 20,000 images, and leverages transfer learning. After evaluating various architectures, VGG16 achieved the best performance with 99% validation accuracy. A low-latency socket system streams frames and applies predictions to game logic in real time. Deployed by a cross-functional team, this app offers smooth gameplay."
              ghLink="https://github.com/udaybhookya/hand-cricket-with-cnn"
              // demoLink=""
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={movie_recommendation}
              isBlog={false}
              title="Hollywood Movie Recommendation System"
              description="This AI-powered web application delivers personalized movie recommendations using content-based filtering. Users search for a previously watched film and instantly get similar suggestions across diverse genres. A custom movie dataset was curated, with features engineered from genre tags, plot embeddings, and cast metadata. The recommendation engine leverages vectorized text representations and cosine similarity to match user preferences. The backend is built in Flask with RESTful APIs, while the responsive frontend uses HTML5, CSS3, and Bootstrap to provide an intuitive, seamless user experience."
              ghLink="https://github.com/udaybhookya/hollywood-movie-recommendation-system"
              // demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
