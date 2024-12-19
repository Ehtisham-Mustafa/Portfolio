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
            <br />A passionate and dedicated Software Engineer with a Bachelor's degree in Computer Science from the University of Engineering and Technology, Lahore.
             Over the years, I have been honing my skills by working on diverse projects,
             utilizing a range of modern technologies to create impactful web applications.
            <br />
            I pride myself on being a quick learner, always eager to embrace new technologies and frameworks. My collaborative nature makes me an effective team player,
             and I thrive in dynamic environments where I can contribute to innovative solutions. 
            With a strong work ethic, I excel under pressure and consistently deliver high-quality results.
            <br />
            <br/>
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
