const sequelize = require('sequelize')

const db = require('./db');

const Tasks = db.define("empresas", {
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
  data: {
    type:  sequelize.DATE,
    allowNull: false
  },
  status: {
    type:  sequelize.BOOLEAN,
    allowNull: false
  },
  removido: {
    type:  sequelize.STRING,
    allowNull: false
  }
})

Tasks.sync({ alter: true})

module.exports = Tasks