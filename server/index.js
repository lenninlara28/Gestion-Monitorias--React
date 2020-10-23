const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require("mysql");

//Mysql Connettion
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "gestion_monitorias"
});

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//API para Insert
app.post("/api/monitores/insert", (req, res) => {
    const cedula = req.body.cedula
    const nombre = req.body.nombre
    const apellido = req.body.apellido
    const telefono = req.body.telefono
    const programa = req.body.programa
    const semestre = req.body.semestre

    const sqlInsert =
        "INSERT INTO monitores (Cedula,Nombre,Apellidos,telefono,Programa_Academico,Semestre) VALUES (?,?,?,?,?,?)";
        db.query(sqlInsert, [cedula, nombre, apellido, telefono, programa, semestre], (err, result) => {
        console.log(err);
    });
});

//API para Traer
app.get("/api/monitores/get", (req, res) => {
    const sqlSelect =
        "SELECT * FROM monitores";
        db.query(sqlSelect,(err, result) => {
        res.send(result);
    });
});

app.listen(3001, () => {
    console.log("Running on port 3001")
})