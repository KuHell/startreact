function Detail(props) {
  console.log("detail[Props]: ", props);
  return (
    <>
      <img src={"https://codingapple1.github.io/shop/shoes1.jpg"} width="80%" />
      <h4>{props.shoes[0].title}</h4>
      <p>{props.shoes[0].content}</p>
      <p>{props.shoes[0].price}</p>
    </>
  );
}

export default Detail;
