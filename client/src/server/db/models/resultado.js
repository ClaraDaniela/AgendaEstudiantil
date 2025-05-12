'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resultado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Resultado.belongsTo(models.Evento, { foreignKey: 'eventoId' });
    }
  }
  Resultado.init({
    nota: DataTypes.DECIMAL,
    eventoId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Resultado',
    timestamps: false,
  });
  return Resultado;
};