import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import AboutCard from "./AboutCard";
import Techstack from "./Techstack";

function About() {
  const skills = [
    {
      label: "ML / DL",
      tags: ["Scikit-learn", "PyTorch", "TensorFlow", "Recommendation Systems", "Time Series", "CNNs", "Anomaly Detection", "Regression", "Classification"],
    },
    {
      label: "Generative AI & Agents",
      tags: ["LangGraph", "LangChain", "Google ADK", "RAG", "Fine-Tuning LLMs", "Agentic AI", "MCP", "Multi-Agent Systems", "AWS Bedrock"],
    },
    {
      label: "Languages & Data",
      tags: ["Python", "JavaScript", "Java", "SQL", "Pandas", "NumPy"],
    },
    {
      label: "Cloud & Infrastructure",
      tags: ["AWS", "GCP", "Azure", "PySpark", "Docker", "Git"],
    },
    {
      label: "Databases & Web",
      tags: ["PostgreSQL", "MySQL", "Flask", "FastAPI", "ReactJs", "Django"],
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">About</strong> Me
        </h1>
        <p className="section-subtext" style={{ marginBottom: "1.5rem" }}>
          Applied AI Engineer with 4 years of experience shipping production-grade agentic systems across
          defense, engineering, and commerce. I specialize in architecting end-to-end enterprise AI pipelines —
          from multi-agent orchestration (LangGraph, Google ADK, MCP) and RAG to fine-tuning and evaluation
          pipelines — taking models from prototype to deployment.
          <br /><br />
          Currently at <strong>Deloitte</strong> as a AI &amp; Data Scientist II, and previously at
          <strong> Digitate (Tata Research)</strong>. Co-author of 5 research papers and 4 patents, driven
          by solving complex customer problems with measurable ROI.
        </p>

        {/* Skills Grid */}
        <div className="skills-section">
          <h2 className="skills-section-title">
            Technical <span className="purple">Skills</span>
          </h2>
          {skills.map((cat) => (
            <div className="skill-category" key={cat.label}>
              <p className="skill-category-label">{cat.label}</p>
              <div className="skill-tags">
                {cat.tags.map((tag) => (
                  <span className="skill-tag" key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Icons */}
        <h2 className="skills-section-title" style={{ marginTop: "2rem" }}>
          Tools &amp; <span className="purple">Frameworks</span>
        </h2>
        <Techstack />

        {/* About Card */}
        <Row className="justify-content-center g-4" style={{ paddingBottom: "20px" }}>
          <Col xs={12} md={10} className="project-card">
            <AboutCard>
              <strong>What I bring to the table:</strong>
              <ul style={{ paddingLeft: "1rem", marginTop: "0.5rem", marginBottom: 0 }}>
                <li>Architecting multi-agent AI systems that go from prototype to production</li>
                <li>Building scalable ML pipelines, RAG systems, and agentic workflows</li>
                <li>Delivering measurable business impact — $6M+ cloud savings, 80% faster compliance reviews</li>
                <li>Bridging research and engineering: 5 papers, 4 patents, and real-world deployments</li>
              </ul>
              <br />
              <p className="purple">
                Always curious, always building.
                <br />
                Let's connect and create the next big thing.
              </p>
            </AboutCard>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
