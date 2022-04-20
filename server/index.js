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

app.post('/cadastrarUsuario', (req, res) => {
    const { usuario } = req.body
    const { senha } = req.body
    const { email } = req.body

    let query = "INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)"

    db.query(query, [usuario, senha, email], (error, result) => {
        if(error) console.log(error)
        else res.send(result)
        
    })

})

app.get('/selectUsuario', (req, res) => {

    let query = "SELECT * FROM usuarios"

    db.query(query, (err, result) => {
        if(err) console.log(err)
        else res.send(result)
    })
})

app.listen(3001, () => {
    console.log('servidor online')
})

