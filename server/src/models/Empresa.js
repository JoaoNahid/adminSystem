const sequelize = require('sequelize')

const db = require('./db');

const Empresa = db.define("empresas", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  nome: {
    type:  sequelize.STRING,
    allowNull: false
  },
  proprietario: {
    type:  sequelize.STRING,
    allowNull: false
  },
  removido: {
    type:  sequelize.STRING,
    allowNull: false
  }
})

Empresa.sync({ alter: true})

module.exports = Empresa