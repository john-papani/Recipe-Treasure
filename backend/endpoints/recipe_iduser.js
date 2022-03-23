const express = require("express");
const mysql = require("mysql");

var app = express();

function getUserRecipes(req, res) {
    let pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "recipes",
    });
    let id = req.params.id


    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        console.log(id)
        connection.query("SELECT * FROM `main_app_recipe_fans` WHERE user_id = ?", [id], (err, rows) => {
            connection.release();
            if (!err) {
                res.json(rows)
            } else {
                console.log(err);
            }
        });
    });
}

app.get("/:id/recipes", getUserRecipes);
module.exports = app;