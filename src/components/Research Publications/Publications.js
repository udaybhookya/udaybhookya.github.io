import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PublicationsCard from "./PublicationsCard";

const PAPERS = [
  {
    title: "Data Stories from Insights for IT Operations",
    venue: "IEEE Big Data 2025",
    year: "2025",
    authors: "U. C. Bhookya, R. Babu, S. Saluja, M. Natu",
    abstract:
      "With increasing focus on observability and analytics, a large volume of data-driven insights gets generated. However, the users face challenges in sifting through these insights to identify the relevant ones. Furthermore, looking at these insights in isolation fails to provide a comprehensive understanding of the situation. This paper addresses this problem of insight fatigue by recommending the relevant insights to the user and generating chains of relevant insights, with a specific focus on the insights generated to manage IT operations.",
    link: "https://ieeexplore.ieee.org/document/11401690",
  },
  {
    title: "Addressing Spend Leakage and Optimization of Cloud Costs",
    venue: "IEEE Big Data 2024 · Washington DC, USA",
    year: "2024",
    authors: "U. C. Bhookya, K. Jethuri, S. R. Ravuru, M. Natu",
    abstract:
      "Spend leakage in a cloud estate manifests in many forms and requires careful analysis of various metrics. We present a suite of features to detect such behavior and provide recommendations for optimization. We apply the proposed solution in practice through a real-world case-study demonstrating how many cases of spend leakage go unnoticed and how the proposed solutions enable better foresight and control on cloud costs.",
    link: "https://ieeexplore.ieee.org/abstract/document/10825120",
  },
  {
    title: "Cloud Cost Optimization with Data Storytelling",
    venue: "IEEE ICDMW 2025 · USA",
    year: "2025",
    authors: "O. Rai, U. C. Bhookya, R. Babu, K. Jethuri, M. Natu",
    abstract:
      "Cloud cost optimization is one of the top priorities for most enterprises. This paper addresses the challenge of detecting cloud sprawl and spend leakage by presenting analytics-driven solutions and novel data story solutions to combat insight fatigue — helping cloud architects identify and act on the insights of their interest. Validated through a real-world running example of a leading IT organization.",
    link: "https://ieeexplore.ieee.org/document/11416002",
  },
  {
    title: "Mining Patterns for Proactive Management of Procure-to-Pay Exceptions",
    venue: "IEEE ICDMW 2024 · Abu Dhabi, UAE",
    year: "2024",
    authors: "S. N. Samudrala, U. C. Bhookya, M. Natu",
    abstract:
      "This paper explores a novel approach to addressing exceptions in the procure-to-pay (P2P) process by analyzing recurring patterns that cause procurement inefficiencies. We present an enhanced white-box solution improving the generation and prioritization of classification rules by optimizing depth, coverage, and explainability — empowering procurement teams with greater transparency.",
    link: "https://ieeexplore.ieee.org/abstract/document/10917769",
  },
  {
    title: "Addressing Insight Fatigue with Insight Summarization",
    venue: "COMSNETS 2025 · International Conference",
    year: "2025",
    authors: "S. Saluja, R. Babu, U. C. Bhookya, M. Natu",
    abstract:
      "In the era of data-driven decision-making, organizations are increasingly challenged by insight fatigue. This paper proposes Insight Summarization — leveraging an insight graph and frequent pattern mining to recursively group similar insights, select the right cohorts, and generate concise, interpretable summaries. Evaluated on real-world datasets.",
    link: null,
  },
];

const PATENTS = [
  {
    title: "Methods and Systems to Optimize Cloud Cost by Analyzing Resource Utilization",
    venue: "Indian Patent Application",
    year: "2024",
    authors: "U.C. Bhookya, K. Jethuri, S. R. Ravuru, M. Natu",
    patentNumber: "202421066668",
    abstract:
      "Describes intelligent methods and systems for optimizing cloud infrastructure costs through detailed analysis of resource utilization patterns, enabling automated recommendations and proactive cost controls.",
  },
  {
    title: "Methods and Systems to Optimize Cloud Cost by Analyzing Pricing Models",
    venue: "Indian Patent Application",
    year: "2024",
    authors: "U.C. Bhookya, K. Jethuri, S. R. Ravuru, M. Natu",
    patentNumber: "202421066667",
    abstract:
      "Covers novel approaches to cloud cost reduction by analyzing and optimizing across different cloud pricing models — on-demand, reserved, and spot — enabling intelligent workload placement decisions.",
  },
  {
    title: "Methods and Systems to Optimize Cloud Cost by Analyzing Cloud Resource Usage",
    venue: "Indian Patent Application",
    year: "2024",
    authors: "U.C. Bhookya, K. Jethuri, S. R. Ravuru, M. Natu",
    patentNumber: "202421066669",
    abstract:
      "Outlines systems for continuous monitoring and optimization of cloud resource usage, detecting inefficiencies and providing actionable recommendations for reducing cloud expenditure.",
  },
  {
    title: "Data Driven Insight Generation and Creation of Contextually Consistent Chains Thereof",
    venue: "Indian Patent Application",
    year: "2024",
    authors: "R. Babu, U.C. Bhookya, M. Natu",
    patentNumber: "202421093804",
    abstract:
      "Presents a system for automatically generating data-driven insights and constructing contextually coherent chains of related insights, enabling better root cause analysis and decision support in IT operations.",
  },
];

const FILTERS = [
  { key: "all", label: "All" },
  { key: "papers", label: `Papers (${PAPERS.length})` },
  { key: "patents", label: `Patents (${PATENTS.length})` },
];

function Publications() {
  const [filter, setFilter] = useState("all");

  const showPapers = filter === "all" || filter === "papers";
  const showPatents = filter === "all" || filter === "patents";

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Research <strong className="purple">Publications & Patents</strong>
        </h1>
        <p className="section-subtext" style={{ marginBottom: "1.5rem" }}>
          Peer-reviewed research and innovations across AI, cloud cost optimization, and data intelligence.
        </p>

        {/* Stats row */}
        <div className="pub-stats-row">
          <div className="pub-stat">
            <span className="pub-stat-num">5</span>
            <span className="pub-stat-label">Papers</span>
          </div>
          <div className="pub-stat">
            <span className="pub-stat-num">4</span>
            <span className="pub-stat-label">Patents</span>
          </div>
          <div className="pub-stat">
            <span className="pub-stat-num">3</span>
            <span className="pub-stat-label">IEEE Conferences</span>
          </div>
          <div className="pub-stat">
            <span className="pub-stat-num">4+</span>
            <span className="pub-stat-label">Years Research</span>
          </div>
        </div>

        {/* Filter tabs */}
        <div className="pub-filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`pub-filter-btn${filter === f.key ? " active" : ""}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Papers section */}
        {showPapers && (
          <>
            {filter === "all" && (
              <h2 className="pub-section-heading">Publications</h2>
            )}
            <Row className="g-4">
              {PAPERS.map((p, i) => (
                <Col key={i} xs={12} md={6}>
                  <PublicationsCard type="publication" {...p} />
                </Col>
              ))}
            </Row>
          </>
        )}

        {/* Patents section */}
        {showPatents && (
          <>
            <h2
              className="pub-section-heading"
              style={{ marginTop: showPapers ? "3rem" : "0" }}
            >
              {filter === "all" ? "Patents" : "Patent Filings"}
            </h2>
            <Row className="g-4" style={{ paddingBottom: "30px" }}>
              {PATENTS.map((p, i) => (
                <Col key={i} xs={12} md={6}>
                  <PublicationsCard type="patent" {...p} />
                </Col>
              ))}
            </Row>
          </>
        )}
      </Container>
    </Container>
  );
}

export default Publications;
