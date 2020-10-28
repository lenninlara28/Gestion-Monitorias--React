const express = require("express");
const router = express.Router();
const Monitores = require('../models/monitores');

//CREATE '/api/monitores'
router.post('/', (req, res) => {
    Monitores.create({
        cedula: req.body.cedula,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        telefono: req.body.telefono,
        programa_academico: req.body.programa,
        semestre: req.body.semestre
    }).then(post => {
        res.json(post);
    })
});

//READ '/api/monitores'
router.get('/', (req, res) => {
    Monitores.findAll().then(result =>{
        res.json(result);
    })
    
});

//UPDATE
router.patch('/:id', (req, res) => {
    Monitores.update({
        cedula: req.body.cedula,
        nombres: req.body.nombre,
        apellidos: req.body.apellido,
        telefono: req.body.telefono,
        programa_academico: req.body.programa,
        semestre: req.body.semestre
    },{
        where: {
            id: params.id
        }
    }).then(result =>{
        res.json(result);
    });
});

//DELETE '/api/delete/:Monitor'
router.delete('/:id', (req, res) => {
    Monitores.destroy({
     where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;