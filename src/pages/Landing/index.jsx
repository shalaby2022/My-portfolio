import Home from "../Home";
import Skills from "../Skills";
import Contact from "../Contact";
import Technologies from "../Technologies";
import { Projects } from "../Projects";
import NavigationBar from "../../components/NavigationBar";

const Master = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <Skills />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
};

export default Master;
