import React from "react";
import "../App.css"
import logo from  "../img/icons8-delete-100.png"
import axios from "axios"

const Recipe = ({title, description, img}) => {

    const Deleterecipe = () => {
        axios
            .post(`http://localhost:8000/deleteId/${title}`)
            .then(() => {
                alert(`succesful delete: ${title}`);
            })
            .catch((err) => console.log(err));
        window.location.reload(false);

    };


    return (
        <div className="recipe">
            <h1>  {title} < /h1>
               {/* <h2>  <button> <img src={logo}  style={{height: "25px"}}  onClick={Deleterecipe} alt="my image"/></button></h2>*/}
               <button  className="delete-button" onClick={Deleterecipe}> Delete</button>
            <p> {description} </p>
            <img className="image" src={img} alt=""/>
        </div>
    );
};

export default Recipe;
