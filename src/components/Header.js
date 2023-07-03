import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="lg:py-8">
      <div className="lg:px-20 mx-auto flex items-center justify-between ">
        <img src={logo} alt="" width="100px" />
        <Link to="contact" smooth={true}>
          <button className="btn btn-lg">Contact me</button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
