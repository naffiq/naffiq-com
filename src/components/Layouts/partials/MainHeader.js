import React from "react";
import { Link, withRouter } from "react-router-dom";

import avatarSrc from "./assets/avatar.png";
import "./MainHeader.css";

const MainHeader = ({ location: { pathname } }) => {
  return (
    <header id="app-header">
      <div className="container">
        <Link className="header-avatar" to="/">
          <img
            src={avatarSrc}
            className="header-avatar-image"
            alt="Galymzhan Abdugalimov"
          />
          @naffiq
        </Link>

        <ul className="app-header-menu">
          <li className={pathname === "/about" ? "active" : ""}>
            <Link to="/about">About</Link>
          </li>
          <li className={pathname === "/blog" ? "active" : ""}>
            <Link to="/blog">Blog</Link>
          </li>
          {/* <li>
            <Link to="/projects">Projects</Link>
          </li> */}
        </ul>
      </div>
    </header>
  );
};

export default withRouter(MainHeader);
