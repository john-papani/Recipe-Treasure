const express = require("express")
const path = require("path")
const bodyParser = require("body-parser")
const app = express()
const cors = require("cors")
const port = 8000;

app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname))
});

app.listen(port, () => console.log(`Listen on port ${port}`))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

//main endpoints
let allRecipes = require("./endpoints/recipes.js")
let upRecipe = require("./endpoints/up_recipe.js")
let idRecipe = require("./endpoints/recipe_title.js")
let idDelete = require("./endpoints/delete_title.js")


//main endpoints
app.use("/", allRecipes)
app.use("/", upRecipe)
app.use("/", idRecipe)
app.use("/", idDelete)
