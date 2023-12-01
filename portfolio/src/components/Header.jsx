import React from "react";
import "./Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  const navOptions = ["Home", "About me", "My Projects", "Contact"];

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>

      <div className="nav-btn">
        {navOptions.map((el, i) => (
          <div key={i} className="navDiv">
            {el}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
