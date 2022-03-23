import "../App.css";
import React, { useEffect, useState } from "react";
//import all_recipes from "./fullrecipes.json";
//https://raw.githubusercontent.com/LeaVerou/forkgasm/master/recipes.json
import Recipe from "./Recipes";
import axios from "axios";

const Home = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const baseURL = `http://localhost:8000/recipes/${query}`;
  const getRecipes = async () => {
    try {
      const response = await axios.get(baseURL, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const data = response.data;
      console.log(response);
      setRecipes(data);
      //console.log(response.data);
    } catch (err) {
      console(err.response);
    }
  };

  // const getRecipes = () => {

  //   setRecipes(all_recipes)
  //   console.log(all_recipes);

  // };
  useEffect(() => {
    getRecipes();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
    setQuery(e.target.value) // me ayto otan grafeis allazei 
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <h1>Oles Oi Syntages Mas</h1>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type="text"
          label="Type Number"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            img={recipe.image}
            description={recipe.description}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
