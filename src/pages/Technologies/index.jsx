import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import js from "../../assets/imgs/js.png";
import bootstrap from "../../assets/imgs/bootstrap.png";
import react from "../../assets/imgs/react.png";
import reactNative from "../../assets/imgs/reactNative.png";
import css from "../../assets/imgs/css-3.png";
import html from "../../assets/imgs/html-5.png";
import github from "../../assets/imgs/github.png";
import vue from "../../assets/imgs/vue.png";
import nodeJs from "../../assets/imgs/nodejs.png";
import MongoDB from "../../assets/imgs/database.png";
import typescript from "../../assets/imgs/typescript.png";

import colorSharp from "../../assets/imgs/color-sharp.png";

const Technologies = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="technologies" style={{ marginTop: "100px" }}>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technologies</h2>
              <p>My Technologies and states!</p>
              <Carousel
                responsive={responsive}
                infinite={"true"}
                className="skill-slider"
              >
                <div className="item">
                  <img src={js} alt="skill-icon" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={html} alt="skill-icon" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={css} alt="skill-icon" />
                  <h5>Css</h5>
                </div>
                <div className="item">
                  <img src={react} alt="skill-icon" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={reactNative} alt="skill-icon" />
                  <h5>React native</h5>
                </div>
                <div className="item">
                  <img src={bootstrap} alt="skill-icon" />
                  <h5>Bootstrap</h5>
                </div>
                <div className="item">
                  <img src={vue} alt="skill-icon" />
                  <h5>vue basics</h5>
                </div>
                <div className="item">
                  <img src={github} alt="skill-icon" />
                  <h5>Git & Github</h5>
                </div>
                <div className="item">
                  <img src={nodeJs} alt="skill-icon" />
                  <h5>Node Js</h5>
                </div>
                <div className="item">
                  <img src={typescript} alt="skill-icon" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={MongoDB} alt="skill-icon" />
                  <h5>MongoDB</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className=" background-image-left" />
    </section>
  );
};

export default Technologies;
