'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Modalidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Modalidad.hasMany(models.Materia, { foreignKey: 'idModalidad' });
    }
  }
  Modalidad.init({
    nombre: { 
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Modalidad',
    timestamps: false,
  });
  return Modalidad;
};