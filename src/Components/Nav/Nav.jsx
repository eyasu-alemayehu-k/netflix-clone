import React, { useEffect, useState } from "react";
import "./Nav.css";
import Logo from "../../image/Netflix_logo.png";
import Avatar from "../../image/Netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  },[]);
  return (
    <div className={`nav ${show && 'nav__bg--black'}`}>
      <img className="nav__logo" src={Logo} alt="Netflix Logo" />
      <img className="nav__avatar" src={Avatar} alt="Avatar Logo" />
    </div>
  );
}

export default Nav;
