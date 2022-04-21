const express = require('express')
const app = express()
const mysql = require('mysql')
const cors = require('cors')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MysServer",
    database: "nodeJs",
})

var corsOptions = {
    origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(express.json())

const loginRoute = require('./routes/login')
const cadastroUsuarioRoute = require('./routes/cadastroUsuario')

app.use('/login', loginRoute)
app.use('/cadastro', cadastroUsuarioRoute)

app.listen(3001, () => {
    console.log('servidor online')
})

