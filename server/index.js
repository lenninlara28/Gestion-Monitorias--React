const express = require("express");
const app = express();
const mysql = require("mysql");

//Mysql Connettion
const db = mysql.createPool({
    host : "localhost",
    user : "root",
    password : "",
    database : "gestion_monitorias"
});

//API para Insertart
app.post("/api/monitores/insert", (req, res) => {
    const SqlGet = "SELECT * FROM 'monitores"
    db.query(SqlGet,(err, result=>{
        res.send("Deberia Listart")
    }));
});

app.listen(3001,() => {
    console.log("Running on port 3001")
})