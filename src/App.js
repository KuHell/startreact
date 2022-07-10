import "./App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Routes, Route, Lin, useNavigate, Outlet } from "react-router-dom";
import Detail from "./Screen/Detail";
import Home from "./Screen/Home";
import About from "./Screen/About";

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kuhell</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/detail");
              }}
            >
              Detail
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>위치 정보</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
