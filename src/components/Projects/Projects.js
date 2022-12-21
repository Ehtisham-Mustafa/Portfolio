import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Igbo Translation Bot"
              description="I have built an Igbo Translation bot for my client. That will translate English to Igbo and vice versa. The bot is built with Node js, MongoDB and Meta Webhhoks."
              ghLink="https://github.com/Ehtisham-Mustafa/Igbo-language-bot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Farmer App"
              description="A farmer app that will help farmers to get information about the weather, market prices, and other information. The app is built with Node Js, Express, and MongoDb."
              ghLink="https://github.com/Ehtisham-Mustafa/Node-Farm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Quizz App"
              description="A quiz app that will help users to test their knowledge. The app is built with Flutter ."
              ghLink="https://github.com/Ehtisham-Mustafa/Quizz-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Shopping App"
              description="A Shopify store that will help users to buy products. The app is built with React Js."
              ghLink="https://github.com/Ehtisham-Mustafa/amazona-app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Task Tracker App"
              description="A task tracking app built in React Js "
              ghLink="https://github.com/Ehtisham-Mustafa/React-Task-Tracker"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
