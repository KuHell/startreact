import { Outlet } from "react-router-dom";

function About() {
  return (
    <>
      <p>어바웃 페이지 임</p>
      <Outlet />
    </>
  );
}

export default About;
