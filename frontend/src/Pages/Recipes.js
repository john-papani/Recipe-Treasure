import React from "react";
import style from "../style/test.css";

const Recipe = ({ id,title, description, img }) => {
  return (
    <div className="recipe">
      <h1> {id} {title} </h1>
       <p> {description} </p>
      <img className="image" src={img} alt="" />
    </div>
  );
};

export default Recipe;
