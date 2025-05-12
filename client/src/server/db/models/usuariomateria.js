'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UsuarioMateria extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UsuarioMateria.init({
    usuarioId: DataTypes.INTEGER,
    materiaId: DataTypes.INTEGER,
    fechaAprobacion: DataTypes.DATE,
    estadoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UsuarioMateria',
  });
  return UsuarioMateria;
};