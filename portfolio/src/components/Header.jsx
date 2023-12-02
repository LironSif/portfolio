import React from "react";
import "./Header.css";
import logo from "../assets/logo2.png";

const Header = () => {
  const navOptions = ["Home", "About me", "My Projects", "Contact"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Your Logo" />
      </div>

      <div className="nav-btn">
        {navOptions.map((el, i) => (
          <div
            key={i}
            className="navDiv"
            onClick={() => {
              scrollToSection(el);

              console.log(el);
            }}
          >
            {el}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Header;
