'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Evento.belongsTo(models.Materia, { foreignKey: 'idMateria' });
      Evento.belongsTo(models.TipoEvento, { foreignKey: 'idTipoEvento' });
      Evento.belongsTo(models.EstadoEvento, { foreignKey: 'idEstadoEvento' });
      Evento.hasOne(models.Resultado, { foreignKey: 'eventoId' });      
    }
  }
  Evento.init({
    numero: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    temasAEstudiar: DataTypes.TEXT,
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    idMateria: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idTipoEvento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idEstadoEvento: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Evento',
    timestamps: false,
  });
  return Evento;
};