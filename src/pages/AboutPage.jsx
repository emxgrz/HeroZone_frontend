import { Container, Row, Col, Image } from "react-bootstrap";
import emmaMarvel from "../assets/bio-pics/emma-marvel-square.png";
import claraMarvel from "../assets/bio-pics/clara-marvel-square.png";
import linkedinIcon from "../assets/bio-pics/linkedin-icon.png";
import githubIcon from "../assets/bio-pics/github-icon.png";

function AboutPage() {
  return (
    <Container className="about-container my-5">
      <h1>meet the developers</h1>
      <Row className="align-items-center">
        <Col md={6} className="text-center">
          <Image
            src={emmaMarvel}
            className="dev-pic img-square rounded"
            fluid
            style={{ width: "200px", height: "200px" }}
          />

          <h5 className="mt-2 dev-name">Emma García</h5>
          <p>
            Navigates code like Spike navigates the Bebop; with a flair for
            culinary adventures and a playlist curated by Taylor Swift.
          </p>

          <div className="social-links mt-3">
            <a
              href="https://www.linkedin.com/in/emma-martinez-garcia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                width="50"
                height="50"
                className="mx-2"
              />
            </a>
            <a
              href="https://github.com/emxgrz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubIcon} width="50" height="50" className="mx-2" />
            </a>
          </div>
        </Col>
        <Col md={6} className="text-center">
          <Image
            src={claraMarvel}
            className="dev-pic img-square rounded"
            fluid
            style={{ width: "200px", height: "200px" }}
          />

          <h5 className="mt-2 dev-name">Clara Seijo</h5>
          <p>
            Codes as meticulously as solving a Rubik's Cube on a bike ride, with
            the strategic mindset of Batman planning his next move.
          </p>

          <div className="social-links mt-3">
            <a
              href="https://linkedin.com/in/claraseijo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={linkedinIcon}
                width="50"
                height="50"
                className="mx-2"
              />
            </a>
            <a
              href="https://github.com/clasei"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={githubIcon} width="50" height="50" className="mx-2" />
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
