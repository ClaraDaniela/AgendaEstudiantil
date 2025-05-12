'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoEvento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      EstadoEvento.hasMany(models.Evento, { foreignKey: 'idEstadoEvento' });
    }
  }
  EstadoEvento.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'EstadoEvento',
    timestamps: false,
  });
  return EstadoEvento;
};