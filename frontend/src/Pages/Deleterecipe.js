import axios from "axios";
import React, { useState } from "react";
import "../style/delete.css";

function Delete() {
  const [rid, setRid] = useState("");

  const Deleterecipe = () => {
    axios
      .post(`http://localhost:8000/deleteId/${rid}`, {
        id: rid,
      })
      .then(() => {
        alert("succesful delete");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="delete">
      <h1>Delete Page</h1>
      <h3>Please text the id recipe to delete</h3>
        <div className="delete-id">
          ID:
          <input
            type="text"
            name="rid"
            onChange={(e) => {
              setRid(e.target.value);
            }}
          />
        </div>
      <button className="delete-button" onClick={Deleterecipe} type="submit">
        DELETE
      </button>
    </div>
  );
}

export default Delete;
