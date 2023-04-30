import "../../../../src/App.css";
import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import Container from "react-bootstrap/Container";

const Header = () => {
  return (
    <Container className="text-center">
      <div>
        <img className="logo logo-spin" src={logo} alt="NavLogo" />
        <p>Journalism Without Fear or Favour</p>
        <h3>{moment().format("dddd, MMMM D, YYYY")}</h3>
      </div>
      <div className="d-flex">
        <button className="button logo">Latest</button>
        <Marquee speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
