import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              WELCOME TO <span className="purple"> MY SPACE </span> ON THE WEB
            </h1>
            <p className="home-about-body">
              I’m a curious and impact-driven data professional with ~3 years of
              experience transforming complex ideas into intelligent, scalable
              solutions.
              <br />
              <br />
              I specialize in turning raw data into real insights — blending
              <i>
                <b className="purple"> statistical thinking, machine learning, </b>
              </i>
              and a strong <i><b className="purple">product sense</b></i>.
              <br />
              <br />
              My strengths lie in building <b className="purple">end-to-end systems</b> that work — from 
              modeling and analysis to deployment and automation.
              <br />
              <br />
              I’ve worked across domains like&nbsp;
              <i>
                <b className="purple">
                  NLP, time series, recommender systems, and generative AI,
                </b>
              </i> 
              &nbsp;with a knack for translating technical depth into business value.
              <br />
              <br />
              Whether it's crafting smart algorithms or engineering
              user-friendly experiences, I bring&nbsp;
              <i>
                <b className="purple">clarity, creativity, and code</b>
              </i>
              &nbsp;to every challenge.
              <br />
              <br />
              <b className="purple">Let’s build what’s next.</b>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/udaybhookya"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/uday_chandra1"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/uday-chandra/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_udaychandra"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
