import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../../assets/imgs/newsApp.jpeg";
import projImg2 from "../../assets/imgs/shopApp.jpeg";
import projImg3 from "../../assets/imgs/eLearning.jpeg";
import projImg4 from "../../assets/imgs/blogs.jpeg";
import projImg5 from "../../assets/imgs/furniture.jpeg";
import projImg6 from "../../assets/imgs/dashboard.png";
import projImg7 from "../../assets/imgs/movies.png";
import projImg8 from "../../assets/imgs/noiceland.png";
import projImg9 from "../../assets/imgs/stebdal.png";
import colorSharp2 from "../../assets/imgs/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { WebsiteCard } from "./WebsitCard";

export const Projects = () => {
  const projects = [
    {
      title: "News website",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Store Application",
      description: "Mobile & Development",
      imgUrl: projImg2,
    },
    {
      title: "E-Learnin Application",
      description: "Mobile & Development",
      imgUrl: projImg3,
    },
    {
      title: "Blogs Application",
      description: "Mobile & Development",
      imgUrl: projImg4,
    },
    {
      title: "furniture Store",
      description: "Mobile & Development",
      imgUrl: projImg5,
    },
    {
      title: "Real Estate",
      description: "Mobile & Development",
      imgUrl: projImg9,
    },
  ];

  const webistes = [
    {
      title: "Admin Dashboard",
      description: "Design & Development",
      imgUrl: projImg6,
    },
    {
      title: "Movies Website",
      description: "Design & Development",
      imgUrl: projImg7,
    },
    {
      title: "Nocie Website",
      description: "Design & Development",
      imgUrl: projImg8,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>My Samples</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {webistes.map((website, index) => {
                            return <WebsiteCard key={index} {...website} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
