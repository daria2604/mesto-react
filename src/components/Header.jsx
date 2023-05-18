import React from "react"
import headerLogo from "../images/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header__link">
        <img
          src={headerLogo}
          alt="Логотип"
          className="header__logo"
        />
      </a>
    </header>
  )
};

export default Header;
