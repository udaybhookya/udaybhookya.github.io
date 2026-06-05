import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main_3.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Tilt from "react-parallax-tilt";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <Tilt>
                <img
                  src={homeLogo}
                  alt="home pic"
                  className="img-fluid"
                  style={{ maxHeight: "450px" }}
                />
              </Tilt>
            </Col>

            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Uday Chandra Bhookya</strong>
              </h1>
              <h2 className="heading-name-2">
                Computer Science Engineer,<br />
                Indian Institute of Information Technology, Tiruchirappalli
              </h2>

              <div className="typewriter-wrap">
                <Type />
              </div>

              <div className="hero-stats">
                <div className="stat-chip">
                  <span className="stat-number">4+</span>
                  <span className="stat-label">Years Exp</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-number">5</span>
                  <span className="stat-label">Publications</span>
                </div>
                <div className="stat-chip">
                  <span className="stat-number">4</span>
                  <span className="stat-label">Patents</span>
                </div>
              </div>

              <div className="hero-cta">
                <Link to="/project" className="btn btn-primary">
                  View My Work
                </Link>
                <Link to="/resume" className="btn-outline-theme">
                  Download CV
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Home2 />
    </section>
  );
}

export default Home;
