'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Monitores extends Model {}
  Monitores.init({
    cedula: DataTypes.INTEGER,
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    programa_academico: DataTypes.STRING,
    semestre: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Monitores'
  });

  module.exports = Monitores;