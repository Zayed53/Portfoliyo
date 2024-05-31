import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zayed Hasan </span>
             from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            Software Engineer who loves to transform ideas into reality using
            code.
            <br />
            Right now, I am pursuing my <span className="purple">Bachelor's in Software Engineering </span> from the <span className="purple">Islamic University of Technology</span>, currently in my final year.
            <br/>

             I am always eager to learn new things and look forward to gaining new experiences. 
             I am enthusiastic about solving problems and overcoming challenges.
            Always ready to enjoy life.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
