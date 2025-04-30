import React from "react";
import { Container, Row, Col } from "react-bootstrap";
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
                Computer Science Engineer,<br></br>
                Indian Institute of Information Technology, Tiruchirappalli
              </h2>
              

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
