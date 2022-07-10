import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import shoesData from "../data";
import { useState } from "react";
import Goods from "../Component/Goods";

function Home() {
  const [shoes, setshoes] = useState(shoesData);

  return (
    <>
      <div className="mainBg"></div>
      <Container>
        <Row>
          {shoes.map(function (i, key) {
            return <Goods shoes={shoes[key]} i={i} key={key} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
