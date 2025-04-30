// src/components/Blogs.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogsCard from "./BlogsCard";

function Blogs() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog Posts</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          Thoughts, insights, and learning stories I’ve shared.
        </p>

        <Row className="justify-content-center g-4">
          <Col md={6} className="blog-card">
            <BlogsCard
              title="Statistical Significance Tests: A statistical way to compare data populations"
              description="This blog explains how to statistically compare data populations using significance tests. It begins by showing the limitations of using mean, median, and visualization tools like box plots and histograms for comparing data similarity. It then introduces Student’s t-test as a robust method to measure differences between samples, supported by concepts like t-value, p-value, and hypothesis testing. The blog also outlines when to use variations like paired, independent, and one-sample t-tests. Additionally, it covers Z-test, Chi-square, ANOVA, and KS test, offering a practical guide to selecting the right statistical method based on the data scenario."
              link="https://medium.com/@igniobydigitate/statistical-significance-tests-a-statistical-way-to-compare-data-populations-1effad328f7c"
            />
          </Col>

          {/* Add more BlogsCard components here as needed */}
        </Row>
      </Container>
    </Container>
  );
}

export default Blogs;
