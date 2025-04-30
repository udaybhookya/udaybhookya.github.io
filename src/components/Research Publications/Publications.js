import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PublicationsCard from "./PublicationsCard";

function Publications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications & Patents</strong>
        </h1>
        <p style={{ color: "white", marginBottom: "2rem" }}>
          A glimpse into my published work and innovative contributions.
        </p>

        {/* --- Publications Section --- */}
        <h2 className="purple mb-4">📄 Publications</h2>
        <Row className="justify-content-center g-4">
          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="Addressing Spend Leakage and Optimization of Cloud Costs"
              description="IEEE International Conference on Big Data (Big Data), 2024, Washington DC, USA."
              abstract="Spend leakage in a cloud estate manifests in many forms and requires a careful analysis of various metrics. We present a suite of features to detect such behavior and provide recommendations for optimization. We apply the proposed solution in practice by presenting a real-world case-study. Through this case-study we demonstrate how many cases of spend leakage go unnoticed by simple handles to manage cloud estate and how the solutions proposed in the paper can enable the business with better foresight and control on the cloud costs."
              link="https://ieeexplore.ieee.org/abstract/document/10825120"
            />
          </Col>

          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="Mining Patterns for Proactive Management of Procure-to-Pay Exceptions"
              description="IEEE ICDMW 2024, Abu Dhabi."
              abstract="This paper explores a novel approach to addressing exceptions in the procure-to-pay (P2P) process by analyzing recurring patterns that cause procurement inefficiencies. The P2P process, which involves issuing purchase orders, receiving goods, and validating invoices through three-way matching, often encounters exceptions such as pricing discrepancies, quantity mismatches, and missing documentation. These issues can lead to delays, financial errors, and strained supplier relationships. Existing black-box models such as neural networks, while effective at detection of exceptions, lack transparency. On the other hand, traditional white-box methods such as classification trees fall short in identifying complex patterns that drive recurring exceptions. This paper presents an enhanced white-box solution, which improves the generation and prioritization of classification rules by optimizing the depth, coverage, and explainability of patterns. The proposed method allows for more accurate and comprehensive exception management, empowering procurement teams to make informed decisions with greater transparency."
              link="https://ieeexplore.ieee.org/abstract/document/10917769"
            />
          </Col>

          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="Addressing Insight Fatigue with Insight Summarization"
              description="COMSNETS 2025 – International Communication Systems and Networks Workshops."
              abstract="Introduces a summarization framework to reduce cognitive overload caused by frequent, overlapping AI insights."
              link="https://ieeexplore.ieee.org/document/your-paper-link"
            />
          </Col>

          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="Addressing AIOps Data Fatigue with Insight Chains"
              description="ECML PKDD 2025 – European Conference on Machine Learning and Principles and Practice of Knowledge Discovery in Databases.  [Under Review]"
              abstract="Presents a graph-based method to connect operational events into coherent, actionable insight chains."
            />
          </Col>
        </Row>

        {/* --- Patents Section --- */}
        <h2 className="purple mt-5 mb-4">📑 Patent Filings</h2>
        <Row className="justify-content-center g-4">
          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="AI-Driven Cost Optimization Engine for Cloud Platforms"
              description="Patent describing predictive and intelligent automation for cloud resource management."
              abstract="This patent outlines an intelligent cost engine that leverages time-series forecasting and ML-based anomaly detection to automate cloud cost optimization in hybrid environments."
              // link="https://link-to-your-patent.com"
            />
          </Col>

          <Col xs={12} md={10} className="project-card">
            <PublicationsCard
              title="Graph-Based Recommendation System for Insight Chains"
              description="Patent focused on insight chaining for better decision-making in IT operations."
              abstract="Describes a method to construct coherent chains of operational insights using graph theory, improving root cause analysis, and enabling intelligent recommendations through pattern continuity."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Publications;
