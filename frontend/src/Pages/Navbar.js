import React from "react";
import "../App.css"
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <img src={"https://dcassetcdn.com/design_img/10150/25224/25224_294121_10150_image.jpg"} style={{height:"80px",width:"15%"}} alt="recipe-logo"/>
      <ul className="nav-links">
        <Link className="link" to="/home">
          <li> Home </li>
        </Link>
        <Link className="link" to="/upload">
          <li> Upload </li>
        </Link>
        <Link className="link" to="/about">
          <li> About </li>
        </Link>
      </ul>
    </nav>
  );
}
export default Nav;
