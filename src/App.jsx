import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigatBar from "./components/NavigationBar";
import Master from "./pages/Landing";

const App = () => {
  return (
    <>
      <Router>
        <NavigatBar />
        <Routes>
          <Route path="/" Component={Master} />
          <Route path="/home" Component={Master} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
