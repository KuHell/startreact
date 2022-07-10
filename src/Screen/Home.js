import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Goods from "../Component/Goods";

function Home(props) {
  return (
    <>
      <div className="mainBg"></div>
      <Container>
        <Row>
          {props.shoes.map(function (i, key) {
            return <Goods shoes={props.shoes[key]} i={i} key={key} />;
          })}
        </Row>
      </Container>
    </>
  );
}

export default Home;
