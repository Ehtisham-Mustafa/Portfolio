import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a dedicated and passionate full-stack developer with a deep love for programming and technology. 
            Over the years, I have refined my skills and developed a strong foundation in creating innovative and impactful solutions.
              <br />
              <br />I am fluent in classic programming languages like PHP, Laravel, Python, Django and React. 
              I leverage these skills to build robust and scalable web applications.My expertise spans both front-end and back-end development, 
              allowing me to deliver comprehensive, end-to-end solutions that meet the needs of clients and users alike.
              <br />
              <i><b className="purple"> PHP, Laravel, Python, Django and React </b></i>
              <br />
              <br />
              My primary areas of interest include exploring and building new &nbsp;
              <i><b className="purple">Web Technologies </b>  </i> 
              &nbsp; and crafting innovative digital products.
              <br />
              <br />
              I am particularly enthusiastic about developing with modern frameworks and tools such as PHP Laravel,
               React.js, Python Django and Next.js. These technologies allow me to combine functionality with seamless user experiences,
               creating dynamic and engaging web applications.
          

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
                  href="https://github.com/Ehtisham-Mustafa"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
        
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ehtisham-mustafa-988122170/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
