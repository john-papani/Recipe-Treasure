const express = require("express");
const mysql = require("mysql");

var app = express();

function uploadRecipes(req, res) {
    let pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "recipes",
    });
    let id = req.body.id
    let title = req.body.title
    let description = req.body.description
    let image = req.body.image
    let uploaded_at = req.body.uploaded_at
    let owner_id = req.body.owner_id
    console.log(title)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("INSERT INTO main_app_recipe (id, title, description, image, uploaded_at, owner_id) VALUES (?,?,?,?,?,?)", [id, title, description, image, uploaded_at, owner_id], (err, rows) => {
            connection.release()
            if (!err) {
                console.log("Upload OK")
                res.json("OK")
            } else {
                console.log(err);
            }
        });
    });
}

app.post("/uploadRecipe", uploadRecipes);
module.exports = app