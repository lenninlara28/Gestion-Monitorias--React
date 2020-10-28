const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const sequelize = require('./database/db');

//Middleware
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.use('/api/monitores/', require('./routes/monitores'));
app.use('/api/monitorias/', require('./routes/monitorias'));


app.listen(3000, () => {
    //Servidor OK
    console.log("Running on port 3001")

    //My connection DATABASE
    sequelize.sync( { force: false }).then(() => {
        console.log("Base De Datos Conectada");
    }).catch (error => {
        console.log("Se Produjo Un Error", error);
    })
})