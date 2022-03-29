const express = require("express");
const mysql = require("mysql");

var app = express();

function getAllRecipes(req, res) {
    let pool = mysql.createPool({
        connectionLimit: 10,
        host: "localhost",
        user: "root",
        password: "",
        database: "recipes",
    });
    let title = req.params.title

console.log(title)
    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("SELECT * from recipes WHERE title LIKE ? ", ["%"+title+"%"], (err, rows) => {
            connection.release();
            if (!err) {
                console.log(rows);
                res.json(rows)
            } else {
                console.log(err);
            }
        });
    });
}

app.get("/recipes/:title", getAllRecipes);
module.exports = app;