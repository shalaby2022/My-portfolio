import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div
        className="proj-imgbx"
        style={{ height: "40rem", backgroundColor: "gray" }}
      >
        <img src={imgUrl} style={{ backgroundSize: "100%" }} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
