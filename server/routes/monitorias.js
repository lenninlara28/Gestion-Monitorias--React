const express = require("express");
const router = express.Router();
const Monitorias = require('../models/monitorias');

//CREATE '/api/monitorias'
router.post('/', (req, res) => {
    Monitorias.create({
        monitor: req.body.monitor,
        materia: req.body.materia,
        fecha: req.body.fecha,
        salon: req.body.salon
    }).then(post => {
        res.json(post);
    })
});

//READ '/api/monitorias'
router.get('/', (req, res) => {
    Monitorias.findAll().then(result =>{
        res.json(result);
    })
    
});

//UPDATE
router.patch('/:id', (req, res) => {
    Monitorias.update({
        monitor: req.body.monitor,
        materia: req.body.materia,
        fecha: req.body.fecha,
        salon: req.body.salon
    },{
        where: {
            id: params.id
        }
    }).then(result =>{
        res.json(result);
    });
});

//DELETE '/api/delete/:Monitoria'
router.delete('/:id', (req, res) => {
    Monitorias.destroy({
     where: {
            id: req.params.id
        }
    }).then(result => {
        res.json(result);
    })
});

module.exports = router;