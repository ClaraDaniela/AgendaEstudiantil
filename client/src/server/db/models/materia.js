'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Materia extends Model {
    static associate(models) {
      Materia.belongsTo(models.Modalidad, { foreignKey: 'idModalidad' });
      Materia.hasMany(models.Evento, { foreignKey: 'idMateria' });

      // Relaciones para correlatividad
      Materia.hasMany(models.Correlatividad, { foreignKey: 'materiaId', as: 'CorrelativasRequeridas' });
      Materia.hasMany(models.Correlatividad, { foreignKey: 'correlativaId', as: 'MateriasQueRequierenEsta' });
    }

    // calcular el promedio
    getPromedioCalculado() {
      const eventos = this.Eventos || [];
      //filtrar por parciales y recus de la materia en cuestion
      const parcialesYRecus = eventos.filter(e => {
        return e.TipoEvento && ['Parcial', 'Recuperatorio'].includes(e.TipoEvento.nombre);
      });
      //agrupa segun el numero, por ejemplo, recuperatorio 1, que significa que es el del primer parcial
      const agrupados = {};
      for (const evento of parcialesYRecus) {
        const num = evento.numero;
        const tipo = evento.TipoEvento.nombre;
        const nota = evento.Resultado?.nota;

        if (!agrupados[num]) agrupados[num] = {};

        if (tipo === 'Parcial') agrupados[num].parcial = nota;
        else if (tipo === 'Recuperatorio') agrupados[num].recuperatorio = nota;
      }
      //si existe un recuperatorio, pisa la nota del parcial, sino, solo usa la nota del parcial
      const notasFinales = Object.values(agrupados)
        .map(({ parcial, recuperatorio }) => recuperatorio ?? parcial)
        .filter(n => n != null);
      
      if (notasFinales.length === 0) return null;
      //suma los resultados y los divide por el largo  de notas finales, luego lo redonde a 2 decimales
      const suma = notasFinales.reduce((acc, n) => acc + parseFloat(n), 0);
      return (suma / notasFinales.length).toFixed(2);
    }
  }

  Materia.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anioDeCarrera: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    horario: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    anioAcademico: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idModalidad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    promedio: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getPromedioCalculado();
      }
    }
  }, {
    sequelize,
    modelName: 'Materia',
    timestamps: false,
  });

  return Materia;
};
