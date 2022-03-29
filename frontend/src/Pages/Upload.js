import axios from "axios";
import React, { useState } from "react";
import "../App.css"
function Upload() {
  const [rname, setRname] = useState("");
  const [rdesc, setRdesc] = useState("");
  const [rlink, setRlink] = useState("");

  const submitRecipe = () => {
    axios
      .post("http://localhost:8000/uploadRecipe", {
        title: rname,
        description: rdesc,
        image: rlink,
      })
      .then(() => {
        alert("succesful insert");
      });
      window.location.reload(false);
  };

  return (
    <div className="upload">
      <h1>Upload link</h1>
      <div className="form">
        <label>Recipe Name:</label>
        <input
          type="text"
          name="rtitle"
          onChange={(e) => {
            setRname(e.target.value);
          }}
        />
        <label>Description:</label>
        <input
          type="text"
          name="rdescription"
          onChange={(e) => {
            setRdesc(e.target.value);
          }}
        />
        <label>Image Link:</label>
        <input
          type="text"
          name="rlink"
          onChange={(e) => {
            setRlink(e.target.value);
          }}
        />
        <button className="upload-button" onClick={submitRecipe} type="submit">
          Upload
        </button>
      </div>
    </div>
  );
}

export default Upload;
