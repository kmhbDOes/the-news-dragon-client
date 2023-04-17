import React from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center">
      <img src={logo} alt="" />
      <p className="text-secondary">
        <small>Journalism Without Fear or Favor</small>
      </p>
      <p>{moment().format("dddd, MMMM Do YYYY")}</p>
    </div>
  );
};

export default Header;
