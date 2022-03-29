import React from "react";
import "../App.css"

function About() {
  return (
    <div className="about">
      <div className="about-all">
        <h1> About Recipe App </h1>
        <h2>Peinas ? Efages !!!</h2>
        <p>
          This is a website with some delicious recipes from all over the world
        </p>
        <ol>
         <b> You can:</b>
          <ul>Delete a recipe</ul>
          <ul>Upload a new recipe</ul>
        </ol>
      </div>
      <div className="about-me">
        <h2>Check my github repos! :) <br />
        <a href="https://github.com/john-papani/" >Here</a>
        </h2>
      </div>
    </div>
  );
}

export default About;
