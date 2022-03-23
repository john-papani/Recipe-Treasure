import React from "react";
import "../style/Navbar.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <h3> Logo </h3>
      <ul className="nav-links">
        <Link className="link" to="/home">
          <li> Home </li>
        </Link>
        <Link className="link" to="/upload">
          <li> Upload </li>
        </Link>
        <Link className="link" to="/delete">
          <li> Delete </li>
        </Link>
        <Link className="link" to="/about">
          <li> About </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
