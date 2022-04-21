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

// IMPORT ROUTES
const loginRoute = require('./routes/login')
const cadastroRoute = require('./routes/cadastro')

app.use('/login', loginRoute)
app.use('/cadastro', cadastroRoute)

app.listen(3001, () => {
    console.log('servidor online')
})

