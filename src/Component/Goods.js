import Col from "react-bootstrap/Col";

function Goods(props) {
  let num = props.i.id + 1;
  return (
    <Col>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + num + ".jpg"}
        width="80%"
      />

      <h4>{props.shoes.title}</h4>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </Col>
  );
}

export default Goods;
