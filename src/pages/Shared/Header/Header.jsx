import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import { Button } from "react-bootstrap";
import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <Container className="mt-4">
      <div className="text-center">
        <img src={logo} alt="" />
        <p className="text-secondary">
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY")}</p>
      </div>
      <div className="d-flex">
        <Button variant="danger">Latest</Button>
        <Marquee speed={50}>I can be a react component</Marquee>
      </div>
    </Container>
  );
};

export default Header;
