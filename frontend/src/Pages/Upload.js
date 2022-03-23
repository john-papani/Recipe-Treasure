import axios from "axios";
import React, { useState } from "react";
import "../style/upload.css";

function Upload() {
  const [rname, setRname] = useState("");
  const [rdesc, setRdesc] = useState("");
  const [rlink, setRlink] = useState("");
  const [rid, setRid] = useState("");

  const submitRecipe = () => {
    axios
      .post("http://localhost:8000/uploadRecipe", {
        id: rid,
        title: rname,
        description: rdesc,
        image: rlink,
      })
      .then(() => {
        alert("succesful insert");
      });
  };

  return (
    <div className="Upload">
      <h1>Upload link</h1>

      <div className="id">
        ID:
        <input
          type="text"
          name="rtitle"
          onChange={(e) => {
            setRid(e.target.value);
          }}
        />
      </div>
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
