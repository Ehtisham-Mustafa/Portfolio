import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ehtisham Mustafa </span>
            from <span className="purple"> Hafizabad, Pakistan.</span>
            <br />I am a Software Engineer with a passion for building and designing web applications. I have a Bachelor's degree in Computer Science from University of Engineering and Technology, Lahore. I have been working as a Software Engineer for the past 1 year. I have worked on a variety of projects using different technologies. I am a quick learner and I am always ready to learn new technologies. I am a team player and I am always ready to work in a team. I am a hard worker and I am always ready to work under pressure.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Animated Movies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Ehtisham</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
