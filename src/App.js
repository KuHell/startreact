import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useState } from "react";
import shoesData from "./data";

function App() {
  const [shoes, setshoes] = useState(shoesData);
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Kuhell</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="mainBg"></div>
      <Container>
        <Row>
          {shoes.map(function (i, key) {
            return <Goods shoes={shoes[key]} i={i} key={key} />;
          })}
        </Row>
      </Container>
    </div>
  );
}

function Goods(props) {
  let num = props.i.id + 1;
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + num + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default App;
