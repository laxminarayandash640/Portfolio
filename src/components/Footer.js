import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <Container fluid className="footer text-center py-3">
      <Row className="justify-content-center">
        <Col md="12" className="footer-copywright">
          <h3>Designed and Developed by Laxminarayan Dash</h3>
          <h3>Copyright © {year}</h3>
          <h3>InputIsEvil</h3>
        </Col>

        <Col md="12" className="footer-body mt-3">
          <ul className="footer-icons d-flex justify-content-center gap-3 list-unstyled">
            <li className="social-icons">
              <a
                href="https://github.com/yourusername"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <AiFillGithub size={28} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/yourusername"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <AiOutlineTwitter size={28} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://linkedin.com/in/yourusername"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={28} />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://instagram.com/yourusername"
                style={{ color: "white" }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram size={28} />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
