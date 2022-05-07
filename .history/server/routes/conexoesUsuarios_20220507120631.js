const express = require('express')
const router = express.Router()
// CONEXÃO COM O BANCO
const mysql = require('mysql')
const { route } = require('./login')
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "MysServer",
    database: "nodeJs",
})

router.get('/', (req, res) => {
    const { user } = req.query
    const { senha } = req.query

    let sql = "SELECT * FROM usuarios WHERE usuario=? AND senha=?"

    db.query(sql, [user, senha], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})

router.post('/', (req, res) => {
    const { id } = req.body
    const { token } = req.body

    let sql = "INSERT INTO conexoes_usuarios (idUsuario, token, dataHoraLog) VALUES (?, ?, ?)"

    db.query(sql, [id, token, ''], (err, result) => {
        if (err) console.log(err)
        else res.send(result)
    })
})



module.exports = router