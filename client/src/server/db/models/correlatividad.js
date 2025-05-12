'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Correlatividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Correlatividad.belongsTo(models.Materia, { foreignKey: 'materiaId', as: 'Materia' });
      Correlatividad.belongsTo(models.Materia, { foreignKey: 'correlativaId', as: 'Correlativa' });
    }
  }
  Correlatividad.init({
    materiaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    correlativaId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Correlatividad',
    timestamps: false,
  });
  return Correlatividad;
};