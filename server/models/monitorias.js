'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');

class Monitorias extends Model {}
  Monitorias.init({
    monitor: DataTypes.STRING,
    materia: DataTypes.STRING,
    fecha: DataTypes.DATE,
    salon: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Monitorias',
  });

  module.exports = Monitorias;