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
    let title = req.params.title


    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log("connected as id " + connection.threadId);
        connection.query("DELETE  from recipes WHERE title = ? ", [title], (err, rows) => {
            connection.release();
            if (!err) {
                console.log(title);
                res.json(rows)
            } else {
                console.log(err);
            }
        });
    });
}

app.post("/deleteId/:title", deleteIDRecipe);
module.exports = app;