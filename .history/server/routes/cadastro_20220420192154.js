const express = require('express')
const router = express.Router()
// CONEXÃO COM O BANCO
const mysql = require('mysql')
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MysServer",
    database: "nodeJs",
})

router.post('/', (req, res) => {
    const { usuario } = req.body
    const { senha } = req.body
    const { email } = req.body

    let query = "INSERT INTO usuarios (usuario, email, senha) VALUES (?, ?, ?)"

    db.query(query, [usuario, email, senha], (error, result) => {
        if (error) console.log(error)
        else res.send(result)

    })
})

router.get('/', (req, res) => {
    const { usuario } = req.body
    const { email } = req.body
 
    let query = "SELECT * FROM usuarioss WHERE usuario='?' AND email='?'"

    db.query(query, [usuario, email], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

module.exports = router