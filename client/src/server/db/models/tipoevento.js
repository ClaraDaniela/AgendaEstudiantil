'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoEvento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      TipoEvento.hasMany(models.Evento, { foreignKey: 'idTipoEvento' });
    }
  }
  TipoEvento.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'TipoEvento',
    timestamps: false,
  });
  return TipoEvento;
};