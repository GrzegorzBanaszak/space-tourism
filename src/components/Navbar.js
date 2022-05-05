import React from "react";
import {
  NabBlur,
  NavContainer,
  NavHamburger,
  NavLogo,
  NavMenu,
  NavMobile,
  NavMobileContainer,
} from "./navbar.styled";
import logo from "../assets/shared/logo.svg";
import openHamburger from "../assets/shared/icon-hamburger.svg";
import closeHamburger from "../assets/shared/icon-close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav>
        <NavContainer>
          <NavLogo>
            <img src={logo} alt="logo" />
          </NavLogo>
          <NavMenu>
            <Link to="/">
              <b>00</b> Home
            </Link>
            <Link to="/destination">
              <b>01</b> Destination
            </Link>
            <Link to="/crew">
              <b>02</b> Crew
            </Link>
            <Link to="/technology">
              <b>03</b> Technology
            </Link>
          </NavMenu>
          <NavHamburger onClick={() => setIsOpen((prev) => !prev)}>
            <img
              src={isOpen ? closeHamburger : openHamburger}
              alt="toggle-menu"
            />
          </NavHamburger>
        </NavContainer>
      </nav>
      <NavMobile isOpen={isOpen}>
        <NavMobileContainer>
          <Link to="/">
            <b>00</b> Home
          </Link>
          <Link to="/destination">
            <b>01</b> Destination
          </Link>
          <Link to="/crew">
            <b>02</b> Crew
          </Link>
          <Link to="/technology">
            <b>03</b> Technology
          </Link>
        </NavMobileContainer>
      </NavMobile>
    </>
  );
};

export default Navbar;
