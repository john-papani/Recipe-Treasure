const express = require("express");
const mysql = require("mysql");

var app = express();

function deleteIDRecipe(req, res) {
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
        connection.query("DELETE  from main_app_recipe WHERE id = ?", [id], (err, rows) => {
            connection.release();
            if (!err) {
                console.log(id);
                res.json(rows)
            } else {
                console.log(err);
            }
        });
    });
}

app.post("/deleteId/:id", deleteIDRecipe);
module.exports = app;