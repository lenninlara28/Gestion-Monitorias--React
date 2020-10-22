const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "gestion_monitorias"
});

app.get("/", (req,res) => {
    res.send("")
})

app.listen(3001,() => {
    console.log("Running on port 3001")
})