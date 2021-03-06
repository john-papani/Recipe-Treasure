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

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("SELECT * from recipes ORDER BY title ASC", (err, rows) => {
            connection.release();
            if (!err) {
                console.log(rows[0].title);
                res.json(rows)
            } else {
                console.log(err);
            }
        });
    });
}

app.get("/recipes", getAllRecipes);
module.exports = app;