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
    let title = req.body.title
    let description = req.body.description
    let image = req.body.image
    console.log(title)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("INSERT INTO recipes (title, description, image) VALUES (?,?,?)", [title, description, image ], (err, rows) => {
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