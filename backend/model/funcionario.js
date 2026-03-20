const { DataTypes } = require('sequelize');
const sequelize = require('../server/db');

const Funcionario = sequelize.define('funcionario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  funcao: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'funcionario',
  timestamps: false
});

module.exports = Funcionario;