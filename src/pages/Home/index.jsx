import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import myImg from "../../assets/imgs/myphoto.jpeg";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Web Developer",
    "React Developer",
    "React Native Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(300);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span style={{ fontWeight: "bold" }}> Welcome to my portfolio</span>
            <h1 style={{ padding: "15px 0" }}>
              {" "}
              {`Hi I 'm Ahmed Shalaby `}
              <span className="wrap">{text}</span>
            </h1>
            <p>
              Front-end developer, certified by the Information Technology
              Institute of Egypt{" "}
              <span style={{ color: "tomato", fontWeight: "bold" }}>(ITI)</span>
              , graduated from Alexandria University with a Bachelor's degree in
              ElectroMechanical Engineering. working in web & cross platform
              mobile apps development Field. Motivated individual who has
              experience in the role as a team member and passionate about
              working towards my goals.
            </p>
            <button onClick={() => console.log("first")}>
              Let's Connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className="profileImgWrapper">
              <img src={myImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Home;
