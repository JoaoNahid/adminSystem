const sequelize = require('sequelize');

const conn = new sequelize("granja", "root", "nahidMysql#03", {
  host: "localhost",
  dialect: "mysql"
})

// conn.authenticate()
// .then(() => {
//   console.log("conectado ao banco");
// }).catch(() => {
//   console.log("erro na conexão");
// })

module.exports = conn