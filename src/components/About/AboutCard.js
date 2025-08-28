import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Laxminarayan Dash </span>
            from <span className="purple"> Bhubaneswar, India.</span>
            <br />
            I am currently employed as an Assistant Professor in GITA Autonomous College, Bhubaneswar.
            <br />
            I have 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> CTF Playing
            </li>
            <li className="about-activity">
              <ImPointRight /> Web Penetration Testing
            </li>
            <li className="about-activity">
              <ImPointRight /> Android Penetration Testing
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Be patient. Focus on your work. See the difference"{" "}
          </p>
          <footer className="blockquote-footer">Laxminarayan Dash</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
